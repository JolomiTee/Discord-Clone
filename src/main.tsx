import { Analytics } from "@vercel/analytics/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Sandbox from "./sandboxes/Sandbox.tsx";
import { SidebarProvider } from "./components/ui/sidebar.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<SidebarProvider name="rediscord-sidebar">
				{/* <Sandbox /> */}
				<App />
			</SidebarProvider>
		</BrowserRouter>
		<Analytics />
	</StrictMode>
);
