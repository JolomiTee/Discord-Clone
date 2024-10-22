import { SidebarGroup, SidebarGroupLabel } from "@/components/ui/sidebar";
import { membersList2 } from "@/data";
import {
	CollapsibleContent,
	CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../../../ui/avatar";
import { Collapsible } from "../../../ui/collapsible";
const MemberList = () => {
	return (
		<Collapsible className="group/collapsible">
			<SidebarGroup className="p-0">
				<SidebarGroupLabel asChild>
					<CollapsibleTrigger className="h-fit text-white font-bold text-[15px] mb-2 pe-5">
						MEMBERS - 12k
						<ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
					</CollapsibleTrigger>
				</SidebarGroupLabel>
				<CollapsibleContent className="grid gap-3">
					{membersList2.map((member, j) => {
						return (
							<div
								key={`${j}`}
								className="flex items-center justify-star gap-3 bg-transparent shadow-none"
							>
								<div className="relative">
									<Avatar className="flex items-center justify-center w-[40px] h-[40px]">
										<AvatarImage
											src={member.profile}
											className="w-[20px] h-[20px] rounded-full"
										/>
										<AvatarFallback className="flex items-center justify-center bg-discord-blue">
											<img
												src="/icons/discord.svg"
												className="w-[25px] h-[25px] rounded-full"
											/>
										</AvatarFallback>
									</Avatar>
								</div>
								<span className="font-bold text-sm">{member.name}</span>
							</div>
						);
					})}
				</CollapsibleContent>
			</SidebarGroup>
		</Collapsible>
	);
};

export default MemberList;
