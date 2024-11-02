import React from "react";

const MainContainer = ({ children }: { children: React.ReactElement }) => {
	return (
		<section className="p-6 relative flex flex-col gap-[30px] justify-between w-full pb-[50px] my-1.5 rounded">
			{children}
		</section>
	);
};

export default MainContainer;
