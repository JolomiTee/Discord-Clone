import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Sidebar, SidebarContent, useSidebar } from "@/components/ui/sidebar";
import { tabTriggers } from "@/data";
import { useSidebarStateStore } from "@/hooks/base-context";
import { useEffect, useState } from "react";
import FriendsList from "./tabs/FriendsList";
import MessageList from "./tabs/MessageList";

const MessagesDisplayVariant = () => {
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
	const [selectedTab, setSelectedTab] = useState<string>("messages");

	return (
		<Sidebar className="border-none">
			<SidebarContent>
				<section className="bg-carbon relative text-[#FFFFFF99] h-full">
					<Tabs
						defaultValue="messages"
						className="w-full overflow-y-auto max-h-full scrollbar-hidden"
						value={selectedTab}
						onValueChange={setSelectedTab}
					>
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

						<TabsContent
							value="messages"
							className="text-[#FFFFFF99] pt-3 pb-[50px]"
						>
							<MessageList />
						</TabsContent>
						<TabsContent
							value="friends"
							className="px-3 text-[#FFFFFF99] pb-[50px]"
						>
							<FriendsList
								isMobile={isMobile}
								setSelectedTab={setSelectedTab}
							/>
						</TabsContent>
					</Tabs>
				</section>
			</SidebarContent>
		</Sidebar>
	);
};

export default MessagesDisplayVariant;
