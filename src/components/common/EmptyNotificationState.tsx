const EmptyState = ({ text }: { text: string }) => {
	return (
		<div className="w-full flex flex-col justify-center items-center gap-5 h-full">
			<img src="/no-inbox.svg" className="w-2/3 md:w-1/3" />
			<p>{text}</p>
		</div>
	);
};

export default EmptyState;
