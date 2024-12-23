import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Loader } from "lucide-react";
import React from "react";
import { AlertDialogCancel, AlertDialogFooter } from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface Props {
	form: any;
	onSubmit: (values: any) => void;
	setIconPreview: (url: string | undefined) => void;
	setBannerPreview: (url: string | undefined) => void;
	setName: (name: string | undefined) => void;
	isMutationLoading: boolean;
}

export const CreateServerForm = ({
	form,
	onSubmit,
	setIconPreview,
	setBannerPreview,
	setName,
	isMutationLoading,
}: Props) => {
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

				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
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
				</AlertDialogFooter>
			</form>
		</Form>
	);
};
