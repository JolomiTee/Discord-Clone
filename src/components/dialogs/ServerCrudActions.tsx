import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useClerkRequest } from "@/hooks/use-query";
import { useCreateServerFormSchema } from "@/lib/formSchemas/createServerSchema";
import { Edit, Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { CreateServerForm } from "../forms/CreateServer";
import ServerIconPreview from "../server/ServerIconPreview";
import { Button } from "../ui/button";
import { SidebarMenuButton } from "../ui/sidebar";

interface Props {
	trigger?: "edit" | "create";
	serverId?: string | undefined;
}
const ServerCrudActions = ({ trigger, serverId }: Props) => {
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

	const [open, setOpen] = useState(false);

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
					toast("Server created");
					setOpen(false);
				},
			}
		);
	}
	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger>
				{trigger === "create" ? (
					<SidebarMenuButton
						tooltip={"Create a onConCloseonCloselose"}
						className=" gap-3 text-base h-fit group-data-[collapsible=icon]:[&>span:last-child]:hidden p-0 group-data-[collapsible=icon]:ps-0 px-2 md:ps-3 data-[active=true]:text-white data-[active=true]:font-bold mx-auto group-data-[collapsible=icon]:md:size-[50px] group-data-[collapsible=icon]:rounded-full group-data-[collapsible=icon]:size-[45px] group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:bg-charcoal"
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
					>
						<Edit />
					</Button>
				)}
			</AlertDialogTrigger>
			<AlertDialogContent className="rounded-[15px] md:rounded-[15px] py-7 bg-onyx text-white overflow-hidden">
				<AlertDialogHeader>
					<AlertDialogTitle className="text-start text-xl text-discord-blue">
						{trigger === "create"
							? "Creating a Server? Cool!"
							: "Edit Server Details"}
					</AlertDialogTitle>
					<AlertDialogDescription>
						{trigger === "create" &&
							"Give your server an awesome name, a banger description and a cool image to let people identify your server"}
					</AlertDialogDescription>
				</AlertDialogHeader>
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
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default ServerCrudActions;
