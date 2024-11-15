import { ExternalLink, Heart, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const TnC = () => {
	return (
		<div className="container p-3">
			<h1 className="text-3xl mb-12">Rediscord Terms and Conditions</h1>

			<div className="text-center">
				<p>Just be yourself man, get outta here </p>
				<p className="flex justify-center items-center gap-3 py-4">
					<Heart className="text-red-700 fill-red-700" /> +{" "}
					<Lightbulb className="text-yellow-700 fill-yellow-700" />
				</p>
				<Link to={"/"} className="flex justify-center items-center gap-3">
					Go back home <ExternalLink className="inline rotate-[270deg]" />
				</Link>
			</div>
		</div>
	);
};

export default TnC;
