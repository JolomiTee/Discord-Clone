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
import { useState } from "react";

const DeleteServer = ({ serverId }: { serverId: string | undefined }) => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const { mutate, isLoading: isMutationLoading } = useClerkRequest("DELETE", [
		"joined-servers",
		`server/${String(serverId)}`,
	]);

	const handleDeleteServer = () => {
		mutate(
			{
				url: `server/delete-server/${serverId as string}`,
			},
			{
				onSuccess: () => {
					toast("Server Deleted!");
					setIsDialogOpen(false);
				},
				onError: (error) => {
					toast.error("Failed to delete server. Please try again.", error);
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
				<Button className="h-full w-full rounded bg-transparent justify-start px-2 shadow-none">
					<Trash /> Delete Server
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent className="bg-onyx md:rounded-[10px] ">
				<AlertDialogHeader>
					<AlertDialogTitle className="text-white">
						Are you sure you want to delete this server?
					</AlertDialogTitle>
					<AlertDialogDescription className="text-white">
						This action cannot be undone. This will permanently delete
						your server and all its channels.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel className="text-onyx rounded">
						Cancel
					</AlertDialogCancel>
					<AlertDialogAction
						className="bg-crimson rounded"
						disabled={isMutationLoading}
						onClick={handleDeleteServer}
					>
						{isMutationLoading ? (
							<>
								<Loader size={4} className="size-4 animate-spin" />
								Deleting server
							</>
						) : (
							<>Delete</>
						)}
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default DeleteServer;
