import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getRandomColor } from "@/lib/utils";

const Media = () => {
	const imgs = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7,
		8, 9,
	];
	return (
		<div className="grid grid-cols-3 gap-1">
			{Array.from(imgs).map((_, i) => (
				<AspectRatio key={i} ratio={1 / 1} className="relative">
					<img
						src="/touchgrasshq.png"
						alt="Image"
						className="rounded-md object-cover w-full h-full"
					/>

					<Avatar className="absolute top-0.5 right-0.5 flex items-center justify-center size-[30px]">
						<AvatarImage
							src={"sender_img"}
							className="size-[18px] rounded-full"
						/>
						<AvatarFallback
							className="flex items-center justify-center"
							style={{
								backgroundColor: getRandomColor(),
							}}
						>
							<img
								src="/icons/discord.svg"
								className="size-[18px] rounded-full"
							/>
						</AvatarFallback>
					</Avatar>
				</AspectRatio>
			))}
		</div>
	);
};

export default Media;
