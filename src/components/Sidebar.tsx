import { serverList } from "@/data";
import { Separator } from "./ui/separator";
import IconButtons from "./IconButtons";
import SidebarServerIcon from "./sidebar/SidebarServerIcon";
import ProfileHolder from "./sidebar/ProfileHolder";

const Sidebar = () => {
	return (
		<section className="lg:min-w-[6%] bg-onyx py-3 flex flex-col gap-y-[16px] h-screen">
			<div className="flex flex-col items-center gap-y-[10px]">
				<IconButtons src="search" alt="Search" sizes="w-[25px h-[25px]" />
				<IconButtons
					src="messages"
					alt="Messages"
					sizes="w-[35px h-[35px]"
				/>

				<Separator className="w-[70%] rounded-full bg-charcoal h-1 mx-auto" />

				<IconButtons src="servers" alt="Servers" sizes="w-[35px h-[35px]" />
			</div>

			<div className="flex flex-col gap-y-[10px] overflow-y-auto max-h-full scrollbar-hidden">
				{serverList.map((server, index) => {
					const { name, serverImage, hasNotification } = server;

					return (
						<SidebarServerIcon
							key={index}
							name={name}
							serverImage={serverImage}
							hasNotification={hasNotification}
						/>
					);
				})}
			</div>

			<div className="flex flex-col items-center gap-y-[15px] mt-auto mb-0">
				<Separator className="w-[70%] rounded-full bg-charcoal h-1 mx-auto" />

				<IconButtons src="mail" alt="Mail" sizes="w-[40px h-[40px]" />

				<ProfileHolder />
			</div>
		</section>
	);
};

export default Sidebar;