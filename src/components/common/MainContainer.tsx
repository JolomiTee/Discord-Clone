import React from "react";

const MainContainer = ({ children }: { children: React.ReactElement }) => {
	return (
		<section className="p-6 relative flex flex-col gap-[30px] justify-between w-full pb-[50px] bg-charcoal flex-1 overflow scrollbar-hidden">
			{children}
		</section>
	);
};

export default MainContainer;
