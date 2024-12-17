import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import AddFriendModal from "@/components/friends/AddFriendModal";
import MobileSearchModal from "@/components/mobile_v_comps/MobileSearchModal";
import { Sidebar, SidebarContent, useSidebar } from "@/components/ui/sidebar";
import { useSidebarStateStore } from "@/hooks/base-context";
import { useOpenSearchBar } from "@/hooks/use-open-sidebar";
import { useEffect } from "react";
import IconButtons from "../../common/IconButtons";
import FriendsList from "./tabs/FriendsList";
import MessageList from "./tabs/MessageList";
import { messagesFilter, tabTriggers } from "@/data";

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
								{tabTriggers.map((tab) => (
									<TabsTrigger
										key={tab.value}
										value={tab.value}
										className="px-5 py-2 w-1/2"
									>
										{tab.label}
									</TabsTrigger>
								))}
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
							<MessageList />
						</TabsContent>
						<TabsContent
							value="friends"
							className="px-3 text-[#FFFFFF99]  pt-[120px] pb-[50px]"
						>
							<FriendsList />
						</TabsContent>
					</Tabs>
				</section>
			</SidebarContent>
		</Sidebar>
	);
};

export default MessagesDisplayVariant;
