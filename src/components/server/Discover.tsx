import useClerkQuery from "@/hooks/use-query";
import { Servers } from "@/types";
import LoadingServerList from "../common/skeletons/LoadingServerList";
import ServerCard from "./ServerCard";

const Discover = () => {
	const { isLoading, data, error } = useClerkQuery<Servers[]>("all-servers");
	console.log(data);
	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 p-3 mb-10">
			{isLoading ? (
				<LoadingServerList />
			) : error ? (
				<div className="text-center text-lg text-white">
					Wumpus ran into an error fetching servers
				</div>
			) : data.data.length > 0 ? (
				data.data.map((servers) => {
					const {
						_id,
						profile_image_url,
						name,
						members,
						banner_image_url,
						ownedby,
						description,
						channels,
					} = servers;

					return (
						<ServerCard
							key={_id}
							_id={_id}
							name={name}
							ownedby={ownedby}
							description={description}
							// online={online}
							channels={channels}
							members={members}
							profile_image_url={profile_image_url}
							banner_image_url={banner_image_url}
						/>
					);
				})
			) : (
				<div className="text-center">
					<div className="grid gap-2 justify-center pt-1 relative text-center">
						<span className="flex-wrap flex text-nowrap items-center justify-center gap-1">
							There are no servers yet
						</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default Discover;
