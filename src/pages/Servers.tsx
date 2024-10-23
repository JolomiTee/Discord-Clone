import ServerCard from "@/components/server_tray/ServerCard";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { discordServers } from "@/data";

const Servers = () => {
	return (
		<div className="w-full bg-onyx">
			<Tabs defaultValue="myservers" className="w-full">
				<TabsList className="w-full h-[50px] justify-start px-2 gap-4">
					<TabsTrigger value="myservers" className="px-5 py-1.5">
						My Servers
					</TabsTrigger>
					<TabsTrigger value="discover" className="px-5 py-1.5">
						Discover
					</TabsTrigger>
				</TabsList>
				<div className="flex items-center justify-start gap-2 p-3">
					<Input
						placeholder="Find a server"
						className="ring-0 shadow-0 bg-black/[24%] border border-solid border-[#FFFFFF0F] text-[#FFFFFF99] rounded-full w-[200px]"
					/>
					<Select>
						<SelectTrigger className="h-[35px] rounded-full bg-[#54414108] border border-solid border-[#FFFFFF0F] text-[#FFFFFF99] flex-row-reverse justify-end font-semibold w-fit">
							<SelectValue placeholder="Newest" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="activity">Last Active</SelectItem>
							<SelectItem value="oldest">Oldest</SelectItem>
							<SelectItem value="newest">Newest</SelectItem>
							<SelectItem value="muted">Muted</SelectItem>
						</SelectContent>
					</Select>

					<Button className="rounded-full bg-[#54414108] border border-solid border-[#FFFFFF0F] text-[#FFFFFF99]">
						<img src="/icons/check.svg" className="size-5" />
						Hide muted servers from sidebar
					</Button>
				</div>

				<TabsContent
					value="myservers"
					className="grid grid-cols-4 gap-x-4 gap-y-6 p-3"
				>
					{discordServers.map((servers, i) => {
						const { name, online, members, lastSeen, server_img } =
							servers;

						return (
							<ServerCard
								key={i}
								name={name}
								online={online}
								members={members}
								lastSeen={lastSeen}
								server_img={server_img}
							/>
						);
					})}
				</TabsContent>
				<TabsContent value="discover" className=" p-3">
					Change your password here.
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default Servers;
