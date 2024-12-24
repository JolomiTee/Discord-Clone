import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useClerkRequest } from "@/hooks/use-query";
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

import { useCreateChannelFormSchema } from "@/lib/formSchemas/createChannelSchema";
import { forwardRef } from "react";
import ChannelForm from "../forms/CreateChannel";
import { DropdownMenuItem } from "../ui/dropdown-menu";

const ChannelCrudActions = forwardRef<HTMLDivElement, Props>(
	({ trigger, channelId, serverId }, ref) => {
		const [open, setOpen] = useState(false);
		const { form, formSchema } = useCreateChannelFormSchema();

		const { mutate, isLoading: isMutationLoading } = useClerkRequest(
			`${trigger === "create" ? "POST" : "PUT"}`,
			[
				`server/${serverId}`,
				`${trigger === "edit" && `channel/${channelId}`}`,
			]
		);

		function onSubmit(values: z.infer<typeof formSchema>) {
			mutate(
				{
					url: `${
						trigger === "create"
							? `channels?serverId=${serverId as string}`
							: `channels?channelId=${channelId as string}`
					}`,
					body: values,
				},
				{
					onSuccess: () => {
						toast(
							`${
								trigger === "create"
									? "Channel created"
									: "Channel updated"
							}`
						);
						setOpen(false);
					},
					onError: () => {
						toast(
							`${
								trigger === "create"
									? "Unable to create channel"
									: "Unable to update channel"
							}`
						);
						setOpen(false);
					},
				}
			);
		}

		return (
			<AlertDialog
				open={open}
				onOpenChange={(newState) => {
					if (newState !== open) setOpen(newState);
				}}
			>
				<AlertDialogTrigger asChild>
					{trigger === "edit" ? (
						<DropdownMenuItem
							disabled
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
