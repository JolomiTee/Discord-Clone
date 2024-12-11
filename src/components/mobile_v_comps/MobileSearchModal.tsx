import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTrigger,
} from "@/components/ui/dialog";
import { voiceChannels } from "@/data";
import { serverList } from "@/data/servers";
import usePersistAppState from "@/hooks/use-persist-app-state";
import { ChevronDown, Filter, Search } from "lucide-react";
import { Link } from "react-router-dom";
import ChatBubble from "../common/ChatBubble";
import IconButtons from "../common/IconButtons";
import SearchResultServerIcon from "../search/result_ui/SearchResultServerIcon";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../ui/accordion";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";

interface Props {
	type: string;
	open?: boolean;
	onOpenChange?: () => void;
}

const MobileSearchModal = ({ type, open, onOpenChange }: Props) => {
	const user = {
		userId: "1000",
		username: "GrassMaster333",
		userProfileImage: "/beluga.png",
	};

	const selected_tab = usePersistAppState((state) => state.selectedTab);
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			{!open && (
				<DialogTrigger>
					{type === "sidebar" ? (
						<SidebarMenuItem className="group/item group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center">
							<div
								className={`absolute top-1/2 -translate-y-1/2 -left-[1px] w-1.5 md:w-2 rounded-full transition-all duration-100 ${
									selected_tab === "search"
										? "h-10 bg-discord-blue"
										: "h-0 group-hover/item:h-5 bg-white opacity-0 group-hover/item:opacity-100"
								}`}
								style={{
									clipPath: "inset(0 0 0 50%)",
								}}
							/>
							<SidebarMenuButton
								tooltip={"search"}
								className="w-full gap-3 group-data-[collapsible=icon]:ps-0 text-base h-fit group-data-[collapsible=icon]:[&>span:last-child]:hidden p-0 ps-1.5"
							>
								<Avatar className="size-[45px] flex justify-center items-center">
									<AvatarImage
										src={`/icons/search.svg`}
										alt={`search icon`}
										className="w-[30px]"
									/>
								</Avatar>
								<span>Search</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
					) : type === "l_sidebar_search" ? (
						<IconButtons
							src="search"
							alt="mobile search trigger"
							sizes="size-[18px]"
							buttonStyles="rounded-full size-[35px] p-0 bg-[#FFFFFF08] border border-solid border-[#FFFFFF0F]"
						/>
					) : null}
				</DialogTrigger>
			)}

			<DialogContent className="rounded-[15px] w-[90%] sm:rounded-[15px] min-h-[50dvh] max-h-[90dvh] scrollbar-hidden bg-onyx text-[#B5BFE7] px-5">
				<DialogHeader className="gap-2">
					<div className="flex flex-row items-center justify-center h-fit gap-3">
						<div className="py-0 flex flex-row items-center gap-1 relative">
							<Search
								className="absolute left-2 top-1/2 -translate-y-1/2"
								width={20}
							/>
							<Input
								type="search"
								defaultValue="grass"
								placeholder="Search the whole of Rediscord"
								className="bg-black rounded-[15px] ring-0 border-0 w-full max-w-[250px] ps-8"
							/>
						</div>
					</div>

					<div className="flex flex-row justify-start items-start gap-3 w-full">
						<div className="inline-flex items-center gap-1 text-[#B5BFE7]">
							Filters <Filter className="size-4" />
						</div>
						<div className="flex flex-row flex-wrap justify-start gap-3 w-full">
							<Button className="w-fit h-fit text-sm rounded-full px-3 py-1">
								#general-chat <ChevronDown />
							</Button>
							<Button className="w-fit h-fit text-sm rounded-full px-3 py-1">
								New
							</Button>
							<Button className="w-fit h-fit text-sm rounded-full px-3 py-1">
								Old
							</Button>
							<Button className="w-fit h-fit text-sm rounded-full px-3 py-1">
								Relevant
							</Button>
						</div>
					</div>
				</DialogHeader>

				{/* Search Results */}
				<div
					className="scrollbar-hidden h-full"
					style={{
						maxHeight: "calc(90dvh - 200px)",
					}}
				>
					<Accordion
						type="multiple"
						defaultValue={["servers", "channels", "chats"]}
						className="w-full"
						data-state="open"
					>
						<AccordionItem value="servers" className="border-none">
							<AccordionTrigger className="pt-0 ">
								SERVERS
							</AccordionTrigger>
							<AccordionContent className="pe-3 flex flex-col gap-3">
								{serverList.map((item, i) => {
									const {
										name,
										profile_image_url: serverIcon,
										_id,
									} = item;
									return (
										<SearchResultServerIcon
											key={i}
											name={name}
											serverIcon={serverIcon}
											hasNotification={true}
											i={_id}
										/>
									);
								})}
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value="channels" className="border-none">
							<AccordionTrigger className="pt-0">
								CHANNELS
							</AccordionTrigger>
							<AccordionContent className="px-3 flex flex-col gap-3">
								{voiceChannels.map((channel, i) => {
									return (
										<Link
											key={i}
											// to={`@server/${String(id)}/@channel/${String(i)}`}
											to={`@server/search/@channel/${String(i)}`}
											className="flex justify-start items-center gap-2"
										>
											<img
												src={`/icons/${channel.type}.svg`}
												alt={channel.name}
												width={26}
												height={26}
											/>
											{channel.name}
										</Link>
									);
								})}
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value="chats" className="border-none">
							<AccordionTrigger className="pt-0">CHATS</AccordionTrigger>
							<AccordionContent className="px-3 flex flex-col gap-3">
								{Array.from([1, 2, 3, 4, 5]).map((_, i) => {
									return (
										<ChatBubble
											key={i}
											messageId={"12345"}
											time={"10:45"}
											message={"Looking for some grass?"}
											user={user}
										/>
									);
								})}
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default MobileSearchModal;
