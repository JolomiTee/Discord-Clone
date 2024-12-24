import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card } from "../ui/card";

const ServerIconPreview = ({
	iconPreview,
	name,
}: {
	iconPreview: string | undefined;
	name: string | undefined;
}) => {
	return (
		<Card className="flex gap-3 p-2 px-3 items-center w-fit cursor-not-allowed mx-auto bg-charcoal">
			<Avatar className={`size-[45px] rounded-full hover:rounded-[12px]`}>
				<AvatarImage src={iconPreview} alt={"server"} />
				<AvatarFallback className="bg-discord-blue rounded-[15px]">
					<img
						src="/icons/discord.svg"
						className="size-[30px]"
						alt={"server"}
					/>
				</AvatarFallback>
			</Avatar>

			{name && <span>{name}</span>}
		</Card>
	);
};

export default ServerIconPreview;
