import { Button } from "./ui/button";

const IconButtons = ({
	src,
	alt,
	sizes,
	buttonStyles,
}: {
	src: string;
	alt: string;
	sizes?: string;
	buttonStyles?: string
}) => {
	return (
		<Button
			aria-label={alt}
			className={`bg-transparent shadow-none rounded-full ${buttonStyles}`}
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
