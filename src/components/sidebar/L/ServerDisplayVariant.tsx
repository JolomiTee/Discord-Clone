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
import { Sidebar, SidebarContent, useSidebar } from "@/components/ui/sidebar";
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
		<Sidebar className=" border-none">
			<SidebarContent>
				<section className="bg-carbon relative text-[#FFFFFF99] h-full">
					<div>
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
									<img
										src="/icons/verified.svg"
										width={25}
										height={25}
									/>
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

							<Accordion
								type="multiple"
								defaultValue={["text-channels", "voice-channels"]}
								className="w-full"
								data-state="open"
							>
								<AccordionItem
									value="text-channels"
									className="border-none"
								>
									<AccordionTrigger className="pt-0 ">
										TEXT CHANNELS
									</AccordionTrigger>
									<AccordionContent className="px-3 flex flex-col gap-3">
										{textChannels.map((channel, i) => {
											const { name, type } = channel;
											return (
												<ChannelsButton
													key={i}
													serverId={serverId}
													channelId={i}
													name={name}
													type={type}
												/>
											);
										})}
									</AccordionContent>
								</AccordionItem>
								<AccordionItem
									value="voice-channels"
									className="border-none"
								>
									<AccordionTrigger className="pt-0">
										VOICE CHANNELS
									</AccordionTrigger>
									<AccordionContent className="px-3 flex flex-col gap-3">
										{voiceChannels.map((channel, i) => {
											const { name, type } = channel;
											return (
												<ChannelsButton
													key={i}
													serverId={serverId}
													channelId={i}
													name={name}
													type={type}
												/>
											);
										})}
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						</div>
					</div>
				</section>
			</SidebarContent>
		</Sidebar>
	);
};

export default ServerDisplayVariant;
