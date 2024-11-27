import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { MessageSquare, MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import AuthContextButtons from "./AuthContextButtons";
export function SheetMenu() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button
					variant="outline"
					className="rounded-[8px] border-discord-blue/50 bg-transparent border-2 hover:bg-discord-blue"
					size={"icon"}
				>
					<MoreHorizontal className="text-white " size={30} />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Menu</SheetTitle>
				</SheetHeader>
				<div className="grid gap-4 py-4">
					<Link
						className="flex items-center justify-center text-discord-blue"
						to="#"
					>
						<MessageSquare className="h-6 w-6 text-primary" />
						<span className="ml-2 text-2xl font-bold text-primary">
							Rediscord
						</span>
					</Link>
					<nav className="flex flex-col items-end gap-4 sm:gap-6">
						<Link
							className="text-sm font-medium hover:underline underline-offset-4"
							to="#features"
							onClick={(e) => {
								e.preventDefault();
								document
									.getElementById("features")
									?.scrollIntoView({ behavior: "smooth" });
							}}
						>
							Features
						</Link>
						<Link
							className="text-sm font-medium hover:underline underline-offset-4"
							to="#testimonials"
							onClick={(e) => {
								e.preventDefault();
								document
									.getElementById("testimonials")
									?.scrollIntoView({ behavior: "smooth" });
							}}
						>
							Testimonials
						</Link>
						<Link
							className="text-sm font-medium hover:underline underline-offset-4"
							to="#faq"
							onClick={(e) => {
								e.preventDefault();
								document
									.getElementById("faq")
									?.scrollIntoView({ behavior: "smooth" });
							}}
						>
							FAQ
						</Link>
					</nav>

					<AuthContextButtons />
				</div>
			</SheetContent>
		</Sheet>
	);
}
