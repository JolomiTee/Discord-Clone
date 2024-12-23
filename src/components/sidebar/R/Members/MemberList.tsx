import { SidebarGroup, SidebarGroupLabel } from "@/components/ui/sidebar";
import {
	CollapsibleContent,
	CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../../../ui/avatar";
import { Collapsible } from "../../../ui/collapsible";
import { useSelectedServerMembersStore } from "@/hooks/use-server-members";
import { formatNumber } from "@/lib/utils";
const MemberList = () => {
	const members = useSelectedServerMembersStore((state) => state.members);
	return (
		<Collapsible className="group/collapsible">
			<SidebarGroup className="p-0">
				<SidebarGroupLabel asChild>
					<CollapsibleTrigger className="h-fit text-white font-bold text-[15px] mb-2 pe-5">
						MEMBERS - {formatNumber(members.length)}
						<ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
					</CollapsibleTrigger>
				</SidebarGroupLabel>
				<CollapsibleContent className="grid gap-3">
					{members.map((member, j) => {
						return (
							<div
								key={j}
								className="flex items-center justify-star gap-3 bg-transparent shadow-none"
							>
								<div className="relative">
									<Avatar className="flex items-center justify-center size-[40px]">
										<AvatarImage
											src={member.profile_image_url}
											className="size-[20px] rounded-full"
										/>
										<AvatarFallback className="flex items-center justify-center bg-discord-blue">
											<img
												src="/icons/discord.svg"
												className="size-[25px] rounded-full"
											/>
										</AvatarFallback>
									</Avatar>
								</div>
								<span className="font-bold text-sm">
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

export default MemberList;
