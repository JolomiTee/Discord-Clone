import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { SidebarGroup, SidebarGroupLabel } from "@/components/ui/sidebar";
import { membersList } from "@/data";
import { ChevronDown } from "lucide-react";

const Members = () => {
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
											key={`${j}-${id}`}
											className="flex items-center justify-star gap-3 bg-transparent shadow-none"
										>
											<div className="relative">
												<Avatar className="flex items-center justify-center w-[40px] h-[40px]">
													<AvatarImage
														src={profile}
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

export default Members;
