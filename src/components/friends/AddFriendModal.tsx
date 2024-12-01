import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import IconButtons from "../common/IconButtons";
import { Rocket } from "lucide-react";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import FriendCard from "../common/sidebar_buttons/FriendCard";

const AddFriendModal = () => {
	return (
		<Dialog>
			<DialogTrigger>
				<IconButtons
					src="plus"
					alt="Add"
					sizes="size-[18px]"
					buttonStyles="rounded-full size-[35px] p-0 bg-[#FFFFFF08] border border-solid border-[#FFFFFF0F]"
				/>
			</DialogTrigger>
			<DialogContent className="bg-charcoal text-white border-none shadow-lg">
				<DialogHeader>
					<DialogTitle>New Friends? Yess!</DialogTitle>
					<DialogDescription>
						You can search for new friends by their usernames, add them to
						your friend circle and have a nice chat{" "}
						<Rocket className="inline-flex size-4" />
					</DialogDescription>

					<div className="grid gap-3">
						<Input
							placeholder="Search by username"
							className="rounded-full placeholder:text-white"
						/>

						<Separator />

						<FriendCard
							friendReqCard
							profileImg="/silly.png"
							user="Grasscutter"
							dmId="7878"
							online
							hasMessage
							pinned
							slug="grasscutter"
						/>
						<FriendCard
							friendReqCard
							profileImg="/silly.png"
							user="Supreme_Grasster"
							dmId="7878"
							online
							hasMessage
							pinned
							slug="grasscutter"
						/>
						<FriendCard
							friendReqCard
							profileImg="/silly.png"
							user="Grass_Daemon"
							dmId="7878"
							online
							hasMessage
							pinned
							slug="grasscutter"
						/>
					</div>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export default AddFriendModal;
