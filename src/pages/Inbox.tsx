import ForYou from "@/components/inbox/wrappers/ForYou";
import Unread from "@/components/inbox/wrappers/Unread";
import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppNotificationState } from "@/hooks/base-context";
import { CheckCheck } from "lucide-react";
const Inbox = () => {
	const tabData = [
		{ value: "For You", label: "For You" },
		{ value: "Unreads", label: "Unread" },
	];
	const selectedTab = useAppNotificationState((state) => state.selectedTab);
	const toggle_selected_tab = useAppNotificationState(
		(state) => state.toggle_selected_tab
	);

	const handleClick = (tab: string) => {
		toggle_selected_tab(tab);
	};
	return (
		<Tabs
			defaultValue="For You"
			value={selectedTab}
			onValueChange={handleClick}
			className="w-full h-screen flex flex-col bg-onyx text-white"
		>
			<div className="sticky top-0 z-20 bg-onyx">
				<TabsList className="w-full h-[50px] justify-start px-2 gap-4">
					{tabData.map((tab) => (
						<TabsTrigger
							key={tab.value}
							value={tab.value}
							className="md:px-5 py-1.5"
						>
							{tab.label}
						</TabsTrigger>
					))}
				</TabsList>

				<div className="flex items-center justify-start gap-2 p-3 text-[20px] font-bold">
					{selectedTab}
					<Button
						title="Mark as read"
						className="rounded-[12px] bg-charcoal size-7 border border-solid border-[#FFFFFF0F] text-[#FFFFFF99]"
					>
						<CheckCheck />
					</Button>
				</div>
			</div>

			<TabsContent value="For You" className="flex-grow overflow-hidden">
				<ForYou />
			</TabsContent>
			<TabsContent value="Unreads" className="flex-grow overflow-hidden">
				<Unread />
			</TabsContent>
		</Tabs>
	);
};

export default Inbox;
