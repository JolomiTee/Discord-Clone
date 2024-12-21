import { Button } from "@/components/ui/button";
import { useClerkRequest } from "@/hooks/use-query";
import { Loader } from "lucide-react";
import { toast } from "sonner";

const JoinServer = ({ serverId }: { serverId: string | undefined }) => {
	const { mutate, isLoading: isMutationLoading } = useClerkRequest("POST", [
		"joined-servers",
		`server/${String(serverId)}`,
	]);

	const handleJoinServer = () => {
		mutate(
			{
				url: `server/join-server/${serverId as string}`,
			},
			{
				onSuccess: () => {
					toast("Joined Server!");
				},
			}
		);
	};
	return (
		<Button
			onClick={handleJoinServer}
			size={"sm"}
			className="rounded-[18px] bg-discord-blue px-2 h-[30px] "
		>
			{isMutationLoading ? (
				<>
					<Loader size={4} className="size-4 animate-spin" />
					Joining server
				</>
			) : (
				<>Join Server </>
			)}
		</Button>
	);
};

export default JoinServer;
