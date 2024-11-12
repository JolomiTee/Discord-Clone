import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageSquare, Users, Video, Zap, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<header className="px-4 lg:px-6 h-14 flex items-center">
				<Link className="flex items-center justify-center" to="#">
					<MessageSquare className="h-6 w-6 text-primary" />
					<span className="ml-2 text-2xl font-bold text-primary">
						Rediscord
					</span>
				</Link>
				<nav className="ml-auto flex items-center gap-4 sm:gap-6">
					<Link
						className="text-sm font-medium hover:underline underline-offset-4"
						to="#features"
					>
						Features
					</Link>
					<Link
						className="text-sm font-medium hover:underline underline-offset-4"
						to="#testimonials"
					>
						Testimonials
					</Link>
					<Link
						className="text-sm font-medium hover:underline underline-offset-4"
						to="#faq"
					>
						FAQ
					</Link>

					<Button asChild>
						<Link to={"signup"}>Sign Up</Link>
					</Button>
					<Button asChild>
						<Link to={"login"}>Log In</Link>
					</Button>
				</nav>
			</header>
			<main className="flex-1">
				<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary">
					<div className="container px-4 md:px-6 relative">
						<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
							<div className="flex flex-col justify-center space-y-4">
								<div className="space-y-2">
									<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
										Welcome to Rediscord
									</h1>
									<p className="max-w-[600px] md:text-xl">
										Connect, chat, and collaborate with your
										community. Rediscord brings people together, just
										like the platform you know and love.
									</p>
								</div>
								<div className="flex flex-col gap-2 min-[400px]:flex-row">
									<Button className="bg-white text-primary hover:bg-gray-100">
										Get Started
									</Button>
									<Button
										variant="outline"
										className="border-white hover:bg-white/10"
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
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
							Features
						</h2>
						<div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
							<div className="flex flex-col items-center space-y-4 text-center">
								<Users className="h-12 w-12 text-primary" />
								<h3 className="text-xl font-bold">
									Community Building
								</h3>
								<p className="text-gray-500 dark:text-gray-400">
									Create and join servers, connect with like-minded
									individuals, and build your community.
								</p>
							</div>
							<div className="flex flex-col items-center space-y-4 text-center">
								<MessageSquare className="h-12 w-12 text-primary" />
								<h3 className="text-xl font-bold">
									Real-time Messaging
								</h3>
								<p className="text-gray-500 dark:text-gray-400">
									Enjoy seamless, real-time messaging with text,
									emojis, and file sharing capabilities.
								</p>
							</div>
							<div className="flex flex-col items-center space-y-4 text-center">
								<Video className="h-12 w-12 text-primary" />
								<h3 className="text-xl font-bold">
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
								<img
									alt="User Avatar"
									className="rounded-full"
									height="100"
									src="/placeholder.svg"
									style={{
										aspectRatio: "100/100",
										objectFit: "cover",
									}}
									width="100"
								/>
								<div className="space-y-2">
									<h3 className="text-xl font-bold">Alice Johnson</h3>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										"Rediscord has revolutionized how our gaming
										community stays connected. It's intuitive and
										feature-packed!"
									</p>
								</div>
							</div>
							<div className="flex flex-col items-center space-y-4 text-center">
								<img
									alt="User Avatar"
									className="rounded-full"
									height="100"
									src="/placeholder.svg"
									style={{
										aspectRatio: "100/100",
										objectFit: "cover",
									}}
									width="100"
								/>
								<div className="space-y-2">
									<h3 className="text-xl font-bold">Bob Smith</h3>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										"As a project manager, Rediscord has streamlined
										our team communication. It's a game-changer!"
									</p>
								</div>
							</div>
							<div className="flex flex-col items-center space-y-4 text-center">
								<img
									alt="User Avatar"
									className="rounded-full"
									height="100"
									src="/placeholder.svg"
									style={{
										aspectRatio: "100/100",
										objectFit: "cover",
									}}
									width="100"
								/>
								<div className="space-y-2">
									<h3 className="text-xl font-bold">Carol Davis</h3>
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
							Frequently Asked Questions
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
									Yes, Rediscord is free to use for basic features. We
									also offer a premium tier with additional features
									for power users.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-2">
								<AccordionTrigger>
									How secure is Rediscord?
								</AccordionTrigger>
								<AccordionContent>
									We take security seriously. Rediscord uses end-to-end
									encryption for all messages and calls, ensuring your
									conversations remain private.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-3">
								<AccordionTrigger>
									Can I use Rediscord on mobile devices?
								</AccordionTrigger>
								<AccordionContent>
									Rediscord is available on iOS and Android devices, as
									well as on desktop platforms.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-4">
								<AccordionTrigger>
									How many people can join a server?
								</AccordionTrigger>
								<AccordionContent>
									Our servers can accommodate up to 100,000 members,
									making Rediscord suitable for communities of all
									sizes.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</section>
			</main>
			<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
				<p className="text-xs text-gray-500 dark:text-gray-400">
					© 2023 Rediscord. All rights reserved.
				</p>
				<nav className="sm:ml-auto flex gap-4 sm:gap-6">
					<Link
						className="text-xs hover:underline underline-offset-4"
						to="#"
					>
						Terms of Service
					</Link>
					<Link
						className="text-xs hover:underline underline-offset-4"
						to="#"
					>
						Privacy
					</Link>
					<Link
						className="text-xs hover:underline underline-offset-4"
						to="#"
					>
						Contact
					</Link>
				</nav>
			</footer>
		</div>
	);
};

export default Home;
