import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Checkbox } from "@/components/ui/checkbox";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { toast } from "../../../hooks/use-toast";

const AccountSteps = () => {
	return (
		<Card className="bg-charcoal text-white py-4 md:px-2 rounded-[10px]">
			<CardHeader className="px-3 pt-0">
				<CardTitle>Getting Started with Rediscord</CardTitle>
				<CardDescription className="text-white text-[13px]">
					Follow some of these steps to get familiar with Rediscord
				</CardDescription>
			</CardHeader>
			<CardContent className="px-3 pb-0">
				<AccountStepsCheckBoxes />
			</CardContent>
		</Card>
	);
};

export default AccountSteps;

const items = [
	{
		id: "verify_email",
		label: "Verify your Email",
	},
	{
		id: "add_profile_image",
		label: "Add your profile image",
	},
	{
		id: "join_a_server",
		label: "Join a Server",
	},
	{
		id: "connect_with_a_friend",
		label: "Connect with a Friend",
	},
] as const;

const FormSchema = z.object({
	items: z.array(z.string()).refine((value) => value.some((item) => item), {
		message: "You have to select at least one item.",
	}),
});

export function AccountStepsCheckBoxes() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			items: ["verify_email", "add_profile_image"],
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">
						{JSON.stringify(data, null, 2)}
					</code>
				</pre>
			),
		});
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="items"
					render={() => (
						<FormItem>
							{items.map((item) => (
								<FormField
									key={item.id}
									control={form.control}
									name="items"
									render={({ field }) => {
										return (
											<FormItem
												key={item.id}
												className="flex flex-row items-center space-x-3 space-y-0"
											>
												<FormControl>
													<Checkbox
														className="rounded-full size-6 data-[state=checked]:bg-discord-blue"
														checked={field.value?.includes(
															item.id
														)}
														onCheckedChange={(checked) => {
															return checked
																? field.onChange([
																		...field.value,
																		item.id,
																  ])
																: field.onChange(
																		field.value?.filter(
																			(value) =>
																				value !== item.id
																		)
																  );
														}}
													/>
												</FormControl>
												<FormLabel className="text-xs font-normal my-auto">
													{item.label}
												</FormLabel>
											</FormItem>
										);
									}}
								/>
							))}
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					type="submit"
					className="me-0 ms-auto bg-discord-blue rounded-[5px] text-xs font-bold"
				>
					<CheckCircle2 /> Mark as Complete
				</Button>
			</form>
		</Form>
	);
}
