import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import useClerkQuery from "@/hooks/use-query";
import { searchFriendSchema } from "@/lib/formSchemas/searchFriendSchema";
import { Friends } from "@/types";
import { Rocket, Search } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import IconButtons from "../common/IconButtons";
import { Button } from "../ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import AddFriendCard from "./AddFriendCard";

const AddFriendModal = () => {
	const { form, formSchema } = searchFriendSchema();
	const [searchQuery, setSearchQuery] = useState("");

	const { data, isLoading, error } = useClerkQuery<Friends[]>(
		`friends/search?username=${encodeURIComponent(searchQuery)}`,
		{
			enabled: !!searchQuery, // Query only runs when there's a search term
		}
	);

	function onSubmit(data: z.infer<typeof formSchema>) {
		setSearchQuery(data.username);
	}

	console.log(data);
	return (
		<Dialog>
			<DialogTrigger>
				<IconButtons
					src="plus"
					alt="Add"
					sizes="size-[18px]"
					buttonStyles="rounded-full size-[35px] p-0 bg-[#FFFFFF08] border border-solid border-[#FFFFFF0F]"
				/>
			</DialogTrigger>
			<DialogContent className="bg-charcoal text-white border-none shadow-lg p-3 md:p-5 py-7 md:py-10 md:rounded-[15px] rounded-[15px] lg:rounded-[15px]">
				<DialogHeader>
					<DialogTitle>New Friends? Yess!</DialogTitle>
					<DialogDescription>
						You can search for new friends by their usernames, add them to
						your friend circle and have a nice chat{" "}
						<Rocket className="inline-flex size-4" />
					</DialogDescription>

					<div className="grid gap-3">
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="flex w-full"
							>
								<div className="flex items-center justify-start relative w-full">
									<FormField
										control={form.control}
										name="username"
										render={({ field }) => (
											<FormItem className="w-full">
												<FormControl className="w-full">
													<Input
														placeholder="Search by username"
														className="rounded-full placeholder:text-white h-[50px] w-full"
														{...field}
													/>
												</FormControl>
												<FormDescription>
													This is your public display name.
												</FormDescription>
												<FormMessage />
											</FormItem>
										)}
									/>
									<Button
										type="submit"
										className="absolute size-10 rounded-full bg-transparent top-1/2 right-3 -translate-y-1/2"
									>
										<Search />
									</Button>
								</div>
							</form>
						</Form>

						<Separator />

						{error ? (
							<p className="text-red-500 mt-3">
								{error.message || "An error occurred."}
							</p>
						) : searchQuery && isLoading ? (
							<p className="text-gray-500 mt-3">Loading...</p>
						) : data && data.data?.length > 0 ? (
							<div className="">
								<h3 className="text-lg font-medium mb-3">
									Search Results:
								</h3>
								<div className="space-y-3">
									{data.data.map((friend: Friends) => (
										<AddFriendCard
											key={friend._id}
											profileImg={friend.profile_image_url}
											user={friend.username}
											userId={friend._id}
											online={false} // Add logic to determine this
											hasMessage={false}
											pinned={false}
											slug={friend.username}
											isFriend={friend.isFriend}
										/>
									))}
								</div>
							</div>
						) : (
							data &&
							data.data?.length === 0 && (
								<p className="text-gray-500 mt-3">No friends found.</p>
							)
						)}
					</div>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export default AddFriendModal;
