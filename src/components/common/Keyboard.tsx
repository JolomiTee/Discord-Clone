import { Textarea } from "@/components/ui/textarea";
import IconButtons from "./IconButtons";

const Keyboard = () => {
	return (
		<div className="bg-[#FFFFFF0D] rounded-full py-1 px-2 flex items-center gap-1 sticky bottom-0 bg-charcoal ring-1 ring-onyx shadow">
			<IconButtons src="add" alt="Add attachment" sizes="size-10" />

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
