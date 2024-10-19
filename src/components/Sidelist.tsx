import { useStore } from "@/hooks/base-context";
import MessagesDisplayVariant from "./sidelist/MessagesDisplayVariant";
import ServerDisplayVariant from "./sidelist/ServerDisplayVariant";

const Sidelist = () => {
	const appState = useStore((state) => state.appState);
	return (
		<section className="lg:min-w-[20%] lg:max-w-[20%] bg-carbon relative text-[#FFFFFF99]">
			{appState === "server" ? (
				<ServerDisplayVariant />
			) : (
				<MessagesDisplayVariant />
			)}
		</section>
	);
};

export default Sidelist;
