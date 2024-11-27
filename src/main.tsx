import { Analytics } from "@vercel/analytics/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App.tsx";
import "./index.css";
import "./assets/backgrounds.css";

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const RedirectURL = import.meta.env.BASE_AUTH_REDIRECT_URL;

if (!PUBLISHABLE_KEY) {
	throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ClerkProvider
			publishableKey={PUBLISHABLE_KEY}
			afterSignOutUrl="/"
			signInFallbackRedirectUrl={RedirectURL}
			signUpFallbackRedirectUrl={RedirectURL}
		>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ClerkProvider>
		<Analytics />
	</StrictMode>
);
