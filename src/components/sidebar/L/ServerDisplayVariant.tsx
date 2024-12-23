import ChannelList from "@/components/common/sidebar_buttons/ChannelsButton";
import DeleteServer from "@/components/common/sidebar_buttons/DeleteServer";
import JoinServer from "@/components/common/sidebar_buttons/JoinServer";
import LeaveServer from "@/components/common/sidebar_buttons/LeaveServer";
import ViewMembers from "@/components/common/sidebar_buttons/ViewMembers";
import LoadingSidebar from "@/components/common/skeletons/LoadingSidebar";
import CreateChannel from "@/components/forms/CreateChannel";
import { Accordion } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	useSidebar,
} from "@/components/ui/sidebar";
import { useSidebarStateStore } from "@/hooks/base-context";
import useClerkQuery from "@/hooks/use-query";
import { useSelectedServerMembersStore } from "@/hooks/use-server-members";
import { Channels, Servers } from "@/types";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AspectRatio } from "../../ui/aspect-ratio";
import { Separator } from "../../ui/separator";
import ServerCrudActions from "@/components/dialogs/ServerCrudActions";

const ServerDisplayVariant = () => {
	const { serverId } = useParams();
	const { user } = useUser();

	const { open, toggleSidebar, isMobile } = useSidebar();
	const { data, isLoading } = useClerkQuery<Servers>(`server/${serverId}`);

	const [server, setServer] = useState<Servers>();
	const [voiceChannels, setVoiceChannels] = useState<Channels[]>();
	const [textChannels, setTextChannels] = useState<Channels[]>();

	const serverMember = server?.members?.find(
		(member) => member.username === user?.username
	);

	const serverOwner = server?.ownedby.username === user?.username;

	const setServerMembers = useSelectedServerMembersStore(
		(state) => state.setServerMembers
	);

	const l_sidebar_state = useSidebarStateStore(
		(state) => state.l_sidebar_state
	);
	const setLSidebarState = useSidebarStateStore(
		(state) => state.setLSidebarState
	);

	useEffect(() => {
		if ((l_sidebar_state && !open) || (!l_sidebar_state && open)) {
			toggleSidebar();
		}

		if (isMobile) {
			setLSidebarState(false);
		}
	}, [l_sidebar_state, open]);

	useEffect(() => {
		if (!data) {
			return;
		}

		setServer(data.data);
		setServerMembers(data.data.members);

		// Filter channels based on type
		const channels = data.data.channels || [];

		setTextChannels(
			channels.filter((channel) => channel.channelType === "text")
		);
		setVoiceChannels(
			channels.filter((channel) => channel.channelType === "voice")
		);
	}, [data]);

	if (isLoading) {
		return <LoadingSidebar />;
	}

	return (
		<Sidebar className="border-none">
			<SidebarHeader className="bg-carbon p-0 gap-0">
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
					<div className="flex flex-col justify-center gap-2 text-white">
						<div className="flex items-center justify-between w-full">
							<p>{server?.name} </p>
							{serverOwner && (
								<Badge
									variant={"outline"}
									className="text-xs rounded-full ms-auto me-0 bg-discord-blue border-none cursor-default"
									title="You are a server admin"
								>
									Admin
								</Badge>
							)}
						</div>
						<p className="text-xs">{server?.description}</p>
					</div>

					{!serverMember ? <JoinServer serverId={serverId} /> : null}

					<Separator className="bg-[#FFFFFF26] h-0.5" />

					<div className="flex gap-2">
						{serverMember &&
							(serverOwner ? (
								<>
									<ServerCrudActions
										serverId={serverId}
										trigger="edit"
									/>
									<DeleteServer serverId={serverId} />
									{/*

									<CreateChannel
										serverId={serverId}
										trigger="create"
									/> */}
								</>
							) : (
								<LeaveServer serverId={serverId} />
							))}
						<ViewMembers />
					</div>
				</div>
			</SidebarHeader>

			<SidebarContent className="scrollbar-hidden p-3 pt-0 bg-carbon relative text-[#FFFFFF99] h-full">
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
