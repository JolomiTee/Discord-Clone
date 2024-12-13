import ChannelList from "@/components/common/sidebar_buttons/ChannelsButton";
import { Accordion } from "@/components/ui/accordion";
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
import { useSidebarStateStore } from "@/hooks/base-context";
import { useOpenSearchBar } from "@/hooks/use-open-sidebar";
import useClerkQuery from "@/hooks/use-query";
import { Channels, Servers } from "@/types";
import {
	Archive,
	Edit,
	Ellipsis,
	FileDown,
	MessageCircleWarning,
	Pin,
	Trash,
} from "lucide-react";
import { useEffect, useState } from "react";
import IconButtons from "../../common/IconButtons";
import { AspectRatio } from "../../ui/aspect-ratio";
import { Separator } from "../../ui/separator";
import CreateChannel from "@/components/forms/CreateChannel";

const ServerDisplayVariant = ({
	serverId,
}: {
	serverId: string | undefined;
}) => {
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

	const { data } = useClerkQuery<Servers>(`server/${serverId}`);

	const [server, setServer] = useState<Servers>();
	const [voiceChannels, setVoiceChannels] = useState<Channels[]>();
	const [textChannels, setTextChannels] = useState<Channels[]>();

	useEffect(() => {
		if (data?.data) {
			setServer(data.data);

			// Filter channels based on type
			const channels = data.data.channels || [];

			setTextChannels(
				channels.filter((channel) => channel.channelType === "text")
			);
			setVoiceChannels(
				channels.filter((channel) => channel.channelType === "voice")
			);
		}
	}, [data]);

	return (
		<Sidebar className="border-none">
			<SidebarHeader className="bg-carbon p-0">
				<AspectRatio ratio={16 / 6}>
					<img
						src={server?.banner_image_url}
						alt={server?.name}
						className="object-cover h-full w-full"
					/>
				</AspectRatio>
				<div className="p-3 grid gap-3">
					<div className="flex items-start justify-between">
						<div className="grid items-center gap-2 text-white">
							<p>{server?.name}</p>
							<p className="text-xs">{server?.description}</p>
						</div>

						<DropdownMenu>
							<DropdownMenuTrigger>
								<Ellipsis />
							</DropdownMenuTrigger>
							<DropdownMenuContent className="rounded-[8px] bg-charcoal ">
								<DropdownMenuLabel className="text-white">
									Actions
								</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem className="text-white">
									<Edit /> Edit Server
								</DropdownMenuItem>
								<Separator className="my-1" />
								<DropdownMenuItem className="text-white bg-crimson rounded">
									<Trash /> Delete Server
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>

					<div className="flex justify-start items-center">
						<CreateChannel serverId={server?._id} />

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
