import MessagesDisplayVariant from "./sidelist/MessagesDisplayVariant";
import ServerDisplayVariant from "./sidelist/ServerDisplayVariant";

const Sidelist = () => {
	return (
		<section className="lg:min-w-[20%] lg:max-w-[20%] bg-carbon relative text-[#FFFFFF99]">
			{/* <MessagesDisplayVariant /> */}
			<ServerDisplayVariant />
		</section>
	);
};

export default Sidelist;
