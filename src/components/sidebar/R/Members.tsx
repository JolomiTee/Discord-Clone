import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { SidebarGroup, SidebarGroupLabel } from "@/components/ui/sidebar";
import { useSelectedServerMembersStore } from "@/hooks/use-server-members";
import { formatNumber } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const Members = () => {
	const members = useSelectedServerMembersStore((state) => state.members);
	return (
		<Collapsible open={true} className="group/collapsible">
			<SidebarGroup className="py-4">
				<SidebarGroupLabel asChild>
					<CollapsibleTrigger className="h-fit text-white font-bold text-[15px] mb-2 pe-5 uppercase">
						members - {formatNumber(members.length)}
						<ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
					</CollapsibleTrigger>
				</SidebarGroupLabel>
				<CollapsibleContent className="grid gap-2">
					{members.map((member, j) => {
						return (
							<div
								key={j}
								className="flex items-center justify-star gap-3 bg-transparent shadow-none px-1"
							>
								<div className="relative">
									<Avatar className="flex items-center justify-center size-[40px]">
										<AvatarImage
											src={member.profile_image_url}
											className="size-[35px] rounded-full"
										/>
										<AvatarFallback className="flex items-center justify-center bg-discord-blue">
											<img
												src="/icons/discord.svg"
												className="size-[25px] rounded-full"
											/>
										</AvatarFallback>
									</Avatar>
								</div>
								<span className="font-normal text-sm">
									{member.username}
								</span>
							</div>
						);
					})}
				</CollapsibleContent>
			</SidebarGroup>
		</Collapsible>
	);
};

export default Members;
