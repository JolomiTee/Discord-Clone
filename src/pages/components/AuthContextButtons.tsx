import { Button } from "@/components/ui/button";
import {
	SignedIn,
	SignedOut,
	SignOutButton,
	UserButton,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const AuthContextButtons = () => {
	return (
		<>
			<SignedIn>
				<SignOutButton />
				<UserButton />
			</SignedIn>

			<SignedOut>
				<Button className="bg-discord-blue rounded-[5px]" asChild>
					<Link to={"sign-up"}>Sign Up</Link>
				</Button>
				<Button
					variant={"ghost"}
					className="border border-discord-blue rounded-[5px] text-discord-blue"
					asChild
				>
					<Link to={"sign-in"}>Log In</Link>
				</Button>
			</SignedOut>
		</>
	);
};

export default AuthContextButtons;
