import { Button } from "./ui/button";

const IconButtons = ({
	src,
	alt,
	sizes,
	buttonStyles,
	action,
}: {
	src: string;
	alt: string;
	sizes?: string | "w-6 h-6";
	buttonStyles?: string;
	action?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
	return (
		<Button
			role="button"
			aria-label={alt}
			className={`bg-transparent shadow-none rounded-full ${buttonStyles}`}
			size={"icon"}
			onClick={action}
		>
			<img src={`/icons/${src}.svg`} alt={alt} className={sizes} />
		</Button>
	);
};

export default IconButtons;
