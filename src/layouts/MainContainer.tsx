import React from "react";
interface Props {
	children: React.ReactElement;
}
const MainContainer = ({ children }: Props) => {
	return (
		<section className="relative flex flex-col justify-between w-full bg-charcoal flex-1 overflow-auto scrollbar-hidden">
			{children}
		</section>
	);
};

export default MainContainer;
