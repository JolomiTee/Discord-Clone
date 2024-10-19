import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";


interface props
{ name: string; serverImage: string;  hasNotification: boolean}
const SidebarServerIcon = ({ name, serverImage, hasNotification }: props) => {

	const [isClicked, setIsClicked] = useState(false);

	const handleClick = () => {
		setIsClicked(!isClicked);
	};
	return (
		<div className="w-full flex relative group">
			{/* Half-circle */}
			<div
				className={`absolute top-1/2 -translate-y-1/2 -left-[1px] w-2 rounded-full bg-white dark:bg-white transition-all duration-100 ${
					isClicked ? "h-10" : hasNotification ? "h-2" : "group-hover:h-5"
				}`}
				style={{
					clipPath: "inset(0 0 0 50%)",
				}}
			/>

			{/* Button */}
			<Button
				className={`rounded-full w-[50px] h-[50px] p-0 mx-auto transition-all duration-100 overflow-hidden ${
					isClicked ? "rounded-[15px]" : "group-hover:rounded-[15px]"
				} focus-visible:ring-0`}
				title={name}
				onClick={handleClick}
			>
				<Avatar
					className={`w-full h-full ${
						isClicked ? "rounded-[12px]" : "group-hover:rounded-[12px]"
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
							src="../assets/icons/discord.svg"
							className="w-[35px] h-[35px] mx-auto my-auto"
						/>
					</AvatarFallback>
				</Avatar>
			</Button>
		</div>
	);
};

export default SidebarServerIcon