import { Button } from "@/components/ui/button";
import { useClerkRequest } from "@/hooks/use-query";
import { ExitIcon } from "@radix-ui/react-icons";
import { Loader } from "lucide-react";
import { toast } from "sonner";

const LeaveServer = ({ serverId }: { serverId: string | undefined }) => {
	const { mutate, isLoading: isMutationLoading } = useClerkRequest("POST", [
		"joined-servers",
		`server/${String(serverId)}`,
	]);

	const handleJoinServer = () => {
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
		<Button
			variant={"destructive"}
			onClick={handleJoinServer}
			className="h-full w-full rounded"
		>
			{isMutationLoading ? (
				<>
					<Loader size={4} className="size-4 animate-spin" />
					Leaving server
				</>
			) : (
				<>
					<ExitIcon /> Leave Server{" "}
				</>
			)}
		</Button>
	);
};

export default LeaveServer;
