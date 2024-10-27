import { serverList } from "@/data";
import { useStore } from "@/hooks/base-context";
import { useState } from "react";
import IconButtons from "./common/IconButtons";
import ProfileHolder from "./server_tray/ProfileHolder";
import SidebarServerIcon from "./server_tray/SidebarServerIcon";
import { Separator } from "./ui/separator";

const ServerTray = () => {
	const [clickedServer, setClickedServer] = useState("");
	const switchLeftSidebarContext = useStore(
		(state) => state.switchLeftSidebarContext
	);

	const handleServerClick = (server: string) => {
		setClickedServer(server);
		switchLeftSidebarContext("server");
	};
	return (
		<section className="min-w-[6%] bg-onyx py-3 flex flex-col gap-y-[16px] h-screen z-20 border-r-2">
			<div className="flex flex-col items-center gap-y-[10px]">
				<IconButtons src="search" alt="Search" sizes="size-[25px]" />
				<IconButtons
					src="messages"
					alt="Messages"
					sizes="size-[35px]"
					action={() => {
						switchLeftSidebarContext("messages");
					}}
				/>

				<Separator className="w-[70%] rounded-full bg-charcoal h-1 mx-auto" />

				<IconButtons src="servers" alt="Servers" sizes="size[35px]" />
			</div>

			<div className="flex flex-col gap-y-[10px] overflow-y-auto max-h-full scrollbar-hidden">
				{serverList.map((server, index) => {
					const { title, serverIcon, hasNotification } = server;

					return (
						<SidebarServerIcon
							key={index}
							name={title}
							serverImage={serverIcon}
							hasNotification={hasNotification}
							isClicked={clickedServer === title}
							onClick={() => {
								handleServerClick(title);
							}}
						/>
					);
				})}
			</div>

			<div className="flex flex-col items-center gap-y-[15px] mt-auto mb-0">
				<Separator className="w-[70%] rounded-full bg-charcoal h-1 mx-auto" />

				<IconButtons src="mail" alt="Mail" sizes="size-[40px]" />

				<ProfileHolder />
			</div>
		</section>
	);
};

export default ServerTray;
