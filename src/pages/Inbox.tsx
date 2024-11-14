import ForYou from "@/components/inbox/wrappers/ForYou";
import Mentions from "@/components/inbox/wrappers/Mentions";
import Unread from "@/components/inbox/wrappers/Unread";
import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCheck } from "lucide-react";
const Inbox = () => {
	return (
		<Tabs
			defaultValue="for_you"
			className="w-full h-screen flex flex-col bg-onyx text-white"
		>
			<div className="sticky top-0 z-20 bg-onyx">
				<TabsList className="w-full h-[50px] justify-between sm:justify-start px-2 sm:gap-4">
					<TabsTrigger value="for_you" className="md:px-5 py-1.5">
						For You
					</TabsTrigger>
					<TabsTrigger value="unreads" className="md:px-5 py-1.5">
						Unread
					</TabsTrigger>
					<TabsTrigger value="mentions" className="md:px-5 py-1.5">
						Mentions
					</TabsTrigger>
				</TabsList>

				<div className="flex items-center justify-start gap-2 p-3 text-[20px] font-bold">
					For You
					<Button className="rounded-[12px] bg-charcoal size-7 border border-solid border-[#FFFFFF0F] text-[#FFFFFF99]">
						<CheckCheck />
					</Button>
				</div>
			</div>

			<TabsContent value="for_you" className="flex-grow overflow-hidden">
				<ForYou />
			</TabsContent>
			<TabsContent value="unreads" className="flex-grow overflow-hidden">
				<Unread />
			</TabsContent>
			<TabsContent value="mentions" className="flex-grow overflow-hidden">
				<Mentions />
			</TabsContent>
		</Tabs>
	);
};

export default Inbox;
