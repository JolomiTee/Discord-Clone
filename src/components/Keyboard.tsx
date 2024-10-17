import IconButtons from "./IconButtons";
import { Textarea } from "@/components/ui/textarea";

const Keyboard = () => {
	return (
		<div className="mb-4 mt-auto m-4 bg-[#FFFFFF0D] rounded-full py-2 px-4 flex items-center gap-4">
			<IconButtons src="add" alt="Add attachment" sizes="w-10 h-10" />

			<Textarea
				className="flex-1 bg-transparent border-0 focus-visible:ring-0 p-2 shadow-none text-white placeholder-primary/50"
				placeholder="Message Here"
				rows={1}
				style={{
					minHeight: "30px",
					maxHeight: "100px",
					overflow: "hidden",
				}}
			/>
		</div>
	);
};

export default Keyboard;
