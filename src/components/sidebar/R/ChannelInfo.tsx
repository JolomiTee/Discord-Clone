import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getRandomColor } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ChInfoDisplayVariant = () => {
	const tabstyles = `w-full h-full data-[state=active]:rounded-none data-[state=active]:bg-transparent data-[state=active]:text-discord-blue data-[state=active]:shadow-none data-[state=active]:border-b-[3px] data-[state=active]:border-b-discord-blue`;
	return (
		<div className="grid gap-4 p-4">
			<div className="flex items-center justify-star gap-3 bg-transparent shadow-none">
				<div className="relative">
					<Avatar className="flex items-center justify-center w-[30px] h-[30px]">
						<AvatarImage
							src={"icons/text_chanel.svg"}
							className="w-[20px] h-[20px] rounded-full"
						/>
						<AvatarFallback
							className="flex items-center justify-center"
							style={{
								backgroundColor: getRandomColor(),
							}}
						>
							<img
								src="/icons/discord.svg"
								className="w-[20px] h-[20px] rounded-full"
							/>
						</AvatarFallback>
					</Avatar>
				</div>
				<span className="font-bold text-sm">general-chat</span>
			</div>

			<div>
				<p className="text-white/80 text-sm">
					Open discussion. Please read the pinned messages. Make sure you
					follow the rules and have fun!
				</p>
			</div>

			<Tabs defaultValue="media" className="w-full">
				<TabsList className="w-full p-0 bg-transparent shadow-none border-b border-white/[7%]">
					<TabsTrigger value="media" className={tabstyles}>
						Media
					</TabsTrigger>
					<TabsTrigger value="links" className={tabstyles}>
						Links
					</TabsTrigger>
					<TabsTrigger value="files" className={tabstyles}>
						Files
					</TabsTrigger>
				</TabsList>
				<TabsContent value="media">
					Make changes to your media here.
				</TabsContent>
				<TabsContent value="links">Change your links here.</TabsContent>
				<TabsContent value="files">Change your files here.</TabsContent>
			</Tabs>
		</div>
	);
};

export default ChInfoDisplayVariant;
