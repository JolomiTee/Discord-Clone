const Wumpus = () => {
	return (
		<div className="w-full h-full flex flex-col items-center justify-center">
			<div className="max-w-[500px]">
				<img src="/wumpus.png" alt="Wumpus" className="mx-auto w-auto" />
			</div>
			<p className="text-center text-[16px] text-white font-semibold">
				Wumpus is waiting for you to pick a chat.
			</p>
		</div>
	);
};

export default Wumpus;
