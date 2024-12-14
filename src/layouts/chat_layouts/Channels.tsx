import HMenu from "@/components/common/HMenu";
import Keyboard from "@/components/common/Keyboard";
import MainContainer from "@/layouts/MainContainer";
import { useUser } from "@clerk/clerk-react";
import Wumpus from "../Wumpus";
import { useHMenuSelectedClient } from "@/hooks/use-dms";
import { CurrentChannels } from "@/types";

const ChannelsLayout = () => {
	const { user } = useUser();
	console.log("userid: ", user?.id);

	const client = useHMenuSelectedClient(
		(state) => state.client
	) as CurrentChannels;

	const currentUser = {
		userId: user?.id,
		username: user?.username,
		userProfileImage: user?.imageUrl,
	};

	return (
		<MainContainer>
			<>
				<HMenu name={client.name} channelType={client.channelType} />

				<div className="h-full flex flex-col gap-[30px] relative overflow-auto scrollbar-hidden pb-5 p-3 md:p-4 lg:p-5">
					{/* <Badge className="mx-auto bg-charcoal rounded-[8px] px-3 py-2 sticky top-0 z-10">
						October 10, 2024
					</Badge> */}

					{/* Render Chat Bubbles */}
					<Wumpus />
				</div>

				<Keyboard currentUser={currentUser} />
			</>
		</MainContainer>
	);
};

export default ChannelsLayout;
