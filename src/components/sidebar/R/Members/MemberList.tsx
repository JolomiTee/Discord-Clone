import { SidebarGroup, SidebarGroupLabel } from "@/components/ui/sidebar";
import { membersList } from "@/data";
import {
	CollapsibleContent,
	CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../../../ui/avatar";
import { Collapsible } from "../../../ui/collapsible";
const MemberList = () => {
	return (
		<>
			{membersList.map((groups, i) => {
				const { group, count, members } = groups;

				return (
					<Collapsible
						key={i}
						defaultOpen
						className="group/collapsible px-1"
					>
						<SidebarGroup>
							<SidebarGroupLabel asChild>
								<CollapsibleTrigger className="text-white font-bold text-[15px] mb-2">
									{group.toUpperCase()} - {count}
									<ChevronDown className="text-white ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
								</CollapsibleTrigger>
							</SidebarGroupLabel>
							<CollapsibleContent className="grid gap-3">
								{members.map((member, j) => {
									const { id, profile, name } = member;

									return (
										<div
											key={j}
											id={id.toString()}
											className="flex items-center justify-star gap-3 bg-transparent shadow-none"
										>
											<div className="relative">
												<Avatar className="flex items-center justify-center size-[40px]">
													<AvatarImage
														src={profile}
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
												{name}
											</span>
										</div>
									);
								})}
							</CollapsibleContent>
						</SidebarGroup>
					</Collapsible>
				);
			})}
		</>
	);
};

export default MemberList;
