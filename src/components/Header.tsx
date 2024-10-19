import { useState } from "react";
import IconButtons from "./IconButtons";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Header = () => {
	const [headerContext, setHeaderContext] = useState("messages");

	return (
		<header className="flex justify-between items-center gap-3 h-[100px] px-4 bg-onyx w-full">
			<div className="flex items-center gap-3">
				<IconButtons src="sidebar" alt="Sidebar" />

				<div className="flex items-center justify-start gap-3 bg-transparent shadow-none">
					<div className="relative">
						<Avatar className="flex items-center justify-center">
							<AvatarImage
								src={"/silly.png"}
								className="w-8 h-8  rounded-full"
							/>
							<AvatarFallback className="flex items-center justify-center">
								<img
									src="/icons/discord.svg"
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
				{headerContext === "server" ? (
					<>
						<IconButtons
							src="disable_notification"
							alt="Notification"
							sizes="w-7 h-7"
						/>
						<IconButtons src="threads" alt="Threads" sizes="w-7 h-7" />
						<IconButtons src="pin" alt="Pinned" sizes="w-7 h-7" />
						<IconButtons src="search" alt="Search" sizes="w-5 h-5" />
						<IconButtons src="members" alt="Members" sizes="w-8 h-8" />
						<IconButtons src="sidebar" alt="Sidebar" />
					</>
				) : (
					<>
						<IconButtons src="call" alt="Call" sizes="w-7 h-7" />
						<IconButtons
							src="video_call"
							alt="Video Call"
							sizes="w-7 h-7"
						/>
						<IconButtons
							src="disable_notification"
							alt="Notification"
							sizes="w-7 h-7"
						/>
						<IconButtons src="pin" alt="Pinned" sizes="w-7 h-7" />
						<IconButtons src="search" alt="Search" sizes="w-5 h-5" />
						<IconButtons src="sidebar" alt="Sidebar" />
					</>
				)}
			</div>
		</header>
	);
};

export default Header;
