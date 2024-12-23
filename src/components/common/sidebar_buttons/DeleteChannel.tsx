import { Button } from "@/components/ui/button";
import { useClerkRequest } from "@/hooks/use-query";
import { Loader, Trash } from "lucide-react";
import { toast } from "sonner";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { forwardRef, useState } from "react";

type CreateChannelProps = {
	serverId?: string;
	channelId?: string; // Made optional in case it's not always required
	trigger?: React.ReactNode; // Updated to accept any valid React node as a trigger
};

const DeleteChannel = forwardRef<HTMLButtonElement, CreateChannelProps>(
	({ serverId, trigger, channelId }, ref) => {
		const [isDialogOpen, setIsDialogOpen] = useState(false);
		const { mutate, isLoading: isMutationLoading } = useClerkRequest(
			"DELETE",
			["joined-servers", `server/${String(channelId)}`]
		);

		const handleDeleteChannel = () => {
			mutate(
				{
					url: `channel/delete-channel/${channelId as string}`,
				},
				{
					onSuccess: () => {
						toast("Channel Deleted!");
						setIsDialogOpen(false);
					},
					onError: (error) => {
						toast.error(
							"Failed to delete channel. Please try again.",
							error
						);
						setIsDialogOpen(false);
					},
				}
			);
		};

		return (
			<AlertDialog
				open={isDialogOpen || isMutationLoading}
				onOpenChange={setIsDialogOpen}
			>
				<AlertDialogTrigger asChild>
					<Button
						ref={ref}
						title="Delete Channel"
						className="h-full w-full rounded bg-transparent justify-start px-2 shadow-none"
					>
						<Trash /> Delete Channel
					</Button>
				</AlertDialogTrigger>
				<AlertDialogContent className="bg-onyx md:rounded-[10px] ">
					<AlertDialogHeader>
						<AlertDialogTitle className="text-white">
							Are you sure you want to delete this Channel?
						</AlertDialogTitle>
						<AlertDialogDescription className="text-white">
							This action cannot be undone. This will permanently delete
							your Channel.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel className="text-onyx rounded">
							Cancel
						</AlertDialogCancel>
						<AlertDialogAction
							className="bg-crimson rounded"
							disabled={isMutationLoading}
							onClick={handleDeleteChannel}
						>
							{isMutationLoading ? (
								<>
									<Loader size={4} className="size-4 animate-spin" />
									Deleting channel
								</>
							) : (
								<>Delete</>
							)}
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		);
	}
);

export default DeleteChannel;
