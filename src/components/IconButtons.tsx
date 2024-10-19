import { Button } from "./ui/button";

const IconButtons = ({
	src,
	alt,
	sizes,
}: {
	src: string;
	alt: string;
	sizes?: string;
}) => {
	return (
		<Button
			aria-label={alt}
			className="bg-transparent shadow-none rounded-full"
			size={"icon"}
		>
			<img
				src={`/icons/${src}.svg`}
				alt={alt}
				className={sizes ? sizes : "w-6 h-6"}
			/>
		</Button>
	);
};

export default IconButtons;
