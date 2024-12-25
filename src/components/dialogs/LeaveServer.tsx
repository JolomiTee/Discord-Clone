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
import { Button } from "@/components/ui/button";
import { useClerkRequest } from "@/hooks/use-query";
import { ExitIcon } from "@radix-ui/react-icons";
import { Loader } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const LeaveServer = ({ serverId }: { serverId: string | undefined }) => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const { mutate, isLoading: isMutationLoading } = useClerkRequest("POST", [
		"joined-servers",
		`server/${String(serverId)}`,
	]);

	const handleLeaveServer = () => {
		mutate(
			{
				url: `server/leave-server/${serverId as string}`,
			},
			{
				onSuccess: () => {
					toast("You have left the server!");
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
					title="Leave Server"
					className="h-full w-fit rounded bg-transparent justify-start px-2"
				>
					<ExitIcon />
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent className="bg-onyx md:rounded-[10px] ">
				<AlertDialogHeader>
					<AlertDialogTitle className="text-white">
						Are you sure you want to Leave this server?
					</AlertDialogTitle>
					<AlertDialogDescription className="text-white">
						You will still be able to join the server by finding it in the
						discover tab
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel className="text-onyx rounded">
						Cancel
					</AlertDialogCancel>
					<AlertDialogAction
						className="bg-crimson rounded"
						disabled={isMutationLoading}
						onClick={handleLeaveServer}
					>
						{isMutationLoading ? (
							<>
								<Loader size={4} className="size-4 animate-spin" />
								Leaving server
							</>
						) : (
							<>Yes, Leave</>
						)}
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default LeaveServer;
