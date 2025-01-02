import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignOutButton } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
const AuthContextButtons = () => {
	const navigate = useNavigate();
	const { user } = useUser();
	return (
		<>
			<SignedIn>
				<div className="flex items-center w-full gap-3">
					<div className="flex items-center justify-center size-12 rounded-full">
						<img
							className="rounded-full object-cover"
							src={user?.imageUrl || "/rediscord_pro.jpeg"}
							alt={user?.fullName || "Rediscord User"}
						/>
					</div>

					<Button
						className="bg-discord-blue rounded-[6px] w-full"
						onClick={() => {
							navigate("user/@me");
						}}
					>
						Dashboard
					</Button>
				</div>
				<div className="w-full">
					<SignOutButton />
				</div>
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
