import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "./ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { messageList } from "@/data";
import { Badge } from "./ui/badge";
import { Pin, FileDown, MessageCircleWarning, Archive } from "lucide-react";
const Sidelist = () => {
	return (
		<section className="lg:min-w-[20%] bg-carbon relative">
			<Tabs
				defaultValue="messages"
				className="w-full overflow-y-auto max-h-full scrollbar-hidden"
			>
				<div className="absolute bg-carbon w-full z-10 h-[120px]">
					<TabsList className="w-full h-[55px] justify-center px-4 gap-4">
						<TabsTrigger value="messages" className="px-5 py-2 w-1/2">
							Messages
						</TabsTrigger>
						<TabsTrigger value="friends" className="px-5 py-2 w-1/2">
							Friends
						</TabsTrigger>
					</TabsList>
					<div className="flex items-center justify-between gap-2 p-3">
						<Select>
							<SelectTrigger className="h-[40px] rounded-full bg-[#FFFFFF08] border border-solid border-[#FFFFFF0F] text-[#FFFFFF99] flex-row-reverse justify-end font-semibold">
								<SelectValue placeholder="Newest" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="oldest">Oldest</SelectItem>
								<SelectItem value="read">Read</SelectItem>
								<SelectItem value="unread">Unread</SelectItem>
							</SelectContent>
						</Select>

						<div className="flex gap-2 items-center ">
							<Button className="rounded-full w-[40px] h-[40px] p-0 bg-[#FFFFFF08] border border-solid border-[#FFFFFF0F]">
								<img
									src="/src/assets/icons/search.svg"
									alt="Search"
									width={20}
									height={20}
								/>
							</Button>

							<Button className="rounded-full w-[40px] h-[40px] p-0 bg-[#FFFFFF08] border border-solid border-[#FFFFFF0F]">
								<img
									src="/src/assets/icons/plus.svg"
									alt="Add"
									width={18}
									height={20}
								/>
							</Button>
						</div>
					</div>
				</div>

				<TabsContent
					value="messages"
					className="text-[#FFFFFF99] pt-[120px] pb-[50px]"
				>
					<div className=" grid overflow-y-auto max-h-full scrollbar-hidden">
						{messageList.map((message, i) => {
							const {
								profileImg,
								user,
								online,
								hasMessage,
								messageCount,
							} = message;
							return (
								<Button
									key={i}
									className="flex items-center justify-start h-[55px] gap-3 bg-transparent shadow-none"
								>
									<div className="relative">
										<Avatar className="flex items-center justify-center">
											<AvatarImage
												src={profileImg}
												className="w-[35px] h-[35px]  rounded-full"
											/>
											<AvatarFallback className="flex items-center justify-center">
												<img
													src="src/assets/icons/discord.svg"
													className="w-[35px] h-[35px]  rounded-full"
												/>
											</AvatarFallback>
										</Avatar>
										<div
											className={`absolute -right-1 bottom-0 ${
												online ? "bg-emerald" : "bg-gray"
											} rounded-full w-4 h-4 border-[3px] border-solid border-onyx`}
										></div>
									</div>
									<span
										className={`${
											hasMessage ? "font-bold" : "font-normal"
										}`}
									>
										{user}
									</span>

									<Badge className="ms-auto me-0 rounded-full bg-white/10">
										{messageCount}
									</Badge>

									<DropdownMenu>
										<DropdownMenuTrigger>
											<img
												src="/src/assets/icons/more_h.svg"
												alt=""
												width={20}
											/>
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
								</Button>
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
		</section>
	);
};

export default Sidelist;
