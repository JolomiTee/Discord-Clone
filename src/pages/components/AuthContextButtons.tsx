import { Button } from "@/components/ui/button";
import {
	SignedIn,
	SignedOut,
	SignOutButton,
	UserButton,
} from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";

const AuthContextButtons = () => {
	const navigate = useNavigate();
	return (
		<>
			<SignedIn>
				<SignOutButton />
				<UserButton />
				<Button
					className="bg-discord-blue rounded-[6px]"
					onClick={() => {
						navigate("user/@me");
					}}
				>
					Dashboard
				</Button>
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
