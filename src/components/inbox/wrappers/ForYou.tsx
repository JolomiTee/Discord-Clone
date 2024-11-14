import { for_you_notification } from "@/data/notifications";
import { AlertForYou } from "../for_you/Alert";
import AccountSteps from "../for_you/AccountSteps";
import RediscordPro from "../for_you/RediscordPro";
import EmptyState from "@/components/common/EmptyNotificationState";

const ForYou = () => {
	return (
		<div className=" p-2 md:p-3 flex gap-5 relative h-[calc(100dvh-100px)]">
			<div className="w-full flex flex-col gap-5 overflow-y-auto scrollbar-hidden md:pr-3 pb-10">
				<div className="md:hidden">
					<AccountSteps />
				</div>
				{for_you_notification.length !== 0 ? (
					for_you_notification.map((notif, i) => {
						return <AlertForYou key={i} notification={notif} />;
					})
				) : (
					<EmptyState text="You're all caught up!" />
				)}
			</div>
			<div className="w-[50%] md:flex flex-col gap-10 hidden">
				<AccountSteps />
				<RediscordPro />
			</div>
		</div>
	);
};

export default ForYou;
