import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const useCreateChannelFormSchema = () => {
	const formSchema = z.object({
		name: z
			.string()
			.min(2, { message: "Server name must be at least 2 characters long." })
			.max(100, { message: "Server name cannot exceed 100 characters." }),
		channelType: z.enum(["text", "voice"], {
			message: "Please select a channel type",
		}),
		description: z
			.string()
			.max(250, { message: "Description cannot exceed 250 characters." }),
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			description: "",
			channelType: "text",
		},
	});

	return { form, formSchema };
};

// const permissionsSchema = z.object({
// 	manageChannels: z.boolean().default(false),
// 	manageRoles: z.boolean().default(false),
// 	kickMembers: z.boolean().default(false),
// 	banMembers: z.boolean().default(false),
// 	sendMessages: z.boolean().default(true),
// 	connect: z.boolean().default(true),
// });
