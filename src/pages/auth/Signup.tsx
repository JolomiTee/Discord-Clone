import { CLERK_SIGN_UP_FORCE_REDIRECT_URL, CLERK_SIGN_UP_URL } from "@/env";
import { SignUp } from "@clerk/clerk-react";

export default function Signup() {
	return (
		<SignUp
			path={CLERK_SIGN_UP_URL}
			forceRedirectUrl={CLERK_SIGN_UP_FORCE_REDIRECT_URL}
			appearance={{
				elements: {
					rootBox: "w-full h-full flex justify-center items-center ",
				},
			}}
		/>

		// <div className="flex min-h-screen bg-gray-100">
		// 	<div className="m-auto w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden">
		// 		<div className="p-6 sm:p-8">
		// 			<div className="flex justify-center mb-8">
		// 				<MessageSquare className="h-12 w-12 text-discord-blue" />
		// 			</div>
		// 			<h2 className="mt-6 text-center text-3xl font-extrabold text-discord-blue">
		// 				Create your account
		// 			</h2>
		// 			<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
		// 				<div className="space-y-4">
		// 					<div>
		// 						<Label htmlFor="username">Username</Label>
		// 						<Input
		// 							id="username"
		// 							name="username"
		// 							type="text"
		// 							autoComplete="username"
		// 							required
		// 							className="mt-1"
		// 						/>
		// 					</div>
		// 					<div>
		// 						<Label htmlFor="email">Email address</Label>
		// 						<Input
		// 							id="email"
		// 							name="email"
		// 							type="email"
		// 							autoComplete="email"
		// 							required
		// 							className="mt-1"
		// 						/>
		// 					</div>
		// 					<div>
		// 						<Label htmlFor="password">Password</Label>
		// 						<div className="relative mt-1">
		// 							<Input
		// 								id="password"
		// 								name="password"
		// 								type={showPassword ? "text" : "password"}
		// 								autoComplete="new-password"
		// 								required
		// 								className="pr-10"
		// 							/>
		// 							<button
		// 								type="button"
		// 								className="absolute inset-y-0 right-0 pr-3 flex items-center"
		// 								onClick={() => setShowPassword(!showPassword)}
		// 							>
		// 								{showPassword ? (
		// 									<EyeOff className="h-5 w-5 text-gray-400" />
		// 								) : (
		// 									<Eye className="h-5 w-5 text-gray-400" />
		// 								)}
		// 							</button>
		// 						</div>
		// 					</div>
		// 				</div>

		// 				<div className="flex items-center">
		// 					<input
		// 						id="terms"
		// 						name="terms"
		// 						type="checkbox"
		// 						className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
		// 						required
		// 					/>
		// 					<Label
		// 						htmlFor="terms"
		// 						className="ml-2 block text-sm text-gray-900"
		// 					>
		// 						I agree to the{" "}
		// 						<Link
		// 							to="/tnc"
		// 							className="font-medium text-primary hover:text-primary/80"
		// 						>
		// 							Terms of Service
		// 						</Link>{" "}
		// 						and{" "}
		// 						<Link
		// 							to="/tnc"
		// 							className="font-medium text-primary hover:text-primary/80"
		// 						>
		// 							Privacy Policy
		// 						</Link>
		// 					</Label>
		// 				</div>

		// 				<Button
		// 					type="submit"
		// 					className="w-full bg-discord-blue/80 hover:bg-discord-blue"
		// 				>
		// 					Sign up
		// 				</Button>
		// 			</form>

		// 			<p className="mt-8 text-center text-sm text-gray-600">
		// 				Already have an account?{" "}
		// 				<Link
		// 					to="/login"
		// 					className="font-medium text-primary hover:text-primary/80"
		// 				>
		// 					Sign in
		// 				</Link>
		// 			</p>
		// 		</div>
		// 	</div>
		// </div>
	);
}
