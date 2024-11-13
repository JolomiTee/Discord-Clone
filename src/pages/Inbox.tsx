import ForYou from "@/components/inbox/wrappers/ForYou";
import Mentions from "@/components/inbox/wrappers/Mentions";
import Unread from "@/components/inbox/wrappers/Unread";
import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCheck } from "lucide-react";
const Inbox = () => {
	return (
		<Tabs defaultValue="for_you" className="w-full bg-onyx text-white">
			<TabsList className="w-full h-[50px] justify-start px-2 gap-4">
				<TabsTrigger value="for_you" className="px-5 py-1.5">
					For You
				</TabsTrigger>
				<TabsTrigger value="unreads" className="px-5 py-1.5">
					Unread
				</TabsTrigger>
				<TabsTrigger value="mentions" className="px-5 py-1.5">
					Mentions
				</TabsTrigger>
			</TabsList>

			<TabsContent value="for_you">
				<div className="flex items-center justify-start gap-2 p-3 mb-3 text-[20px] font-bold">
					For You
					<Button className="rounded-[12px] bg-charcoal size-10 border border-solid border-[#FFFFFF0F] text-[#FFFFFF99]">
						<CheckCheck />
					</Button>
				</div>
				<ForYou />
			</TabsContent>
			<TabsContent value="unreads">
				<div className="flex items-center justify-start gap-2 p-3 mb-3 text-[20px] font-bold">
					Unreads
					<Button className="rounded-[12px] bg-charcoal size-10 border border-solid border-[#FFFFFF0F] text-[#FFFFFF99]">
						<CheckCheck />
					</Button>
				</div>
				<Unread />
			</TabsContent>
			<TabsContent value="mentions">
				<div className="flex items-center justify-start gap-2 p-3 mb-3 text-[20px] font-bold">
					Mentions
					<Button className="rounded-[12px] bg-charcoal size-10 border border-solid border-[#FFFFFF0F] text-[#FFFFFF99]">
						<CheckCheck />
					</Button>
				</div>
				<Mentions />
			</TabsContent>
		</Tabs>
	);
};

export default Inbox;
