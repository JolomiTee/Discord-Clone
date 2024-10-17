import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Keyboard = () => {
	return (
		<div className="mb-4 mt-auto m-4 bg-[#FFFFFF0D] rounded-[10px] py-1 px-2 flex items-center gap-4">
			<Button className="bg-transparent rounded-full ring-0 shadow-none" size={"icon"}>
				<img
					src="/src/assets/icons/add.svg"
					alt="Sidebar"
					className="w-10 h-10"
				/>
			</Button>

			<Input className="ring-0 border-0 rounded-full focus-visible:ring-0 text-white" placeholder="Message Here" />

			<Button className="bg-transparent rounded-full" size={"icon"}>
				<img
					src="/src/assets/icons/emojis.svg"
					alt="Sidebar"
					className="w-10 h-10"
				/>
			</Button>
		</div>
	);
};

export default Keyboard;
