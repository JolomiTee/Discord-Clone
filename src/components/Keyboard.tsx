import { Button } from "./ui/button";
import { Textarea } from "@/components/ui/textarea";

const Keyboard = () => {
	return (
		<div className="mb-4 mt-auto m-4 bg-[#FFFFFF0D] rounded-full py-2 px-4 flex items-center gap-4">
			<Button
				className="bg-transparent hover:bg-primary/10 rounded-full"
				size="icon"
				aria-label="Add attachment"
			>
				<img
					src="/src/assets/icons/add.svg"
					alt="Sidebar"
					className="w-10 h-10"
				/>
			</Button>

			<Textarea
				className="flex-1 bg-transparent border-0 focus-visible:ring-0 p-2 text-white placeholder-primary/50"
				placeholder="Message Here"
				rows={1}
				style={{
					minHeight: "24px",
					height: "24px",
					maxHeight: "100px",
					overflow: "hidden",
				}}
				// onInput={(e) => {
				// 	e.currentTarget.style.height = "auto";
				// 	e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
				// }}
			/>

			<Button
				className="bg-transparent hover:bg-primary/10 rounded-full"
				size="icon"
				aria-label="Add emoji"
			>
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
