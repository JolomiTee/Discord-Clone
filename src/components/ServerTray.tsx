import { serverList } from "@/data";
import { Separator } from "./ui/separator";
import IconButtons from "./IconButtons";
import SidebarServerIcon from "./server_tray/SidebarServerIcon";
import ProfileHolder from "./server_tray/ProfileHolder";
import { useState } from "react";
import { useStore } from "@/hooks/base-context";

const ServerTray = () => {
	const [clickedServer, setClickedServer] = useState("");
	const switchAppState = useStore((state) => state.switchAppState);

	const handleServerClick = (server: string) => {
		setClickedServer(server);
		switchAppState("server");
	};
	return (
		<section className="min-w-[6%] bg-onyx py-3 flex flex-col gap-y-[16px] h-screen z-20">
			<div className="flex flex-col items-center gap-y-[10px]">
				<IconButtons src="search" alt="Search" sizes="w-[25px h-[25px]" />
				<IconButtons
					src="messages"
					alt="Messages"
					sizes="w-[35px h-[35px]"
					action={() => {
						switchAppState("messages");
					}}
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
							isClicked={clickedServer === name}
							onClick={() => {
								handleServerClick(name);
							}}
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

export default ServerTray;
