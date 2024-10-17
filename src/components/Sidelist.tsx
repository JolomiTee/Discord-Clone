import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "./ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const Sidelist = () => {
	return (
		<section className="lg:min-w-[20%] bg-carbon ">
			<div>
				<Tabs defaultValue="messages" className="w-full">
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

					<TabsContent value="messages" className="px-3 text-[#FFFFFF99] ">
						Make changes to your messages here.
					</TabsContent>
					<TabsContent value="friends" className="px-3 text-[#FFFFFF99] ">
						Change your friends here.
					</TabsContent>
				</Tabs>
			</div>
		</section>
	);
};

export default Sidelist;
