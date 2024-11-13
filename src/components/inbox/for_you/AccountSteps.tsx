import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const AccountSteps = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Getting Started with Rediscord</CardTitle>
				<CardDescription>
					Follow some of these steps to get familiar with Rediscord
				</CardDescription>
			</CardHeader>
			<CardContent>
				<AccountStepsCheckBoxes />
			</CardContent>
		</Card>
	);
};

export default AccountSteps;

("use client");

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "../../../hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

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
												className="flex flex-row items-start space-x-3 space-y-0"
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
												<FormLabel className="text-sm font-normal">
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
				<Button type="submit" className="me-0 ms-auto">
					<CheckCircle2 /> Mark as Complete
				</Button>
			</form>
		</Form>
	);
}
