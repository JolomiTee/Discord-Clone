/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	plugins: [require("tailwindcss-animate")],
	theme: {
		extend: {
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {
				onyx: "#1C1C1F", // menu background
				carbon: "#27282B", // sidebar background
				charcoal: "#313338", // chat area background
				graphite: "#2C2D31", // discord server icon background
				crimson: "#F23F42",
				emerald: "#3BA55C", // online
				gray: "#898989",
				"soft-blue": "#B5BFE7", // active icon state
				"discord-blue": "#5865F2", // selected server
			},
		},
	},
};
