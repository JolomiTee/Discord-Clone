import ChannelList from "@/components/common/sidebar_buttons/ChannelsButton";
import JoinServer from "@/components/common/sidebar_buttons/JoinServer";
import LoadingSidebar from "@/components/common/skeletons/LoadingSidebar";
import CreateChannel from "@/components/forms/CreateChannel";
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
import useClerkQuery from "@/hooks/use-query";
import { Channels, Servers } from "@/types";
import { useUser } from "@clerk/clerk-react";
import { ExitIcon } from "@radix-ui/react-icons";
import { Edit, Ellipsis, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AspectRatio } from "../../ui/aspect-ratio";
import { Separator } from "../../ui/separator";

const ServerDisplayVariant = () => {
	const { serverId } = useParams();
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

	const { data, isLoading } = useClerkQuery<Servers>(`server/${serverId}`);

	const [server, setServer] = useState<Servers>();
	const [voiceChannels, setVoiceChannels] = useState<Channels[]>();
	const [textChannels, setTextChannels] = useState<Channels[]>();

	useEffect(() => {
		if (!data) {
			return;
		}

		setServer(data.data);

		// Filter channels based on type
		const channels = data.data.channels || [];

		setTextChannels(
			channels.filter((channel) => channel.channelType === "text")
		);
		setVoiceChannels(
			channels.filter((channel) => channel.channelType === "voice")
		);
	}, [data]);

	const { user } = useUser();

	if (isLoading) {
		return <LoadingSidebar />;
	}

	return (
		<Sidebar className="border-none">
			<SidebarHeader className="bg-carbon p-0">
				<AspectRatio ratio={16 / 6}>
					{server?.banner_image_url ? (
						<img
							src={server?.banner_image_url}
							alt={server?.name}
							className="object-cover h-full w-full"
						/>
					) : (
						<div className="w-full h-full flex justify-center items-center">
							No Banner Image
						</div>
					)}
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
								{server?.ownedby.username === user?.username ? (
									<>
										<DropdownMenuItem className="text-white">
											<CreateChannel serverId={serverId} />
										</DropdownMenuItem>
										<DropdownMenuItem className="text-white">
											<Edit /> Edit Server
										</DropdownMenuItem>
										<Separator className="my-1" />
										<DropdownMenuItem className="text-white bg-crimson rounded">
											<Trash /> Delete Server
										</DropdownMenuItem>
									</>
								) : (
									<DropdownMenuItem className="text-white bg-crimson rounded">
										<ExitIcon /> Leave Server
									</DropdownMenuItem>
								)}
							</DropdownMenuContent>
						</DropdownMenu>
					</div>

					{!server?.members?.find(
						(member) => member.username === user?.username
					) ? (
						<JoinServer serverId={serverId} />
					) : null}

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
