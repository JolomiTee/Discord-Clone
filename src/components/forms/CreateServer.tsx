import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Edit, Loader, Plus } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { SidebarMenuButton } from "../ui/sidebar";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { useClerkRequest } from "@/hooks/use-query";
import { useCreateServerFormSchema } from "@/lib/formSchemas/createServerSchema";
import React, { useState } from "react";
import { z } from "zod";
import { Card } from "../ui/card";

const CreateServer = ({ trigger }: { trigger?: "edit" | "create" }) => {
	const { form, formSchema } = useCreateServerFormSchema();
	const [iconPreview, setIconPreview] = useState<string | undefined>(
		undefined
	);
	const [bannerPreview, setBannerPreview] = useState<string | undefined>(
		undefined
	);
	const [name, setName] = useState<string | undefined>(undefined);

	const { mutate, isLoading: isMutationLoading } = useClerkRequest("POST", [
		"joined-servers",
		"servers",
	]);

	const [openDialog, setOpenDialog] = useState<boolean>(false);

	const handleOpenDialog = () => {
		setOpenDialog(true);
	};

	const handleCloseDialog = () => {
		setOpenDialog(false);
	};

	function onSubmit(values: z.infer<typeof formSchema>) {
		const formData = new FormData();

		// Append all text fields
		formData.append("name", values.name);
		formData.append("description", values.description);

		// Append the icon file if it exists
		if (values.icon instanceof File) {
			formData.append("icon", values.icon);
		}
		if (values.banner instanceof File) {
			formData.append("banner", values.banner);
		}
		mutate(
			{
				url: "servers",
				body: formData,
			},
			{
				onSuccess: () => {
					handleCloseDialog();
					toast("Server created");
				},
			}
		);
	}

	return (
		<>
			{/*  rounded-full size-[45px]  */}
			{trigger === "create" ? (
				<SidebarMenuButton
					tooltip={"Create a server"}
					className=" gap-3 text-base h-fit group-data-[collapsible=icon]:[&>span:last-child]:hidden p-0 group-data-[collapsible=icon]:ps-0 px-2 md:ps-3 data-[active=true]:text-white data-[active=true]:font-bold mx-auto group-data-[collapsible=icon]:md:size-[50px] group-data-[collapsible=icon]:rounded-full group-data-[collapsible=icon]:size-[45px] group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:bg-charcoal

					"
					onClick={handleOpenDialog}
				>
					<div className="flex items-center justify-center bg-charcoal/50 size-[45px] rounded-full">
						<Plus color="white" />
					</div>
					<span className="text-[15px]">Create a server</span>
				</SidebarMenuButton>
			) : (
				<Button
					title="Edit Server"
					className="h-full w-fit rounded bg-transparent justify-start px-2 shadow-none"
					onClick={handleOpenDialog}
				>
					<Edit />
				</Button>
			)}
			<Dialog open={openDialog} onOpenChange={setOpenDialog}>
				<DialogContent className="rounded-[15px] md:rounded-[15px] py-7 bg-onyx text-white overflow-hidden">
					<DialogHeader className="text-start">
						<DialogTitle className="text-start text-xl text-discord-blue">
							Creating a Server? Cool!
						</DialogTitle>

						<DialogDescription className="text-white">
							Give your server an awesome name, a banger description and
							a cool image to let people identify your server
						</DialogDescription>
					</DialogHeader>

					<div className="bg-onyx z-10 overflow-y-scroll scrollbar-hidden h-full relative grid gap-3">
						{bannerPreview && (
							<div className="max-w-[450px] h-[120px] pb-0">
								<img
									src={bannerPreview}
									alt="Image"
									className="rounded-md w-full h-full object-center object-cover "
								/>
							</div>
						)}
						<ServerIconPreview iconPreview={iconPreview} name={name} />

						<CreateServerForm
							form={form}
							onSubmit={onSubmit}
							setIconPreview={setIconPreview}
							setBannerPreview={setBannerPreview}
							setName={setName}
							isMutationLoading={isMutationLoading}
						/>
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
};

const CreateServerForm = ({
	form,
	onSubmit,
	setIconPreview,
	setBannerPreview,
	setName,
	isMutationLoading,
}: {
	form: any;
	onSubmit: (values: any) => void;
	setIconPreview: (url: string | undefined) => void;
	setBannerPreview: (url: string | undefined) => void;
	setName: (name: string | undefined) => void;
	isMutationLoading: boolean;
}) => {
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
				<FormField
					control={form.control}
					name="name"
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
								This will be the publicly displayed name for your server
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
								This will be the publicly displayed description for your
								server
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="flex items-center gap-3">
					<FormField
						control={form.control}
						name="icon"
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
												setIconPreview(URL.createObjectURL(file)); // Create a temporary iconPreview URL
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

					<FormField
						control={form.control}
						name="banner"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Choose a banner</FormLabel>
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
												setBannerPreview(URL.createObjectURL(file)); // Create a temporary iconPreview URL
											}
										}} // Pass the selected file to `field.onChange`
										onBlur={field.onBlur}
										name={field.name}
										ref={field.ref}
									/>
								</FormControl>
								<FormDescription>
									Banner will be publicly displayed for your server
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<Button
					type="submit"
					className="bg-discord-blue rounded-[8px]"
					disabled={isMutationLoading}
				>
					{isMutationLoading ? (
						<>
							<Loader size={4} className="size-4 animate-spin" />
							Creating Server
						</>
					) : (
						<>Create Server </>
					)}
				</Button>
			</form>
		</Form>
	);
};

const ServerIconPreview = ({
	iconPreview,
	name,
}: {
	iconPreview: string | undefined;
	name: string | undefined;
}) => {
	return (
		<Card className="flex gap-3 p-2 px-3 items-center w-fit cursor-not-allowed mx-auto bg-charcoal">
			<Avatar className={`size-[45px] rounded-full hover:rounded-[12px]`}>
				<AvatarImage src={iconPreview} alt={"server"} />
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

export default CreateServer;
