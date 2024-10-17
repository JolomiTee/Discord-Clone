import { serverList } from "@/data";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useState } from "react";

const Sidebar = () => {
	const [isClicked, setIsClicked] = useState(false);

	const handleClick = () => {
		setIsClicked(!isClicked);
	};
	
	return (
		<section className="lg:min-w-[6%] bg-onyx py-3 flex flex-col gap-y-[16px] h-screen">
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
				<Separator className="w-[70%] rounded-full bg-charcoal h-1 mx-auto" />
				<Button className="rounded-full w-[40px] h-[40px] p-0 bg-transparent">
					<img
						src="/src/assets/icons/servers.svg"
						alt="Search"
						width={35}
						height={35}
					/>
				</Button>
			</div>

			<div className="flex flex-col gap-y-[10px] overflow-y-auto max-h-full scrollbar-hidden">
				{serverList.map((server, index) => {
					const { name, serverImage, hasNotification } = server;

					return (
						<div key={index} className="w-full flex relative group">
							{/* Half-circle */}
							<div
								className={`absolute top-1/2 -translate-y-1/2 -left-[1px] w-2 rounded-full bg-white dark:bg-white transition-all duration-100 ${
									isClicked
										? "h-10"
										: hasNotification
										? "h-2"
										: "group-hover:h-5"
								}`}
								style={{
									clipPath: "inset(0 0 0 50%)",
								}}
							/>

							{/* Button */}
							<Button
								className={`rounded-full w-[50px] h-[50px] p-0 mx-auto transition-all duration-100 overflow-hidden ${
									isClicked
										? "rounded-[15px]"
										: "group-hover:rounded-[15px]"
								} focus-visible:ring-0`}
								title={name}
								onClick={handleClick}
							>
								<Avatar
									className={`w-full h-full ${
										isClicked
											? "rounded-[12px]"
											: "group-hover:rounded-[12px]"
									}`}
								>
									<AvatarImage
										src={serverImage}
										className="mx-auto my-auto object-fill p-0"
									/>
									<AvatarFallback
										className={`${
											isClicked
												? "bg-discord-blue rounded-[15px]"
												: "bg-graphite group-hover:rounded-[12px]"
										}`}
									>
										<img
											src="src/assets/icons/discord.svg"
											className="w-[35px] h-[35px] mx-auto my-auto"
										/>
									</AvatarFallback>
								</Avatar>
							</Button>
						</div>
					);
				})}
			</div>

			<div className="flex flex-col items-center gap-y-[15px] mt-auto mb-0">
				<Separator className="w-[70%] rounded-full bg-charcoal h-1 mx-auto" />
				<Button className="rounded-full w-[40px] h-[40px] p-0 bg-transparent">
					<img
						src="/src/assets/icons/mail.svg"
						alt="Search"
						width={40}
						height={40}
					/>
				</Button>

				<div className="relative rounded-full h-[50px] w-[50px] flex items-center justify-center">
					<div className="absolute -right-1 top-0 bg-crimson rounded-full w-4 h-4 border-[3px] border-solid border-onyx"></div>
					<div className="absolute -right-1 bottom-0 bg-emerald rounded-full w-4 h-4 border-[3px] border-solid border-onyx"></div>
					<Avatar className="">
						<AvatarImage
							src="/beluga.png"
							className="w-[40px] h-[40px] mx-auto my-auto object-cover"
						/>
						<AvatarFallback className="bg-transparent">
							<img
								src="src/assets/icons/discord.svg"
								className="w-[35px] h-[35px] mx-auto my-auto"
							/>
						</AvatarFallback>
					</Avatar>
				</div>
			</div>
		</section>
	);
};

export default Sidebar;
