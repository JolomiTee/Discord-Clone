import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";

const LoadingSidebar = () => {
	return (
		<Sidebar className="border-none">
			<SidebarHeader className="bg-carbon p-0">
				<AspectRatio ratio={16 / 6}>
					<Skeleton className="bg-loading w-full h-full" />
				</AspectRatio>

				<div className="p-3 grid gap-3">
					<div className="grid items-center gap-2 text-white">
						<Skeleton className="bg-loading w-20 h-4 rounded" />
						<Skeleton className="bg-loading w-[120px] h-4 rounded" />
					</div>

					<Skeleton className="bg-loading h-0.5 w-full" />
				</div>
				<div className="flex p-3 gap-3 items-center">
					<Skeleton className="bg-loading size-7 rounded" />
					<Skeleton className="bg-loading size-7 rounded" />
					<Skeleton className="bg-loading size-7 rounded" />
					<Skeleton className="bg-loading size-7 rounded" />
				</div>
			</SidebarHeader>

			<SidebarContent className="scrollbar-hidden pt-0 p-3 bg-carbon relative h-full gap-5">
				<div className="grid gap-2">
					<Skeleton className="bg-loading w-[120px] h-4 rounded" />

					<div className="ps-5 grid gap-2">
						<Skeleton className="bg-loading w-full h-4 rounded" />
						<Skeleton className="bg-loading w-full h-4 rounded" />
						<Skeleton className="bg-loading w-full h-4 rounded" />
					</div>
				</div>
				<div className="grid gap-2">
					<Skeleton className="bg-loading w-[120px] h-4 rounded" />

					<div className="ps-5 grid gap-2">
						<Skeleton className="bg-loading w-full h-4 rounded" />
						<Skeleton className="bg-loading w-full h-4 rounded" />
						<Skeleton className="bg-loading w-full h-4 rounded" />
					</div>
				</div>
			</SidebarContent>

			<SidebarFooter className="sr-only bg-carbon">
				Rediscord: A Discord Clone
			</SidebarFooter>
		</Sidebar>
	);
};

export default LoadingSidebar;
