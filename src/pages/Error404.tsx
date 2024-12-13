import { Button } from "@/components/ui/button";
import { ArrowLeftFromLineIcon, ArrowLeftToLine } from "lucide-react";
import { Link } from "react-router-dom";

const Error404 = () => {
	return (
		<div className="wrap-error">
			<div className="d-flex align-items-center h-100">
				<div className="container">
					<div className="row">
						<div className="col-sm-8 offset-sm-2 text-center text-white">
							<h1 className="">
								<span>4</span>
								<span>0</span>
								<span>4</span>
							</h1>
							<h5 className="">Oops! Page not found</h5>
							<p className="mb-4">
								Wumpus could not find the page your looking for
							</p>
							<Button onClick={() => window.history.back()}>
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
