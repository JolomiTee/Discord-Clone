import { Skeleton } from "@/components/ui/skeleton";

const LoadingServers = () => {
	return (
		<div className="grid gap-2">
			<Skeleton className="size-[45px] md:size-[50px] rounded-full mb-3 bg-discord-blue/20 mx-auto" />
			<Skeleton className="size-[45px] md:size-[50px] rounded-full mb-3 bg-discord-blue/20 mx-auto" />
			<Skeleton className="size-[45px] md:size-[50px] rounded-full mb-3 bg-discord-blue/20 mx-auto" />
		</div>
	);
};

export default LoadingServers;
