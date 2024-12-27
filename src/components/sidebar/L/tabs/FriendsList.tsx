import FriendCard from "@/components/common/sidebar_buttons/FriendCard";
import LoadingFriendList from "@/components/common/skeletons/LoadingFriendList";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import useClerkQuery from "@/hooks/use-query";
import { Friends } from "@/types";
import { Plus } from "lucide-react";

import AddFriendModal from "@/components/dialogs/AddFriendModal";
import MobileSearchModal from "@/components/mobile_v_comps/MobileSearchModal";
import { messagesFilter } from "@/data";
import IconButtons from "@/components/common/IconButtons";
import { useOpenSearchBar } from "@/hooks/use-open-sidebar";
import { Dispatch, SetStateAction } from "react";

interface Props {
	isMobile: boolean;
	setSelectedTab: Dispatch<SetStateAction<string>>;
}

const FriendsList = ({ isMobile, setSelectedTab }: Props) => {
	const { data, isLoading, error } = useClerkQuery<Friends[]>("added-friends");
	const openSearchBar = useOpenSearchBar();
	return (
		<>
			<div className="flex items-center justify-between gap-2 pb-2">
				<Select>
					<SelectTrigger className="h-[35px] rounded-full bg-[#FFFFFF08] border border-solid border-[#FFFFFF0F] text-[#FFFFFF99] flex-row-reverse justify-end font-semibold">
						<SelectValue placeholder="Newest" />
					</SelectTrigger>
					<SelectContent className="bg-onyx border border-solid border-[#FFFFFF0F] text-[#FFFFFF] rounded-[10px]">
						{messagesFilter.map((filters) => (
							<SelectItem
								key={filters.label}
								className="rounded-[8px]"
								value={filters.label}
							>
								{filters.title}
							</SelectItem>
						))}
					</SelectContent>
				</Select>

				<div className="flex gap-2 items-center ">
					{!isMobile ? (
						<IconButtons
							src="search"
							alt="Search"
							sizes="size-[18px]"
							buttonStyles="rounded-full size-[35px] p-0 bg-[#FFFFFF08] border border-solid border-[#FFFFFF0F]"
							action={openSearchBar}
						/>
					) : (
						<MobileSearchModal type="l_sidebar_search" />
					)}

					<AddFriendModal />
				</div>
			</div>
			<div className=" grid overflow-y-auto max-h-full scrollbar-hidden">
				{isLoading ? (
					<LoadingFriendList />
				) : error ? (
					<div className="text-center">
						Wumpus was unable to find your friends
					</div>
				) : data.data.length > 0 ? (
					data.data.map((friends: Friends) => {
						const {
							_id,
							username,
							firstName,
							lastName,
							email_address,
							profile_image_url,
							isFriend,
						} = friends;

						return (
							<FriendCard
								key={_id}
								slug={username}
								_id={_id}
								username={username}
								profile_image_url={profile_image_url}
								firstName={firstName}
								lastName={lastName}
								email_address={email_address}
								isFriend={isFriend}
								action={setSelectedTab}
								// online={online}
								// hasMessage={hasMessage}
								// messageCount={messageCount}
								// pinned={pinned}
							/>
						);
					})
				) : (
					<div className="text-center">
						No friends here, just Wumpus <br />
						<p className="text-xs flex gap-1 justify-center pt-1">
							Add some by clicking the{" "}
							<Plus
								className="inline-flex text-discord-blue"
								size={15}
							/>{" "}
							icon
						</p>
					</div>
				)}
			</div>
		</>
	);
};

export default FriendsList;
