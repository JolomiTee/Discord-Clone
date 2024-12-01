import { Analytics } from "@vercel/analytics/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App.tsx";
import "./index.css";
import "./assets/backgrounds.css";
import { VITE_CLERK_PUBLISHABLE_KEY } from "./env.tsx";

// Import your publishable key

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
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ClerkProvider>
		<Analytics />
	</StrictMode>
);
