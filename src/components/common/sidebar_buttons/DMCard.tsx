import { getRandomColor } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { Link, useLocation } from "react-router-dom";
import { SidebarMenuButton } from "@/components/ui/sidebar";

interface props {
	profileImg: string;
	user: string;
	dmId: string;
	slug: string;
	online: boolean;
	hasMessage: boolean;
	messageCount?: number;
	action?: () => void;
}
const DMCard = ({
	profileImg,
	dmId,
	user,
	slug,
	online,
	hasMessage,
	action,
}: props) => {
	const location = useLocation();
	return (
		<SidebarMenuButton
			className="p-0 ms-1 ps-2 data-[active=true]:rounded-s-full data-[active=true]:text-white data-[active=true]:bg-charcoal transition-all duration-500"
			isActive={location.pathname.includes(String(dmId))}
			asChild
		>
			<Link
				to={`@me/dm/${String(dmId)}`}
				className="flex items-center justify-start h-[55px] gap-3 bg-transparent shadow-none"
				onClick={action}
			>
				<div className="relative">
					<Avatar className="flex items-center justify-center">
						<AvatarImage
							src={profileImg}
							alt={slug}
							className="size-[40px]  rounded-full"
						/>
						<AvatarFallback
							className="flex items-center justify-center"
							style={{ backgroundColor: getRandomColor() }}
						>
							<img
								src="/icons/discord.svg"
								alt={slug}
								className="size-[35px] rounded-full"
							/>
						</AvatarFallback>
					</Avatar>
					<div
						className={`absolute -right-0 bottom-0 ${
							online ? "bg-emerald" : "bg-gray"
						} rounded-full size-3 border-[2px] border-solid border-charcoal`}
					></div>
				</div>
				<span className={hasMessage ? "font-bold" : "font-normal"}>
					{user}
				</span>

				{/* <div className="flex items-center justify-start gap-3 ms-auto me-0 ">
					{pinned && <IconButtons src="pin" alt="Pinned" />}
				</div> */}
			</Link>
		</SidebarMenuButton>
	);
};

export default DMCard;
