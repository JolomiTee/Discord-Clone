import { ClerkProvider } from "@clerk/clerk-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./assets/backgrounds.css";
import { VITE_CLERK_PUBLISHABLE_KEY } from "./env.tsx";
import "./index.css";

const queryClient = new QueryClient();

if (!VITE_CLERK_PUBLISHABLE_KEY) {
	throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ClerkProvider
			publishableKey={VITE_CLERK_PUBLISHABLE_KEY}
			afterSignOutUrl="/"
			signUpForceRedirectUrl="/user/@me"
			signInForceRedirectUrl="/user/@me"
		>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</QueryClientProvider>
		</ClerkProvider>
		<Analytics />
	</StrictMode>
);
