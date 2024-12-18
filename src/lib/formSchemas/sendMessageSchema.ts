import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const useSendMessageFormSchema = () => {
	const formSchema = z.object({
		message: z
			.string()
			.min(1, { message: "Cannot send message less than 1 character long." })
			.max(500, {
				message: "Server name cannot exceed 500 characters, for now",
			}),
		attachments: z
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
			message: "",
		},
	});

	return { form, formSchema };
};
