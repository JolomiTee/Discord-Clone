import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const searchFriendSchema = () => {
	const formSchema = z.object({
		username: z
			.string()
			.min(2, { message: "Username must be two characters or longer" })
			.max(50, { message: "username cannot exceed 50 characters." }),
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
		},
	});

	return { form, formSchema };
};
