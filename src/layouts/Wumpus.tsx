import { DesktopIcon } from "@radix-ui/react-icons";

const Wumpus = () => {
	return (
		<div className="w-full h-screen flex flex-col items-center justify-center">
			<div className="max-w-[500px]">
				<img src="/wumpus.png" alt="Wumpus" className="mx-auto w-auto" />
			</div>
			<p className="text-center text-[16px] text-white font-semibold">
				Wumpus is waiting for you to pick a chat.
			</p>
			<p className="md:hidden text-sm text-center text-white">
				For the best experience, please view on a <br /> Desktop{" "}
				<DesktopIcon className="inline" />
				<br />
			</p>
		</div>
	);
};

export default Wumpus;
