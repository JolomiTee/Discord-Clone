"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageSquare, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
// import { useRouter } from "next/navigation";

export default function Login() {
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		navigate("/user");
	}

	return (
		<div className="flex min-h-screen bg-gray-100">
			<div className="m-auto w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden">
				<div className="p-6 sm:p-8">
					<div className="flex justify-center mb-8">
						<MessageSquare className="h-12 w-12 text-discord-blue" />
					</div>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-discord-blue">
						Sign in to Rediscord
					</h2>
					<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
						<div className="space-y-4">
							<div>
								<Label htmlFor="username">Username</Label>
								<Input
									id="username"
									name="username"
									type="username"
									autoComplete="username"
									required
									className="mt-1"
								/>
							</div>
							<div>
								<Label htmlFor="password">Password</Label>
								<div className="relative mt-1">
									<Input
										id="password"
										name="password"
										type={showPassword ? "text" : "password"}
										autoComplete="current-password"
										required
										className="pr-10"
									/>
									<button
										type="button"
										className="absolute inset-y-0 right-0 pr-3 flex items-center"
										onClick={() => setShowPassword(!showPassword)}
									>
										{showPassword ? (
											<EyeOff className="h-5 w-5 text-gray-400" />
										) : (
											<Eye className="h-5 w-5 text-gray-400" />
										)}
									</button>
								</div>
							</div>
						</div>

						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<input
									id="remember-me"
									name="remember-me"
									type="checkbox"
									className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
								/>
								<Label
									htmlFor="remember-me"
									className="ml-2 block text-sm text-gray-900"
								>
									Remember me
								</Label>
							</div>

							<div className="text-sm">
								<Link
									to="#"
									className="font-medium text-primary hover:text-primary/80"
								>
									Forgot your password?
								</Link>
							</div>
						</div>

						<Button
							type="submit"
							className="w-full bg-discord-blue/80 hover:bg-discord-blue"
						>
							Sign in
						</Button>
					</form>

					<p className="mt-8 text-center text-sm text-gray-600">
						Not a member?{" "}
						<Link
							to="/signup"
							className="font-medium text-primary hover:text-primary/80"
						>
							Sign up now
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
