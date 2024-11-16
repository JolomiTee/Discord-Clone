import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
	MessageSquare,
	MoreHorizontal,
	Rocket,
	Users,
	Video,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Home = () => {
	const isMobile = useIsMobile();
	return (
		<div className="flex flex-col min-h-screen">
			<header className="px-4 lg:px-6 h-14 flex items-center justify-between sticky top-0 w-full bg-charcoal z-20">
				<Link
					className="flex items-center justify-center text-discord-blue"
					to="#"
				>
					<MessageSquare className="h-6 w-6 text-primary" />
					<span className="ml-2 text-2xl font-bold text-primary">
						Rediscord
					</span>
				</Link>
				{isMobile ? (
					<SheetMenu />
				) : (
					<nav className="ml-auto flex items-center gap-4 sm:gap-6">
						<Link
							className="text-sm font-medium hover:underline underline-offset-4 text-white"
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
							className="text-sm font-medium hover:underline underline-offset-4 text-white"
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
							className="text-sm font-medium hover:underline underline-offset-4 text-white"
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

						<Button className="bg-discord-blue rounded-[5px]" asChild>
							<Link to={"signup"}>Sign Up</Link>
						</Button>
						<Button
							variant={"ghost"}
							className="border border-discord-blue rounded-[5px] text-discord-blue"
							asChild
						>
							<Link to={"login"}>Log In</Link>
						</Button>
					</nav>
				)}
			</header>

			<main className="flex-1 z-10 mx-auto">
				<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary">
					<div className="container px-4 md:px-6 relative">
						<div className="flex flex-col gap-6 items-center">
							{/* <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]"> */}
							<div className="flex flex-col justify-center text-start md:text-center space-y-4 md:space-y-10">
								<div className="space-y-2">
									<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-discord-blue">
										Reconnect . . . Differently.
									</h1>
									<p className="max-w-[600px] md:text-xl ">
										Connect, chat, and collaborate with your
										community. Rediscord brings people together, just
										like the platform you know and love
									</p>
								</div>
								<div className="flex flex-row items-center gap-2 md:justify-center">
									{/* <div className="flex flex-col justify-center items-center gap-2 min-[400px]:flex-row "> */}
									<Button className="bg-discord-blue text-white rounded-[8px] hover:bg-gray-100">
										<Link to={"signup"}>Get Started</Link>
									</Button>
									<Button
										variant="outline"
										className="border-white hover:bg-discord-blue/10 rounded-[8px]"
									>
										Learn More
									</Button>
								</div>
							</div>

							<img
								alt="Rediscord Hero Image"
								className="mx-auto aspect-video overflow-hidden rounded-[8px] object-cover object-center sm:w-full lg:order-last"
								height="310"
								src="/Rediscord Hero.png"
								width="550"
							/>
						</div>
					</div>
				</section>
				<section
					id="features"
					className="w-full py-12 md:py-24 lg:py-32 bg-white"
				>
					<div className="container px-4 md:px-6">
						<div className="flex flex-col gap-6 mx-auto text-center mb-12 max-w-[600px]">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
								Features
							</h2>
							<p>
								Rediscord wants to bring so many features to life, but
								we are going one at a time. Here are some of the cool
								features that would be making it to{" "}
								<b> Production Soon</b> <Rocket className="inline" />{" "}
							</p>
						</div>
						<div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
							<div className="flex flex-col items-center space-y-4 text-center">
								<Users className="h-12 w-12 text-fuchsia-600" />
								<h3 className="text-xl font-bold text-fuchsia-600">
									Community Building
								</h3>
								<p className="text-gray-500 dark:text-gray-400">
									Create and join servers, connect with like-minded
									individuals, and build your community.
								</p>
							</div>
							<div className="flex flex-col items-center space-y-4 text-center">
								<MessageSquare className="h-12 w-12 text-discord-blue" />
								<h3 className="text-xl font-bold text-discord-blue">
									Real-time Messaging
								</h3>
								<p className="text-gray-500 dark:text-gray-400">
									Enjoy seamless, real-time messaging with text,
									emojis, and file sharing capabilities.
								</p>
							</div>
							<div className="flex flex-col items-center space-y-4 text-center">
								<Video className="h-12 w-12 text-green-600" />
								<h3 className="text-xl font-bold text-green-600">
									Voice & Video Calls
								</h3>
								<p className="text-gray-500 dark:text-gray-400">
									Connect face-to-face or voice-to-voice with
									high-quality, lag-free calls.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section
					id="testimonials"
					className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
				>
					<div className="container px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
							Testimonials
						</h2>
						<div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
							<div className="flex flex-col items-center space-y-4 text-center">
								<Avatar className="w-[70px] h-[70px]">
									<AvatarImage
										src="https://github.com/brok3n.png"
										alt="@shadcn"
									/>
									<AvatarFallback>BO</AvatarFallback>
								</Avatar>
								<div className="space-y-2">
									<h3 className="text-xl font-bold">Brok3n OG</h3>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										"Rediscord has revolutionized how our gaming
										community stays connected. It's intuitive and
										feature-packed!"
									</p>
								</div>
							</div>
							<div className="flex flex-col items-center space-y-4 text-center">
								<Avatar className="w-[70px] h-[70px]">
									<AvatarImage
										src="https://github.com/jamesgunn.png"
										alt="@shadcn"
									/>
									<AvatarFallback>JG</AvatarFallback>
								</Avatar>
								<div className="space-y-2">
									<h3 className="text-xl font-bold">James Gunn</h3>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										"As a project manager, Rediscord has streamlined
										our team communication. It's a game-changer!"
									</p>
								</div>
							</div>
							<div className="flex flex-col items-center space-y-4 text-center">
								<Avatar className="w-[70px] h-[70px]">
									<AvatarImage
										src="https://github.com/shardcn.png"
										alt="@shadcn"
									/>
									<AvatarFallback>LS</AvatarFallback>
								</Avatar>
								<div className="space-y-2">
									<h3 className="text-xl font-bold">
										Lindsey Sterling
									</h3>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										"The voice quality on Rediscord is unmatched. It's
										perfect for our virtual choir practices!"
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section id="faq" className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
							Questions? Why Not?
						</h2>
						<Accordion
							type="single"
							collapsible
							className="w-full max-w-3xl mx-auto"
						>
							<AccordionItem value="item-1">
								<AccordionTrigger>
									Is Rediscord free to use?
								</AccordionTrigger>
								<AccordionContent>
									Yes, Rediscord will be free to use for basic
									features. I wanna also have a premium tier thing
									going just for gags, with additional features for
									power users. Coming Soon!
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-2">
								<AccordionTrigger>
									How secure is Rediscord?
								</AccordionTrigger>
								<AccordionContent>
									I take security seriously. Rediscord will be using
									end-to-end encryption for all messages and calls,
									ensuring your conversations remain private... Easier
									said than done!
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-3">
								<AccordionTrigger>
									Can I use Rediscord on mobile devices?
								</AccordionTrigger>
								<AccordionContent>
									Rediscord is currently a web-only application, but
									will make it to PWA status soon with all its features
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-4">
								<AccordionTrigger>
									How many people can join a server?
								</AccordionTrigger>
								<AccordionContent>
									Rediscord database can accommodate up to 100,000
									members, making Rediscord 'almost' suitable for
									communities of all sizes. I'd ask Mongo later though.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</section>
			</main>

			<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
				<p className="text-xs text-gray-500 dark:text-gray-400">
					© 2024 Rediscord. All rights reserved.
				</p>
				<nav className="sm:ml-auto flex gap-4 sm:gap-6">
					<Link
						className="text-xs hover:underline underline-offset-4"
						to="https://jolomitee-v2.vercel.app/"
					>
						JolomiTee
					</Link>
					<Link
						className="text-xs hover:underline underline-offset-4"
						to="https://github.com/JolomiTee"
					>
						Github
					</Link>
					<Link
						className="text-xs hover:underline underline-offset-4"
						to="https://www.linkedin.com/in/jolomitee"
					>
						Linkedin
					</Link>
				</nav>
			</footer>
		</div>
	);
};

export default Home;

import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

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
					<Button className="bg-discord-blue rounded-[5px]" asChild>
						<Link to={"signup"}>Sign Up</Link>
					</Button>
					<Button
						variant={"ghost"}
						className="border border-discord-blue rounded-[5px] text-discord-blue"
						asChild
					>
						<Link to={"login"}>Log In</Link>
					</Button>
				</div>
			</SheetContent>
		</Sheet>
	);
}
