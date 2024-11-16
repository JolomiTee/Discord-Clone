import { Textarea } from "@/components/ui/textarea";
import IconButtons from "./IconButtons";

const Keyboard = () => {
	return (
		<div className="bg-onyx rounded-full py-1 px-2 flex items-center gap-1 sticky bottom-0 ring-1 border border-charcoal shadow">
			<IconButtons src="add" alt="Add attachment" sizes="size-10" />

			<Textarea
				onFocus={(e) => {
					e.target.placeholder = "Start typing...";
				}}
				onBlur={(e) => {
					e.target.placeholder = "Write your message here";
				}}
				className="flex-1 bg-transparent border-0 focus-visible:ring-0 p-2 shadow-none text-white placeholder-primary/50"
				placeholder="Write your message here"
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
