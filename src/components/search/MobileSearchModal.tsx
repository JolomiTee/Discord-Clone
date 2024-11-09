import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { Avatar, AvatarImage } from "../ui/avatar";
import { useCollapsibleSidebarStore } from "@/hooks/base-context";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ChevronDown, Filter, Search } from "lucide-react";
import SidebarServerIcon from "../server/SidebarServerIcon";
import { Label } from "../ui/label";
import ServerSearch from "./ServerSearch";
import ChatBubble from "../common/ChatBubble";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../ui/accordion";
import { voiceChannels } from "@/data";
import { Link } from "react-router-dom";

const MobileSearchModal = () => {
	const selected_tab = useCollapsibleSidebarStore(
		(state) => state.selectedTab
	);
	return (
		<Dialog>
			<DialogTrigger>
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
						<Avatar className="size-[50px] flex justify-center items-center">
							<AvatarImage
								src={`/icons/search.svg`}
								alt={`search icon`}
								className="w-[30px]"
							/>
						</Avatar>
						<span>Search</span>
					</SidebarMenuButton>
				</SidebarMenuItem>
			</DialogTrigger>

			<DialogContent className="rounded-[15px] w-[90%] sm:rounded-[15px] min-h-[50dvh] overflow-hidden bg-onyx text-[#B5BFE7] px-5">
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
				<div className="h-[50dvh]">
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
							<AccordionContent className="px-3 flex flex-col gap-3">
								<SidebarServerIcon
									title="Planters of Grass"
									serverIcon="/servers/midjourney.png"
									hasNotification={true}
									i={1}
								/>
								<SidebarServerIcon
									title="Harvesters of Grass"
									serverIcon="/servers/apex-legends.png"
									hasNotification={true}
									i={2}
								/>
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
								<ChatBubble
									profileImg="/touchgrasshq.png"
									time="10:33am"
									message="no??? to go out and enjoy the sun and touch grass"
									user="grass enjoyer"
								/>
								<ChatBubble
									profileImg="/touchgrasshq.png"
									time="10:33am"
									message="nuh uh grass is for losers you can't trick me"
									user="NOT a grass enjoyer"
								/>
								<ChatBubble
									profileImg="/touchgrasshq.png"
									time="10:33am"
									message="nuh uh grass is for losers you can't trick me"
									user="NOT a grass enjoyer"
								/>
								<ChatBubble
									profileImg="/touchgrasshq.png"
									time="10:33am"
									message="nuh uh grass is for losers you can't trick me"
									user="NOT a grass enjoyer"
								/>
								<ChatBubble
									profileImg="/touchgrasshq.png"
									time="10:33am"
									message="nuh uh grass is for losers you can't trick me"
									user="NOT a grass enjoyer"
								/>
								<ChatBubble
									profileImg="/touchgrasshq.png"
									time="10:33am"
									message="nuh uh grass is for losers you can't trick me"
									user="NOT a grass enjoyer"
								/>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default MobileSearchModal;
