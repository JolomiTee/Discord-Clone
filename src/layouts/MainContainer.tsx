import React from "react";
interface Props {
	children: React.ReactElement;
}
const MainContainer = ({ children }: Props) => {
	return (
		<section className="p-3 md:p-4 lg:p-5 relative flex flex-col gap-[30px] justify-between w-full bg-charcoal flex-1 overflow-auto scrollbar-hidden">
			{children}
		</section>
	);
};

export default MainContainer;