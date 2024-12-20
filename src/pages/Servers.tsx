import LoadingServerList from "@/components/common/skeletons/LoadingServerList";
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
import useClerkQuery from "@/hooks/use-query";
import { Servers as IServer } from "@/types";
import { Plus } from "lucide-react";

const Servers = () => {
	const { isLoading, data, error } = useClerkQuery<IServer[]>("servers");
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
					{isLoading ? (
						<LoadingServerList />
					) : error ? (
						<div className="text-center text-lg text-white">
							Wumpus ran into an error fetching servers
						</div>
					) : data.data.length > 0 ? (
						data.data.map((servers) => {
							const {
								_id,
								profile_image_url,
								name,
								members,
								banner_image_url,
								ownedby,
								description,
							} = servers;

							return (
								<ServerCard
									key={_id}
									_id={_id}
									name={name}
									ownedby={ownedby}
									description={description}
									// online={online}
									members={members}
									profile_image_url={profile_image_url}
									banner_image_url={banner_image_url}
								/>
							);
						})
					) : (
						<div className="text-center">
							<div className="grid gap-2 justify-center pt-1 relative text-center">
								<span className="flex-wrap flex text-nowrap items-center justify-center gap-1">
									Join some by clicking the{" "}
									<span className="font-semibold text-sm border px-2 py-1 rounded-[10px] inline-flex">
										Discover
									</span>
									tab above
								</span>
								<div>
									<span className="flex-wrap flex text-nowrap items-center justify-center gap-1">
										or create your own with the{" "}
										<span className="border p-1 rounded-full inline-flex">
											<Plus />
										</span>
										icon
									</span>
									<img
										src="/downright-arrow.png"
										className="h-[200px] -rotate-[25deg] ms-auto me-5"
									/>
								</div>
							</div>
						</div>
					)}
				</TabsContent>
				<TabsContent value="discover" className=" p-3">
					Discover other servers here
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default Servers;
