import {
	Archive,
	Ellipsis,
	FileDown,
	MessageCircleWarning,
	Pin,
} from "lucide-react";
import { AspectRatio } from "../ui/aspect-ratio";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import IconButtons from "../IconButtons";
import { Separator } from "../ui/separator";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const ServerDisplayVariant = () => {
	return (
		<div>
			<AspectRatio ratio={16 / 6}>
				<img
					src="/touchgrasshq.png"
					alt="touchgrasshq"
					className="object-cover h-full w-full"
				/>
			</AspectRatio>
			<div className="p-3 grid gap-3">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2 text-white">
						<img src="/icons/verified.svg" width={25} height={25} />
						TouchGrass HQ
					</div>

					<DropdownMenu>
						<DropdownMenuTrigger>
							<Ellipsis />
						</DropdownMenuTrigger>
						<DropdownMenuContent className="rounded-[8px]">
							<DropdownMenuLabel>Actions</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<Archive /> Archive
							</DropdownMenuItem>
							<DropdownMenuItem>
								<FileDown />
								Export{" "}
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Pin /> Pin
							</DropdownMenuItem>
							<DropdownMenuItem>
								<MessageCircleWarning /> Report
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>

				<div className="flex justify-between items-center">
					<IconButtons
						src="notification"
						alt="Notifications"
						sizes="w-7 h-7"
					/>
					<IconButtons
						src="server_guide"
						alt="Notifications"
						sizes="w-7 h-7"
					/>
					<IconButtons
						src="browse_channels"
						alt="Notifications"
						sizes="w-7 h-7"
					/>
					<IconButtons src="events" alt="Notifications" sizes="w-7 h-7" />
					<IconButtons src="search" alt="Notifications" />
				</div>

				<Separator className="bg-[#FFFFFF26] h-0.5" />

				<Accordion
					type="multiple"
					defaultValue={["text-channels", "voice-channels"]}
					className="w-full"
					data-state="open"
				>
					<AccordionItem value="text-channels" className="border-none">
						<AccordionTrigger className="pt-0">
							TEXT CHANNELS
						</AccordionTrigger>
						<AccordionContent>
							Yes. It adheres to the WAI-ARIA design pattern.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="voice-channels" className="border-none">
						<AccordionTrigger className="pt-0">
							VOICE CHANNELS
						</AccordionTrigger>
						<AccordionContent>
							Yes. It comes with default styles that matches the other
							components&apos; aesthetic.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
};

export default ServerDisplayVariant;
