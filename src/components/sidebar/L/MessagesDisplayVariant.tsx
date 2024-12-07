import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import MobileSearchModal from "@/components/mobile_v_comps/MobileSearchModal";
import { Sidebar, SidebarContent, useSidebar } from "@/components/ui/sidebar";
import { messageList } from "@/data";
import { useSidebarStateStore } from "@/hooks/base-context";
import { useOpenSearchBar } from "@/hooks/use-open-sidebar";
import { useEffect } from "react";
import IconButtons from "../../common/IconButtons";
import DMCard from "../../common/sidebar_buttons/DMCard";
import FriendCard from "../../common/sidebar_buttons/FriendCard";
import AddFriendModal from "@/components/friends/AddFriendModal";

const MessagesDisplayVariant = () => {
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

	const messagesFilter = [
		{
			title: "Oldest",
			label: "oldest",
		},
		{
			title: "Read",
			label: "label",
		},
		{
			title: "Unread",
			label: "unread",
		},
	];

	return (
		<Sidebar className="border-none">
			<SidebarContent>
				<section className="bg-carbon relative text-[#FFFFFF99] h-full">
					<Tabs
						defaultValue="messages"
						className="w-full overflow-y-auto max-h-full scrollbar-hidden"
					>
						<div className="absolute bg-carbon w-full z-10 h-[120px]">
							<TabsList className="w-full h-[50px] justify-center px-2 gap-4">
								<TabsTrigger
									value="messages"
									className="px-5 py-2 w-1/2"
								>
									Messages
								</TabsTrigger>
								<TabsTrigger
									value="friends"
									className="px-5 py-2 w-1/2"
								>
									Friends
								</TabsTrigger>
							</TabsList>
							<div className="flex items-center justify-between gap-2 p-3">
								<Select>
									<SelectTrigger className="h-[35px] rounded-full bg-[#FFFFFF08] border border-solid border-[#FFFFFF0F] text-[#FFFFFF99] flex-row-reverse justify-end font-semibold">
										<SelectValue placeholder="Newest" />
									</SelectTrigger>
									<SelectContent className="bg-onyx border border-solid border-[#FFFFFF0F] text-[#FFFFFF] rounded-[10px]">
										{messagesFilter.map((filters) => (
											<SelectItem
												key={filters.label}
												className="rounded-[8px]"
												value={filters.label}
											>
												{filters.title}
											</SelectItem>
										))}
									</SelectContent>
								</Select>

								<div className="flex gap-2 items-center ">
									{!isMobile ? (
										<IconButtons
											src="search"
											alt="Search"
											sizes="size-[18px]"
											buttonStyles="rounded-full size-[35px] p-0 bg-[#FFFFFF08] border border-solid border-[#FFFFFF0F]"
											action={openSearchBar}
										/>
									) : (
										<MobileSearchModal type="l_sidebar_search" />
									)}

									<AddFriendModal />
								</div>
							</div>
						</div>

						<TabsContent
							value="messages"
							className="text-[#FFFFFF99] pt-[120px] pb-[50px]"
						>
							<div className=" grid overflow-y-auto max-h-full scrollbar-hidden">
								{messageList.map((message) => {
									const {
										profileImg,
										user,
										online,
										hasMessage,
										messageCount,
										id,
										slug,
									} = message;
									return (
										<DMCard
											key={id}
											dmId={id}
											slug={slug}
											user={user}
											profileImg={profileImg}
											online={online}
											hasMessage={hasMessage}
											messageCount={messageCount}
										/>
									);
								})}
							</div>
						</TabsContent>
						<TabsContent
							value="friends"
							className="px-3 text-[#FFFFFF99]  pt-[120px] pb-[50px]"
						>
							<div className=" grid overflow-y-auto max-h-full scrollbar-hidden">
								{messageList.map((message) => {
									const {
										profileImg,
										user,
										online,
										hasMessage,
										messageCount,
										id,
										slug,
										pinned,
									} = message;
									return (
										<FriendCard
											key={id}
											slug={slug}
											dmId={id}
											user={user}
											profileImg={profileImg}
											online={online}
											hasMessage={hasMessage}
											messageCount={messageCount}
											pinned={pinned}
										/>
									);
								})}
							</div>
						</TabsContent>
					</Tabs>
				</section>
			</SidebarContent>
		</Sidebar>
	);
};

export default MessagesDisplayVariant;
