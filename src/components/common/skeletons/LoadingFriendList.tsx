import { Skeleton } from "@/components/ui/skeleton";

const LoadingFriendList = () => {
	return (
		<div className="grid gap-2">
			<div className="flex gap-2 items-center justify-start">
				<Skeleton className="size-[45px] rounded-full bg-discord-blue/20" />
				<Skeleton className="h-4 rounded-full w-[100px] bg-discord-blue/20" />
			</div>
			<div className="flex gap-2 items-center justify-start">
				<Skeleton className="size-[45px] rounded-full bg-discord-blue/20" />
				<Skeleton className="h-4 rounded-full w-[100px] bg-discord-blue/20" />
			</div>
			<div className="flex gap-2 items-center justify-start">
				<Skeleton className="size-[45px] rounded-full bg-discord-blue/20" />
				<Skeleton className="h-4 rounded-full w-[100px] bg-discord-blue/20" />
			</div>
		</div>
	);
};

export default LoadingFriendList;
