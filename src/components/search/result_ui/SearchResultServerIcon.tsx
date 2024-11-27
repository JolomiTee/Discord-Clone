import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import usePersistAppState from "@/hooks/use-persist-app-state";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Link } from "react-router-dom";

interface props {
	name: string;
	serverIcon: string;
	hasNotification: boolean;
	i: string;
}

const SearchResultServerIcon = ({
	name,
	i,
	hasNotification,
	serverIcon,
}: props) => {
	const selectedServer = usePersistAppState((state) => state.selectedServer);
	return (
		<Link
			to={`/@server/${String(i)}`}
			//   onClick={handleClick}
			title={name}
			className="group/item group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center relative"
		>
			<div
				className={`absolute top-1/2 -translate-y-1/2 -left-[1px] w-2 rounded-full transition-all duration-100 ${
					selectedServer === i
						? "h-10 bg-discord-blue"
						: hasNotification
						? "h-2 bg-white dark:bg-white group-hover/item:h-5 group-hover/item:bg-white"
						: "group-hover/item:h-5 group-hover/item:bg-white"
				}`}
				style={{
					clipPath: "inset(0 0 0 50%)",
				}}
			/>

			<div className="gap-4 text-base h-fit group-data-[collapsible=icon]:[&>span:last-child]:hidden p-0 ps-3 flex items-center">
				<Avatar
					className={`size-[45px] md:size-[50px] ${
						selectedServer === i
							? "rounded-[12px]"
							: "group-hover/item:rounded-[12px]"
					}`}
				>
					<AvatarImage src={serverIcon} />
					<AvatarFallback
						className={
							selectedServer === i
								? "bg-discord-blue rounded-[15px]"
								: "bg-graphite group-hover/item:rounded-[12px]"
						}
					>
						<img src="/icons/discord.svg" className="size-[30px] " />
					</AvatarFallback>
				</Avatar>
				<span>{name}</span>
			</div>
		</Link>
	);
};

export default SearchResultServerIcon;
