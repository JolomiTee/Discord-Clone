import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const getRandomColor = () => {
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
};

export function formatNumber(value: number): string {
	if (value >= 1000000) {
		return (value / 1000000).toFixed(1) + "M";
	} else if (value >= 1000) {
		return (value / 1000).toFixed(1) + "K";
	} else {
		return value.toString();
	}
}

export const sessionStorageProvider = {
	getItem: (name: string) => {
		const storedValue = sessionStorage.getItem(name);
		return storedValue ? JSON.parse(storedValue) : undefined;
	},
	setItem: (name: string, value: any) => {
		sessionStorage.setItem(name, JSON.stringify(value));
	},
	removeItem: (name: string) => {
		sessionStorage.removeItem(name);
	},
};

export const formatDate = (date: Date) => {
	const dateOptions: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "short",
		day: "numeric",
	};

	const timeOptions: Intl.DateTimeFormatOptions = {
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	};

	const formattedDate = date.toLocaleDateString("en-US", dateOptions);
	const formattedTime = date.toLocaleTimeString("en-US", timeOptions);

	return `${formattedDate} ${formattedTime}`;
};
