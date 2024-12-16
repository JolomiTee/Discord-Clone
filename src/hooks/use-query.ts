import { useAuth } from "@clerk/clerk-react";
import {
	useMutation,
	UseMutationOptions,
	UseMutationResult,
	useQuery,
	useQueryClient,
	UseQueryOptions,
	UseQueryResult,
} from "@tanstack/react-query";

const BASE_URL =
	import.meta.env.VITE_API_PORT || "http://localhost:6464/api/user/";

/**
 * A custom hook for fetching data with Clerk authentication and react-query.
 * @param {string} url - The URL to fetch data from.
 * @param {UseQueryOptions} [options] - Optional react-query options.
 * @returns {UseQueryResult} The query result including data, status, and error.
 */
export default function useClerkQuery<T>(
	url: string,
	options: Omit<
		UseQueryOptions<{ message: string; data: T }, Error>,
		"queryKey" | "queryFn"
	> = {}
): UseQueryResult<{ message: string; data: T }, Error> {
	const { getToken } = useAuth();

	return useQuery<{ message: string; data: T }, Error>(
		[url], // Use the URL as the query key
		async () => {
			const token = await getToken();

			// Combine the base URL and en````dpoint
			const fullUrl = `${BASE_URL}${url}`;

			const res = await fetch(fullUrl, {
				headers: { Authorization: `Bearer ${token}` },
			});

			if (!res.ok) {
				throw new Error(`Error fetching data: ${res.statusText}`);
			}

			const json = await res.json();

			// response matches the expected shape
			if (typeof json !== "object" || !json.message || !json.data) {
				throw new Error("Unexpected response format");
			}

			return json as { message: string; data: T };
		},
		options // Pass optional query options
	);
}

/**
 * A custom hook for POST requests with Clerk authentication and react-query.
 * @param {string | string[] | undefined} invalidateQueryKey - The query key(s) to invalidate after mutation.
 * @param {UseMutationOptions<any, any, { url: string; body: any }>} mutationOptions - Optional mutation options.
 * @returns {UseMutationResult} - The mutation object for making POST requests.
 */
export function useClerkRequest(
	method: "POST" | "PUT" | "PATCH" | "DELETE" = "POST",
	invalidateQueryKey?: string | string[],
	mutationOptions?: UseMutationOptions<any, any, { url: string; body: any }>
): UseMutationResult<any, any, { url: string; body: any }> {
	const { getToken } = useAuth();
	const queryClient = useQueryClient();

	return useMutation(
		async ({ url, body }: { url: string; body: any }) => {
			const token = await getToken();
			const fullUrl = `${BASE_URL}${url}`;

			const headers: Record<string, string> = {
				Authorization: `Bearer ${token}`,
			};

			const options: RequestInit = {
				method,
				headers,
			};

			// Check if the body contains a File and use FormData if necessary
			if (body instanceof FormData) {
				// Remove the Content-Type header to let the browser set it automatically
				delete headers["Content-Type"];
				options.body = body;
			} else {
				headers["Content-Type"] = "application/json";
				options.body = JSON.stringify(body);
			}

			const res = await fetch(fullUrl, options);

			if (!res.ok) {
				throw new Error(
					`Error making ${method} request: ${res.statusText}`
				);
			}

			return res.json();
		},
		{
			...mutationOptions,
			onSuccess: (data, variables, context) => {
				if (invalidateQueryKey) {
					const queryKeyArray = Array.isArray(invalidateQueryKey)
						? invalidateQueryKey
						: [invalidateQueryKey];
					queryClient.invalidateQueries(queryKeyArray);
				}

				mutationOptions?.onSuccess?.(data, variables, context);
			},
		}
	);
}
