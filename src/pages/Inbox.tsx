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
			<div className="flex items-center justify-start gap-2 p-3 mb-3">
				<Button className="rounded-[12px] bg-charcoal size-10 border border-solid border-[#FFFFFF0F] text-[#FFFFFF99]">
					<CheckCheck />
				</Button>
			</div>

			<TabsContent value="for_you" className="p-3">
				<div className="w-full flex flex-col justify-center items-center gap-5">
					<img src="/no-inbox.svg" className="w-1/3" />
					<span>You&apos;re all caught up!</span>
				</div>
			</TabsContent>
			<TabsContent value="unreads" className=" p-3">
				<div className="w-full flex flex-col justify-center items-center gap-5">
					<img src="/no-inbox.svg" className="w-1/3" />
					<span>You&apos;ve seen it all! No unreads messages</span>
				</div>
			</TabsContent>
			<TabsContent value="mentions" className=" p-3">
				<div className="w-full flex flex-col justify-center items-center gap-5">
					<img src="/no-inbox.svg" className="w-1/3" />
					<span>All quiet on the western front! No mentions</span>
				</div>
			</TabsContent>
		</Tabs>
	);
};

export default Inbox;
