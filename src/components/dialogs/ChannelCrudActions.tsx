import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useClerkRequest } from "@/hooks/use-query";
import { useCreateServerFormSchema } from "@/lib/formSchemas/createServerSchema";
import { Edit, PlusSquareIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../ui/button";

interface Props {
	trigger?: "edit" | "create";
	serverId?: string | undefined;
	channelId?: string | undefined;
}

import { forwardRef } from "react";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import ChannelForm from "../forms/CreateChannel";

const ChannelCrudActions = forwardRef<HTMLDivElement, Props>(
	({ trigger, channelId }, ref) => {
		const { form, formSchema } = useCreateServerFormSchema();
		const [open, setOpen] = useState(false);

		const { mutate, isLoading: isMutationLoading } = useClerkRequest("PUT", [
			`server/${channelId as string}`,
		]);

		function onSubmit(values: z.infer<typeof formSchema>) {
			mutate(
				{
					url: `channels?channelId=${channelId as string}`,
					body: values,
				},
				{
					onSuccess: () => {
						toast("Channel created!");
					},
					onError: (error) => {
						toast.error(
							"Failed to create channel. Please try again.",
							error
						);
					},
				}
			);
		}

		return (
			<AlertDialog
				open={open}
				onOpenChange={(newState) => {
					// Avoid unnecessary updates
					if (newState !== open) setOpen(newState);
				}}
			>
				<AlertDialogTrigger asChild>
					{trigger === "edit" ? (
						<DropdownMenuItem
							onSelect={(e) => e.preventDefault()}
							title="Edit channel"
							className="h-full w-full rounded bg-transparent justify-start px-2 shadow-none"
						>
							<Edit /> Edit Channel
						</DropdownMenuItem>
					) : (
						<Button
							title="Create channel"
							className="h-full w-fit rounded bg-transparent justify-start px-2 shadow-none"
						>
							<PlusSquareIcon />
						</Button>
					)}
				</AlertDialogTrigger>
				<AlertDialogContent
					ref={ref}
					className="rounded-[15px] md:rounded-[15px] py-7 bg-onyx text-white overflow-hidden"
				>
					<AlertDialogHeader>
						<AlertDialogTitle className="text-start text-xl text-discord-blue">
							{trigger === "create"
								? "More Channels, More Fun!!"
								: "Edit Channel Details"}
						</AlertDialogTitle>
						<AlertDialogDescription>
							{trigger === "create" &&
								"Channels help manage interactions on your server based on topics, ideas, locations, and even voice communication!"}
						</AlertDialogDescription>
					</AlertDialogHeader>
					<div className="bg-onyx z-10 overflow-y-scroll scrollbar-hidden h-full relative grid gap-3">
						<ChannelForm
							trigger={trigger}
							form={form}
							onSubmit={onSubmit}
							isMutationLoading={isMutationLoading}
						/>
					</div>
				</AlertDialogContent>
			</AlertDialog>
		);
	}
);


export default ChannelCrudActions;
