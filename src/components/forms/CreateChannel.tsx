import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader } from "lucide-react";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

import { AlertDialogCancel, AlertDialogFooter } from "../ui/alert-dialog";

interface Props {
	form: any;
	onSubmit: (values: any) => void;
	isMutationLoading: boolean;
}

const CreateChannelForm = ({ form, onSubmit, isMutationLoading }: Props) => {
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Channel Name</FormLabel>
							<FormControl>
								<Input
									className="rounded-[8px]"
									placeholder="Give your server a name"
									{...field}
								/>
							</FormControl>
							<FormDescription>
								This will be the publicly displayed name for your
								channel unless made private.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Channel Description (Optional)</FormLabel>
							<FormControl>
								<Input
									className="rounded-[8px]"
									placeholder="Add a brief description"
									{...field}
								/>
							</FormControl>
							<FormDescription>
								This will be the publicly displayed description for your
								channel.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="channelType"
					render={({ field }) => (
						<FormItem className="space-y-3">
							<FormLabel>What type of channel is this?</FormLabel>
							<FormControl>
								<RadioGroup
									onValueChange={field.onChange}
									defaultValue={field.value}
									className="flex space-x-1"
								>
									<FormItem className="flex items-center space-x-3 space-y-0 border border-carbon rounded-[10px] p-4 pe-6 w-fit relative">
										<FormControl>
											<RadioGroupItem value="text" />
										</FormControl>
										<FormLabel className="font-normal">
											Text Channel
										</FormLabel>
										<small className="absolute bottom-0.5 right-2 text-[9px]">
											default
										</small>
									</FormItem>
									<FormItem className="flex items-center space-x-3 space-y-0 border border-carbon rounded-[10px] p-4 pe-6 w-fit">
										<FormControl>
											<RadioGroupItem value="voice" />
										</FormControl>
										<FormLabel className="font-normal">
											Voice Channel
										</FormLabel>
									</FormItem>
								</RadioGroup>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<AlertDialogFooter>
					<AlertDialogCancel className="text-onyx rounded">
						Cancel
					</AlertDialogCancel>
					<Button
						type="submit"
						className="bg-discord-blue rounded-[8px]"
						disabled={isMutationLoading}
					>
						{isMutationLoading ? (
							<>
								<Loader size={4} className="size-4 animate-spin" />
								Creating Channel
							</>
						) : (
							<>Create Channel</>
						)}
					</Button>
				</AlertDialogFooter>
			</form>
		</Form>
	);
};

export default CreateChannelForm;

