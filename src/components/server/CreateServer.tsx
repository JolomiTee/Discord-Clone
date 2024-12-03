import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { SidebarMenuButton } from "../ui/sidebar";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createServerFormSchema } from "@/lib/formSchemas/createServerSchema";
import { z } from "zod";
import { Separator } from "../ui/separator";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CreateServer = () => {
	const { form, formSchema } = createServerFormSchema();
	const [preview, setPreview] = useState<string | undefined>(undefined);
	const [name, setName] = useState<string | undefined>(undefined);

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<SidebarMenuButton
					tooltip={"Create a server"}
					className="gap-3 text-base h-fit group-data-[collapsible=icon]:[&>span:last-child]:hidden p-0 group-data-[collapsible=icon]:ps-0 px-3 md:ps-3 data-[active=true]:text-white data-[active=true]:font-bold mx-auto"
				>
					<Button className="bg-charcoal rounded-full size-[45px] group-data-[collapsible=icon]:md:size-[50px]">
						<Plus />
					</Button>
					<span className="text-[15px]">Create a server</span>
				</SidebarMenuButton>
			</DialogTrigger>
			<DialogContent className="rounded-[15px] md:rounded-[15px] py-7">
				<DialogHeader className="text-start">
					<DialogTitle className="text-start text-xl text-discord-blue">
						Creating a Server? Cool!
					</DialogTitle>

					<DialogDescription className="text-white">
						Give your server an awesome name, a banger description and a
						cool image to let people identify your server
					</DialogDescription>
				</DialogHeader>

				<ServerPreview preview={preview} name={name} />

				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-5"
					>
						<FormField
							control={form.control}
							name="serverName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Server Name</FormLabel>
									<FormControl>
										<Input
											className="rounded-[8px]"
											onChange={(e) => {
												field.onChange(e.target.value);
												setName(e.target.value);
											}}
											placeholder="Give your server a name"
											onBlur={field.onBlur}
											name={field.name}
											ref={field.ref}
										/>
									</FormControl>
									<FormDescription>
										This will be the publicly displayed name for your
										server
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="description"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Server Description</FormLabel>
									<FormControl>
										<Input
											className="rounded-[8px]"
											placeholder="Add a brief description"
											{...field}
										/>
									</FormControl>
									<FormDescription>
										This will be the publicly displayed description
										for your server
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="iconFile"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Server Icon</FormLabel>
									<FormControl>
										<Input
											type="file"
											accept="image/*"
											className="rounded-[8px]"
											placeholder="Select Image"
											onChange={(
												e: React.ChangeEvent<HTMLInputElement>
											) => {
												const file = e.target.files?.[0];
												field.onChange(file);
												if (file) {
													setPreview(URL.createObjectURL(file)); // Create a temporary preview URL
												}
											}} // Pass the selected file to `field.onChange`
											onBlur={field.onBlur}
											name={field.name}
											ref={field.ref}
										/>
									</FormControl>
									<FormDescription>
										This will be the publicly displayed icon for your
										server
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button
							type="submit"
							className="bg-discord-blue rounded-[8px]"
						>
							Create Server
						</Button>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};

export default CreateServer;

import React from "react";
import { Card } from "../ui/card";

const ServerPreview = ({
	preview,
	name,
}: {
	preview: string | undefined;
	name: string | undefined;
}) => {
	return (
		<Card className="flex gap-3 p-2 px-3 items-center w-fit mx-auto cursor-not-allowed">
			<Avatar className={`size-[45px] rounded-full hover:rounded-[12px]`}>
				<AvatarImage src={preview} alt={"server"} />
				<AvatarFallback className="bg-discord-blue rounded-[15px]">
					<img
						src="/icons/discord.svg"
						className="size-[30px]"
						alt={"server"}
					/>
				</AvatarFallback>
			</Avatar>

			{name && <span>{name}</span>}
		</Card>
	);
};
