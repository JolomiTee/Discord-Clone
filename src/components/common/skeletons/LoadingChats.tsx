import { Skeleton } from "@/components/ui/skeleton";

const LoadingChats = () => {
	return (
		<div className="h-full flex flex-col gap-2  overflow-auto scrollbar-hidden pb-5 p-3 md:p-4 lg:p-5">
			<div className="flex items-start gap-3">
				<Skeleton className="size-10 rounded-full bg-loading" />
				<Skeleton className="h-20 rounded-2xl w-full max-w-[95%] sm:max-w-[80%] md:max-w-[70%] bg-loading" />
			</div>
			<div className="flex flex-row-reverse items-start gap-3">
				<Skeleton className="size-10 rounded-full bg-loading" />
				<Skeleton className="h-28 rounded-2xl w-full max-w-[95%] sm:max-w-[80%] md:max-w-[70%] bg-loading" />
			</div>
			<div className="flex items-start gap-3">
				<Skeleton className="size-10 rounded-full bg-loading" />
				<Skeleton className="h-16 rounded-2xl w-full max-w-[95%] sm:max-w-[80%] md:max-w-[70%] bg-loading" />
			</div>
			<div className="flex items-start gap-3">
				<Skeleton className="size-10 rounded-full bg-loading" />
				<Skeleton className="h-16 rounded-2xl w-full max-w-[95%] sm:max-w-[80%] md:max-w-[70%] bg-loading" />
			</div>
			<div className="flex flex-row-reverse items-start gap-3">
				<Skeleton className="size-10 rounded-full bg-loading" />
				<Skeleton className="h-[118px] rounded-2xl w-full max-w-[95%] sm:max-w-[80%] md:max-w-[70%] bg-loading" />
			</div>
			<div className="flex flex-row-reverse items-start gap-3">
				<Skeleton className="size-10 rounded-full bg-loading" />
				<Skeleton className="h-[150px] rounded-2xl w-full max-w-[95%] sm:max-w-[80%] md:max-w-[70%] bg-loading" />
			</div>
		</div>
	);
};

export default LoadingChats;
