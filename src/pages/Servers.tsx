import Discover from "@/components/server/Discover";
import MyServers from "@/components/server/MyServers";
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

const Servers = () => {
	const triggers = [
		{
			value: "myservers",
			label: "My Servers",
		},
		{
			value: "discover",
			label: "Discover",
		},
	];

	const selectItems = [
		{
			value: "activity",
			label: "Last Active",
		},
		{
			value: "oldest",
			label: "Oldest",
		},
		{
			value: "newest",
			label: "Newest",
		},
		{
			value: "muted",
			label: "Muted",
		},
	];
	return (
		<div className="w-full bg-onyx overflow-auto scrollbar-hidden">
			<Tabs defaultValue="myservers" className="w-full">
				<div className="sticky top-0 z-20">
					<TabsList className="w-full h-[50px] justify-start px-2 gap-4">
						{triggers.map((trigger) => (
							<TabsTrigger
								key={trigger.value}
								value={trigger.value}
								className="px-5 py-1.5"
							>
								{trigger.label}
							</TabsTrigger>
						))}
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
								{selectItems.map((item) => (
									<SelectItem key={item.value} value={item.value}>
										{item.label}
									</SelectItem>
								))}
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

				<TabsContent value="myservers">
					<MyServers />
				</TabsContent>

				<TabsContent value="discover">
					<Discover />
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default Servers;
