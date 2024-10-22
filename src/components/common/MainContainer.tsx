import React from "react";

const MainContainer = ({ children }: { children: React.ReactElement }) => {
	return (
		<section className="p-6 relative flex flex-col gap-[30px] justify-between overflow-y-auto w-full scrollbar-hidden pb-[50px] my-1.5 rounded">
			{children}
		</section>
	);
};

export default MainContainer;
