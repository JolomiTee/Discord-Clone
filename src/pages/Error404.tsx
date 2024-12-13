import { Button } from "@/components/ui/button";
import { ArrowLeftFromLineIcon } from "lucide-react";

const Error404 = () => {
	return (
		<div className="wrap-error">
			<div className=" h-full flex items-center">
				<div className="container">
					<div className="row">
						<div className="col-sm-8 offset-sm-2 text-center text-white">
							<h1 className="">
								<span>4</span>
								<span>0</span>
								<span>4</span>
							</h1>
							<h5 className="">Oops! Page not found</h5>
							<p className="mb-4">Wumpus could not find that page</p>
							<Button
								onClick={() => window.history.back()}
								className="bg-discord-blue rounded"
							>
								<ArrowLeftFromLineIcon /> Go back
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Error404;
