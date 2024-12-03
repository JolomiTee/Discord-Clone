import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const createServerFormSchema = () => {
	const formSchema = z.object({
		serverName: z
			.string()
			.min(2, { message: "Server name must be at least 2 characters long." })
			.max(100, { message: "Server name cannot exceed 100 characters." }),
		description: z
			.string()
			.max(250, { message: "Description cannot exceed 250 characters." })
			.optional(),
		iconFile: z
			.custom<File>((file) => file instanceof File, {
				message: "Must be a valid file.",
			})
			.refine((file) => file?.type?.startsWith("image/"), {
				message: "File must be an image.",
			})
			.refine(
				(file) => file?.size <= 5 * 1024 * 1024, // 5MB limit
				{ message: "File size must not exceed 5MB." }
			)
			.optional(),
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			serverName: "",
			description: "",
		},
	});

	return { form, formSchema };
};
