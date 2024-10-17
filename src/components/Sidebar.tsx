import { serverList } from "@/data";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const Sidebar = () => {
	return (
		<section className="lg:min-w-[7%] bg-onyx py-5 flex flex-col items-center gap-y-[20px] h-screen">
			<div className="flex flex-col items-center gap-y-[15px]">
				<Button>
					<img
						src="/src/assets/icons/search.svg"
						alt="Search"
						width={30}
						height={30}
					/>
				</Button>
				<Button>
					<img
						src="/src/assets/icons/messages.svg"
						alt="Search"
						width={40}
						height={40}
					/>
				</Button>
				<Separator className="w-[80px] bg-charcoal h-1 mx-auto" />
				<Button>
					<img
						src="/src/assets/icons/servers.svg"
						alt="Search"
						width={40}
						height={40}
					/>
				</Button>
			</div>
			<div className="grid justify-center gap-y-3 overflow-y-auto max-h-full scrollbar-hidden">
				{serverList.map((server, index) => {
					const { name, link } = server;

					return (
						<Button
							key={index}
							className="bg-graphite rounded-full w-[60px] h-[60px]"
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
		</section>
	);
};

export default Sidebar;
