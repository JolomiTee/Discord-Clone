import { Textarea } from "@/components/ui/textarea";
import { SendHorizonal } from "lucide-react";
import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "../ui/button";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormMessage,
} from "../ui/form";

const Keyboard = () => {
	return (
		<ConnectForm>
			{({ control }) => (
				<div className="bg-charcoal p-3">
					<div className="bg-onyx rounded-[15px] py-1 px-2 flex items-center w-full gap-1 sticky bottom-0 ring-1 border border-charcoal shadow">
						<FormField
							control={control}
							name="message"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormControl>
										<Textarea
											{...field}
											onFocus={(e) => {
												e.target.placeholder = "Start typing...";
											}}
											onBlur={(e) => {
												e.target.placeholder =
													"Write your message here";
											}}
											className="items-center flex bg-transparent border-0 focus-visible:ring-0 p-2 shadow-none text-white placeholder-primary/50 scrollbar-hidden w-full"
											placeholder="Write your message here"
											rows={1}
											style={{
												minHeight: "30px",
												maxHeight: "200px",
											}}
										/>
									</FormControl>
									<FormDescription>
										You can <span>@mention</span> other users and
										organizations.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button
							className="size-[40px] bg-discord-blue rounded-[10px] p-0"
							type="submit"
						>
							<SendHorizonal width={50} height={50} />
						</Button>
					</div>
				</div>
			)}
		</ConnectForm>
	);
};

export default Keyboard;

interface ConnectFormProps {
	children: (methods: ReturnType<typeof useFormContext>) => ReactNode;
}

export const ConnectForm: React.FC<ConnectFormProps> = ({ children }) => {
	const methods = useFormContext();

	return <>{children(methods)}</>;
};
