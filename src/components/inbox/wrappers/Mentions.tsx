import { for_you } from "@/data/notifications";
import { AlertForYou } from "../for_you/Alert";
import EmptyState from "@/components/common/EmptyNotificationState";

const Mentions = () => {
	return (
		<div className="p-3 flex gap-5 relative h-[calc(100vh-100px)]">
			<div className="w-full flex flex-col gap-5 overflow-y-auto scrollbar-hidden pr-3 pb-10">
				{for_you.length !== 0 ? (
					for_you.map((notif, i) => {
						const {} = notif;
						return <AlertForYou key={i} />;
					})
				) : (
					<EmptyState text="You're all caught up!" />
				)}
			</div>
			<div className="w-[50%] flex flex-col gap-10"></div>
		</div>
	);
};

export default Mentions;
