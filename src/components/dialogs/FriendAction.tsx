import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useClerkRequest } from "@/hooks/use-query";
import { Loader, ShieldBan, UserMinus2 } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useState } from "react";

interface Props {
	trigger: string;
	friendId: string;
	username: string;
}
const FriendAction = ({ trigger, friendId, username }: Props) => {
	const { mutate, isLoading } = useClerkRequest(
		`${trigger === "remove" ? "DELETE" : "POST"}`,
		["added-friends"]
	);
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const handleAction = () => {
		mutate(
			{
				url: `friends${trigger === "remove" ? "" : "/block"}/${friendId}`,
			},
			{
				onSuccess: () => {
					toast(`${username.trim()} is no longer a friend`);
					setIsDialogOpen(false);
				},
				onError: (error) => {
					toast.error(
						`Could not unfriend ${username.trim()}, error: ${error}`
					);
					setIsDialogOpen(false);
				},
			}
		);
	};
	return (
		<AlertDialog
			open={isDialogOpen || isLoading}
			onOpenChange={setIsDialogOpen}
		>
			<AlertDialogTrigger
				disabled={trigger === "block" ? true : false}
				className="hover:bg-discord-blue relative flex cursor-default select-none items-center gap-2 rounded w-full px-2 py-1.5 text-sm outline-none transition-colors focus:bg-discord-blue/70 disabled:cursor-not-allowed focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 dark:focus:bg-zinc-800 dark:focus:text-zinc-50"
			>
				{trigger === "remove" ? (
					<>
						<UserMinus2 /> Unfriend
					</>
				) : (
					<>
						<ShieldBan />
						Block
						<span className="absolute bottom-0 right-0 text-[9px] text-soft-blue rounded-full px-1.5 py-[1px] leading-none">
							coming soon
						</span>
					</>
				)}
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle className="truncate">
						{trigger === "remove"
							? `Really want to let a friend go?`
							: `Block ${username}`}
					</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone, however you can add them back by
						searching for&nbsp;
						<b className="text-black">{username.trim()}</b>
						&nbsp;again
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel className="rounded-sm">
						Keep 'em
					</AlertDialogCancel>
					<Button onClick={handleAction} disabled={isLoading}>
						{trigger === "remove" ? (
							isLoading ? (
								<>
									<Loader className="animate-spin w-2" /> Removing...
								</>
							) : (
								"Unfriend"
							)
						) : isLoading ? (
							<>
								<Loader className="animate-spin w-2" /> Blocking...
							</>
						) : (
							"Block"
						)}
					</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default FriendAction;
