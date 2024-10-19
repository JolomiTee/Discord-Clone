import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const ProfileHolder = () => {
  return (
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
						src="../assets/icons/discord.svg"
						className="w-[35px] h-[35px] mx-auto my-auto"
					/>
				</AvatarFallback>
			</Avatar>
		</div>
  );
}

export default ProfileHolder