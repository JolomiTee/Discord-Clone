import ChannelsButton from "@/components/common/sidebar_buttons/ChannelsButton";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	useSidebar,
} from "@/components/ui/sidebar";
import { textChannels, voiceChannels } from "@/data";
import { useSidebarStateStore } from "@/hooks/base-context";
import { useOpenSearchBar } from "@/hooks/use-open-sidebar";
import {
	Archive,
	Ellipsis,
	FileDown,
	MessageCircleWarning,
	Pin,
} from "lucide-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import IconButtons from "../../common/IconButtons";
import { AspectRatio } from "../../ui/aspect-ratio";
import { Separator } from "../../ui/separator";

const ServerDisplayVariant = () => {
	const { serverId } = useParams();
	const openSearchBar = useOpenSearchBar();
	const l_sidebar_state = useSidebarStateStore(
		(state) => state.l_sidebar_state
	);
	const setLSidebarState = useSidebarStateStore(
		(state) => state.setLSidebarState
	);
	const { open, toggleSidebar, isMobile } = useSidebar();

	useEffect(() => {
		if ((l_sidebar_state && !open) || (!l_sidebar_state && open)) {
			toggleSidebar();
		}

		if (isMobile) {
			setLSidebarState(false);
		}
	}, [l_sidebar_state, open]);

	return (
		<Sidebar className="border-none">
			<SidebarHeader className="bg-carbon p-0">
				<AspectRatio ratio={16 / 6}>
					<img
						src="/touchgrasshq.png"
						alt="touchgrasshq"
						className="object-cover h-full w-full"
					/>
				</AspectRatio>
				<div className="p-3 grid gap-3">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-2 text-white">
							<img src="/icons/verified.svg" width={25} height={25} />
							TouchGrass HQ
						</div>

						<DropdownMenu>
							<DropdownMenuTrigger>
								<Ellipsis />
							</DropdownMenuTrigger>
							<DropdownMenuContent className="rounded-[8px]">
								<DropdownMenuLabel>Actions</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<Archive /> Archive
								</DropdownMenuItem>
								<DropdownMenuItem>
									<FileDown />
									Export{" "}
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Pin /> Pin
								</DropdownMenuItem>
								<DropdownMenuItem>
									<MessageCircleWarning /> Report
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>

					<div className="flex justify-between items-center">
						<IconButtons
							src="notification"
							alt="Notifications"
							sizes="size-7"
						/>
						<IconButtons
							src="server_guide"
							alt="Notifications"
							sizes="size-7"
						/>
						<IconButtons
							src="browse_channels"
							alt="Notifications"
							sizes="size-7"
						/>
						<IconButtons
							src="events"
							alt="Notifications"
							sizes="size-7"
						/>
						<IconButtons
							src="search"
							alt="Notifications"
							action={openSearchBar}
						/>
					</div>

					<Separator className="bg-[#FFFFFF26] h-0.5" />
				</div>
			</SidebarHeader>

			<SidebarContent className="scrollbar-hidden pt-0 p-3 bg-carbon relative text-[#FFFFFF99] h-full">
				<Accordion
					type="multiple"
					defaultValue={["text-channels", "voice-channels"]}
					className="w-full"
					data-state="open"
				>
					<ChannelList
						serverId={serverId}
						value="text-channels"
						section="TEXT CHANNELS"
						channel={textChannels}
					/>
					<ChannelList
						serverId={serverId}
						value="voice-channels"
						section="VOICE CHANNELS"
						channel={voiceChannels}
					/>
				</Accordion>
			</SidebarContent>

			<SidebarFooter className="sr-only bg-carbon">
				Rediscord: A Discord Clone
			</SidebarFooter>
		</Sidebar>
	);
};

export default ServerDisplayVariant;

interface Props {
	value: string;
	section: string;
	serverId: string | undefined;
	channel: {
		id: number;
		slug: string;
		name: string;
		type: string;
	}[];
}
const ChannelList = ({ value, section, channel, serverId }: Props) => {
	return (
		<AccordionItem value={value} className="border-none">
			<AccordionTrigger className="pt-0">{section}</AccordionTrigger>
			<AccordionContent className="px-3 flex flex-col gap-3">
				{channel.map((channels) => {
					const { id, name, type, slug } = channels;
					return (
						<ChannelsButton
							key={id}
							serverId={serverId}
							channelId={id}
							name={name}
							slug={slug}
							type={type}
						/>
					);
				})}
			</AccordionContent>
		</AccordionItem>
	);
};