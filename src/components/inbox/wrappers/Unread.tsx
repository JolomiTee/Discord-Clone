import { for_you } from "@/data/notifications";
import { AlertForYou } from "../for_you/Alert";
import AccountSteps from "../for_you/AccountSteps";
import RediscordPro from "../for_you/RediscordPro";
import EmptyState from "@/components/common/EmptyNotificationState";

const Unread = () => {
	return (
		<div className="p-3 flex w-full gap-5">
			<div className="w-full">
				{for_you ? (
					<AlertForYou />
				) : (
					<EmptyState text="You're all caught up!" />
				)}
			</div>
			<div className="w-[50%] flex flex-col gap-10">
				<AccountSteps />
				<RediscordPro />
			</div>
		</div>
	);
};

export default Unread;
