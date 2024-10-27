import { Separator } from "@/components/ui/separator";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarProvider,
} from "@/components/ui/sidebar";
import { serverList } from "@/data";
import ProfileHolder from "../server/ProfileHolder";
import SidebarNavLink from "../server/SidebarNavTab";
import SidebarServerIcon from "../server/SidebarServerIcon";

export default function CollapsibleSidebar({ open }: { open: boolean }) {
	return (
		<SidebarProvider className="w-fit z-20 text-[#B5BFE7]" open={open}>
			<Sidebar id="sidebar" collapsible="icon" className="bg-transparent">
				<SidebarHeader id="sidebar_header" className="bg-onyx p-0 pt-2">
					<SidebarGroup className="p-0">
						<SidebarMenu className="gap-0">
							<SidebarNavLink
								to="/search"
								icon="search"
								label="search"
							/>

							<SidebarNavLink
								to="/@me"
								icon="messages"
								label="Messages"
							/>

							<Separator className="group-data-[collapsible=icon]:w-[70%] group-data-[collapsible=icon]:mx-auto rounded-full bg-charcoal h-1 w-[52px] my-2 ms-3" />

							<SidebarNavLink
								to="/servers"
								icon="servers"
								label="Servers"
							/>
						</SidebarMenu>
					</SidebarGroup>
				</SidebarHeader>

				<SidebarContent className="bg-onyx scrollbar-hidden group-data-[collapsible=icon]:overflow-scroll pt-2">
					<SidebarGroup className="p-0">
						<SidebarMenu className="gap-y-3">
							{serverList.map((item, i) => {
								const { title, serverIcon, hasNotification } = item;
								return (
									<SidebarServerIcon
										title={title}
										serverIcon={serverIcon}
										hasNotification={hasNotification}
										i={i}
									/>
								);
							})}
						</SidebarMenu>
					</SidebarGroup>
				</SidebarContent>

				<SidebarFooter className="bg-onyx p-0 pb-5">
					<SidebarMenu>
						<SidebarNavLink to="/inbox" icon="inbox" label="Inbox" />

						<ProfileHolder />
					</SidebarMenu>
				</SidebarFooter>
			</Sidebar>
		</SidebarProvider>
	);
}
