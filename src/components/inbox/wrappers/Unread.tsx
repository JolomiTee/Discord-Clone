import { unreads } from "@/data/notifications";
import { AlertForYou } from "../for_you/Alert";
import EmptyState from "@/components/common/EmptyNotificationState";

const Unread = () => {
	return (
		<div className="p-3 flex gap-5 relative h-[calc(100vh-100px)]">
			<div className="w-full flex flex-col gap-5 overflow-y-auto scrollbar-hidden md:pr-3 pb-10">
				{unreads.length !== 0 ? (
					unreads.map((notif, i) => {
						const {} = notif;
						return <AlertForYou key={i} notification={notif} />;
					})
				) : (
					<EmptyState text="You're all caught up!" />
				)}
			</div>
			<div className="w-[50%] hidden md:flex flex-col gap-10"></div>
		</div>
	);
};

export default Unread;
