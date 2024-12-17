import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
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
import { useClerkRequest } from "@/hooks/use-query";
import { useCreateChannelFormSchema } from "@/lib/formSchemas/createChannelSchema";
import { z } from "zod";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useState } from "react";
import { Loader } from "lucide-react";
import { toast } from "sonner";
const CreateChannel = ({ serverId }: { serverId: string | undefined }) => {
	const { form, formSchema } = useCreateChannelFormSchema();

	const { mutate, isLoading: isMutationLoading } = useClerkRequest("PUT", [
		`server/${serverId as string}`,
	]);

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);

		// Append all text fields
		// formData.append("name", values.name);
		// formData.append("description", values.description);

		// // Append the icon file if it exists
		// if (values.icon) {
		// 	formData.append("icon", values.icon);
		// }
		mutate(
			{
				url: `server/${serverId}`,
				body: values,
			},
			{
				onSuccess: () => {
					handleCloseDialog();
					toast("Channel created!");
				},
			}
		);
	}

	const [openDialog, setOpenDialog] = useState<boolean>(false);

	const handleOpenDialog = () => {
		setOpenDialog((prev) => !prev);
	};

	const handleCloseDialog = () => {
		setOpenDialog((prev) => !prev);
	};

	return (
		<Dialog open={openDialog}>
			<DialogTrigger asChild>
				<Button
					onClick={handleOpenDialog}
					size={"sm"}
					className="rounded-[18px] bg-discord-blue px-2 h-[30px] "
				>
					Add Channel
				</Button>
			</DialogTrigger>
			<DialogContent className="rounded-[15px] md:rounded-[15px] py-7 bg-onyx text-white">
				<DialogHeader className="text-start">
					<DialogTitle className="text-start text-xl text-discord-blue">
						More Channels, More Fun!!
					</DialogTitle>

					<DialogDescription className="text-white">
						Channels help manage interactions on your server based on
						topics, ideas, locations and even voice communication!
					</DialogDescription>
				</DialogHeader>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-5"
					>
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
										channel unless made private
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
										This will be the publicly displayed description
										for your channel
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
									<FormLabel>What type of channel is this</FormLabel>
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
								<>Create Channel </>
							)}
						</Button>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};

export default CreateChannel;
