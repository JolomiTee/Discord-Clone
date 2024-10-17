import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

const Header = () => {
	return (
		<header className="flex justify-between items-center gap-3 h-[55px] px-4 bg-onyx w-full">
			<div className="flex items-center gap-3">
				<Button className="bg-transparent" size={"icon"}>
					<img
						src="/src/assets/icons/sidebar.svg"
						alt="Sidebar"
						className="w-7 h-7"
					/>
				</Button>

				<div className="flex items-center justify-start gap-3 bg-transparent shadow-none">
					<div className="relative">
						<Avatar className="flex items-center justify-center">
							<AvatarImage
								src={"/silly.png"}
								className="w-8 h-8  rounded-full"
							/>
							<AvatarFallback className="flex items-center justify-center">
								<img
									src="src/assets/icons/discord.svg"
									className="w-[35px] h-[35px]  rounded-full"
								/>
							</AvatarFallback>
						</Avatar>
						<div
							className={`absolute -right-1 bottom-0 bg-emerald rounded-full w-4 h-4 border-[3px] border-solid border-onyx`}
						></div>
					</div>
					<span className="font-bold text-[#FFFFFF99]">Shepard</span>
				</div>
			</div>

			<div className="flex items-center gap-3">
				<Button className="bg-transparent" size={"icon"}>
					<img
						src="/src/assets/icons/call.svg"
						alt="Sidebar"
						className="w-10 h-10"
					/>
				</Button>

				<Button className="bg-transparent" size={"icon"}>
					<img
						src="/src/assets/icons/video_call.svg"
						alt="Sidebar"
						className="w-10 h-10"
					/>
				</Button>

				<Button className="bg-transparent" size={"icon"}>
					<img
						src="/src/assets/icons/disable_notification.svg"
						alt="Sidebar"
						className="w-10 h-10"
					/>
				</Button>

				<Button className="bg-transparent" size={"icon"}>
					<img
						src="/src/assets/icons/pin.svg"
						alt="Sidebar"
						className="w-10 h-10"
					/>
				</Button>

				<Button className="bg-transparent" size={"icon"}>
					<img
						src="/src/assets/icons/search.svg"
						alt="Sidebar"
						className="w-7 h-7"
					/>
				</Button>

				<Button className="bg-transparent" size={"icon"}>
					<img
						src="/src/assets/icons/sidebar.svg"
						alt="Sidebar"
						className="w-7 h-7"
					/>
				</Button>
			</div>
		</header>
	);
};

export default Header;
