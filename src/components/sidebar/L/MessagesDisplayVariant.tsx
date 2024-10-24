import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { messageList } from "@/data";
import { useStore } from "@/hooks/base-context";
import IconButtons from "../../IconButtons";
import FriendProfileCard from "./FriendProfileCard";
const MessagesDisplayVariant = () => {
	const switchLeftSidebarContext = useStore(
		(state) => state.switchLeftSidebarContext
	);
	return (
		<Tabs
			defaultValue="messages"
			className="w-full overflow-y-auto max-h-full scrollbar-hidden"
		>
			<div className="absolute bg-carbon w-full z-10 h-[120px]">
				<TabsList className="w-full h-[50px] justify-center px-2 gap-4">
					<TabsTrigger value="messages" className="px-5 py-1.5 w-1/2">
						Messages
					</TabsTrigger>
					<TabsTrigger value="friends" className="px-5 py-2 w-1/2">
						Friends
					</TabsTrigger>
				</TabsList>
				<div className="flex items-center justify-between gap-2 p-3">
					<Select>
						<SelectTrigger className="h-[35px] rounded-full bg-[#FFFFFF08] border border-solid border-[#FFFFFF0F] text-[#FFFFFF99] flex-row-reverse justify-end font-semibold">
							<SelectValue placeholder="Newest" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="oldest">Oldest</SelectItem>
							<SelectItem value="read">Read</SelectItem>
							<SelectItem value="unread">Unread</SelectItem>
						</SelectContent>
					</Select>

					<div className="flex gap-2 items-center ">
						<IconButtons
							src="search"
							alt="Search"
							sizes="size-[18px]"
							buttonStyles="rounded-full size-[35px] p-0 bg-[#FFFFFF08] border border-solid border-[#FFFFFF0F]"
						/>

						<IconButtons
							src="plus"
							alt="Add"
							sizes="size-[18px]"
							buttonStyles="rounded-full size-[35px] p-0 bg-[#FFFFFF08] border border-solid border-[#FFFFFF0F]"
						/>
					</div>
				</div>
			</div>

			<TabsContent
				value="messages"
				className="text-[#FFFFFF99] pt-[120px] pb-[50px] px-3"
			>
				<div className=" grid overflow-y-auto max-h-full scrollbar-hidden">
					{messageList.map((message, i) => {
						const {
							profileImg,
							user,
							online,
							hasMessage,
							messageCount,
							pinned,
						} = message;
						return (
							<FriendProfileCard
								key={i}
								user={user}
								profileImg={profileImg}
								online={online}
								hasMessage={hasMessage}
								messageCount={messageCount}
								pinned={pinned}
								action={() => {
									switchLeftSidebarContext("messages");
								}}
							/>
						);
					})}
				</div>
			</TabsContent>
			<TabsContent
				value="friends"
				className="px-3 text-[#FFFFFF99]  pt-[120px] pb-[50px]"
			>
				Change your friends here.
			</TabsContent>
		</Tabs>
	);
};

export default MessagesDisplayVariant;
