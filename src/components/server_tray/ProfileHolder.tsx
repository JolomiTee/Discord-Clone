import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const ProfileHolder = () => {
  return (
		<div className="relative rounded-full size-[50px] flex items-center justify-center">
			<div className="absolute -right-1 top-0 bg-crimson rounded-full size-4 border-[3px] border-solid border-onyx"></div>
			<div className="absolute -right-1 bottom-0 bg-emerald rounded-full size-4 border-[3px] border-solid border-onyx"></div>
			<Avatar className="">
				<AvatarImage
					src="/beluga.png"
					className="size-[40px] mx-auto my-auto object-cover"
				/>
				<AvatarFallback className="bg-transparent">
					<img
						src="/icons/discord.svg"
						className="size-[35px] mx-auto my-auto"
					/>
				</AvatarFallback>
			</Avatar>
		</div>
  );
}

export default ProfileHolder