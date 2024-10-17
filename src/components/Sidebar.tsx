import { serverList } from "@/data";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Sidebar = () => {
	return (
		<section className="lg:min-w-[6%] bg-onyx py-2 flex flex-col items-center gap-y-[20px] h-screen">
			<div className="flex flex-col items-center gap-y-[10px]">
				<Button className="rounded-full w-[40px] h-[40px] p-0 bg-transparent">
					<img
						src="/src/assets/icons/search.svg"
						alt="Search"
						width={25}
						height={25}
					/>
				</Button>
				<Button className="rounded-full w-[40px] h-[40px] p-0 bg-transparent">
					<img
						src="/src/assets/icons/messages.svg"
						alt="Search"
						width={35}
						height={35}
					/>
				</Button>
				<Separator className="w-full rounded-full bg-charcoal h-1 mx-auto" />
				<Button className="rounded-full w-[40px] h-[40px] p-0 bg-transparent">
					<img
						src="/src/assets/icons/servers.svg"
						alt="Search"
						width={35}
						height={35}
					/>
				</Button>
			</div>
			<div className="grid justify-center gap-y-[10px] overflow-y-auto max-h-full scrollbar-hidden">
				{serverList.map((server, index) => {
					const { name } = server;

					return (
						<Button
							key={index}
							className={`bg-graphite rounded-full w-[50px] h-[50px] p-0`}
							title={name}
						>
							<img
								src="/src/assets/icons/discord.svg"
								alt={name}
								width={30}
								height={30}
							/>
						</Button>
					);
				})}
			</div>

			<div className="flex flex-col items-center gap-y-[15px]">
				<Separator className="w-full rounded-full bg-charcoal h-1 mx-auto" />
				<Button className="rounded-full w-[40px] h-[40px] p-0 bg-transparent">
					<img
						src="/src/assets/icons/mail.svg"
						alt="Search"
						width={40}
						height={40}
					/>
				</Button>

				<div className="bg-discord-blue relative rounded-full h-[50px] w-[50px] flex items-center justify-center">
					<div className="absolute -right-2 top-0 bg-crimson rounded-full w-4 h-4 border-[3px] border-solid border-onyx"></div>
					<div className="absolute -right-2 bottom-0 bg-emerald rounded-full w-4 h-4 border-[3px] border-solid border-onyx"></div>
					<Avatar className="flex items-center justify-center">
						<AvatarImage
							src="src/assets/icons/discord.svg"
							className="w-[35px] h-[35px]"
						/>
						<AvatarFallback className="flex items-center justify-center">
							<img
								src="src/assets/icons/discord.svg"
								className="w-[35px] h-[35px]"
							/>
						</AvatarFallback>
					</Avatar>
				</div>
			</div>
		</section>
	);
};

export default Sidebar;
