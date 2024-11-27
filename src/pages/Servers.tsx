import ServerCard from "@/components/server/ServerCard";
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
		<div className="w-full bg-onyx overflow-auto scrollbar-hidden">
			<Tabs defaultValue="myservers" className="w-full">
				<div className="sticky top-0 z-20">
					<TabsList className="w-full h-[50px] justify-start px-2 gap-4">
						<TabsTrigger value="myservers" className="px-5 py-1.5">
							My Servers
						</TabsTrigger>
						<TabsTrigger value="discover" className="px-5 py-1.5">
							Discover
						</TabsTrigger>
					</TabsList>
					<div className="flex flex-wrap items-center justify-start gap-2 p-3 bg-onyx ">
						<Input
							placeholder="Find a server"
							className="ring-0 shadow-0 bg-black/[24%] border border-solid border-[#FFFFFF0F] text-[#FFFFFF99] rounded-full w-[200px] placeholder:text-white/80"
						/>
						<Select>
							<SelectTrigger className="h-[35px] rounded-full bg-[#54414108] border border-solid border-[#FFFFFF0F] text-white text-xs sm:text-sm  flex-row-reverse justify-end font-semibold w-fit">
								<SelectValue
									className="placeholder:text-xs"
									placeholder="Newest"
								/>
							</SelectTrigger>
							<SelectContent className="bg-onyx text-white rounded-[8px] py-1">
								<SelectItem value="activity">Last Active</SelectItem>
								<SelectItem value="oldest">Oldest</SelectItem>
								<SelectItem value="newest">Newest</SelectItem>
								<SelectItem value="muted">Muted</SelectItem>
							</SelectContent>
						</Select>

						<Button className="rounded-full bg-[#54414108] border border-solid border-[#FFFFFF0F] text-white text-xs sm:text-sm ">
							<img
								src="/icons/check.svg"
								className="size-5 hidden md:flex"
							/>
							Hide muted servers from sidebar
						</Button>
					</div>
				</div>

				<TabsContent
					value="myservers"
					className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 p-3 mb-10"
				>
					{discordServers.map((servers) => {
						const {
							id,
							slug,
							name,
							online,
							members,
							lastSeen,
							server_img,
						} = servers;

						return (
							<ServerCard
								slug={slug}
								key={id}
								serverId={id}
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
					Discover other servers here
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default Servers;
