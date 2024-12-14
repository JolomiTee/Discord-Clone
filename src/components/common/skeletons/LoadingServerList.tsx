import { Skeleton } from "@/components/ui/skeleton";

const LoadingServerList = () => {
	return (
		<>
			<div className="flex gap-2 items-start justify-start">
				<div>
					<Skeleton className="size-[50px] rounded-[15px] bg-discord-blue/20" />
				</div>
				<div className="grid gap-2 items-start">
					<Skeleton className="h-3 rounded-full w-[200px] bg-discord-blue/20" />
					<Skeleton className="h-3 rounded-full w-[150px] bg-discord-blue/20" />
					<Skeleton className="h-3 rounded-full w-[100px] bg-discord-blue/20" />
				</div>
			</div>
			<div className="flex gap-2 items-start justify-start">
				<div>
					<Skeleton className="size-[50px] rounded-[15px] bg-discord-blue/20" />
				</div>
				<div className="grid gap-2 items-start">
					<Skeleton className="h-3 rounded-full w-[200px] bg-discord-blue/20" />
					<Skeleton className="h-3 rounded-full w-[150px] bg-discord-blue/20" />
					<Skeleton className="h-3 rounded-full w-[100px] bg-discord-blue/20" />
				</div>
			</div>
			<div className="flex gap-2 items-start justify-start">
				<div>
					<Skeleton className="size-[50px] rounded-[15px] bg-discord-blue/20" />
				</div>
				<div className="grid gap-2 items-start">
					<Skeleton className="h-3 rounded-full w-[200px] bg-discord-blue/20" />
					<Skeleton className="h-3 rounded-full w-[150px] bg-discord-blue/20" />
					<Skeleton className="h-3 rounded-full w-[100px] bg-discord-blue/20" />
				</div>
			</div>
			<div className="flex gap-2 items-start justify-start">
				<div>
					<Skeleton className="size-[50px] rounded-[15px] bg-discord-blue/20" />
				</div>
				<div className="grid gap-2 items-start">
					<Skeleton className="h-3 rounded-full w-[200px] bg-discord-blue/20" />
					<Skeleton className="h-3 rounded-full w-[150px] bg-discord-blue/20" />
					<Skeleton className="h-3 rounded-full w-[100px] bg-discord-blue/20" />
				</div>
			</div>
			<div className="flex gap-2 items-start justify-start">
				<div>
					<Skeleton className="size-[50px] rounded-[15px] bg-discord-blue/20" />
				</div>
				<div className="grid gap-2 items-start">
					<Skeleton className="h-3 rounded-full w-[200px] bg-discord-blue/20" />
					<Skeleton className="h-3 rounded-full w-[150px] bg-discord-blue/20" />
					<Skeleton className="h-3 rounded-full w-[100px] bg-discord-blue/20" />
				</div>
			</div>
			<div className="flex gap-2 items-start justify-start">
				<div>
					<Skeleton className="size-[50px] rounded-[15px] bg-discord-blue/20" />
				</div>
				<div className="grid gap-2 items-start">
					<Skeleton className="h-3 rounded-full w-[200px] bg-discord-blue/20" />
					<Skeleton className="h-3 rounded-full w-[150px] bg-discord-blue/20" />
					<Skeleton className="h-3 rounded-full w-[100px] bg-discord-blue/20" />
				</div>
			</div>
		</>
	);
};

export default LoadingServerList;
