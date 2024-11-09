import { serverSearchResults } from "@/data";
import { Link } from "react-router-dom";

const ServerSearch = () => {
	return (
		<div className="grid gap-3">
			{serverSearchResults.map((channel, i) => {
				return (
					<Link
						key={i}
						to={`@server/${String(i)}/@channel/${String(i)}`}
						className="flex justify-start items-center gap-2"
					>
						<img
							src={`/icons/${channel.type}.svg`}
							alt={channel.name}
							width={26}
							height={26}
						/>
						{channel.name}
					</Link>
				);
			})}
		</div>
	);
};

export default ServerSearch;
