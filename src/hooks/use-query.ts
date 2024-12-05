import { useAuth } from "@clerk/clerk-react";
import {
	useQuery,
	UseQueryOptions,
	UseQueryResult,
} from "@tanstack/react-query";

/**
 * A custom hook for fetching data with Clerk authentication and react-query.
 * @param {string} url - The URL to fetch data from.
 * @param {UseQueryOptions} [options] - Optional react-query options.
 * @returns {UseQueryResult} The query result including data, status, and error.
 */
export default function useClerkQuery(url: string, options = {}) {
	const { getToken } = useAuth();

	return useQuery(
		[url], // Use the URL as the query key
		async () => {
			const token = await getToken(); // Get the Clerk token
			const res = await fetch(url, {
				headers: { Authorization: `Bearer ${token}` },
			});

			if (!res.ok) {
				throw new Error(`Error fetching data: ${res.statusText}`);
			}

			return res.json(); // Parse the response as JSON
		},
		options // Pass optional query options
	);
}
