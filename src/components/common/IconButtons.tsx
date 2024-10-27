import { Button } from "../ui/button";
interface props {
	src: string;
	alt: string;
	sizes?: string;
	buttonStyles?: string;
	action?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const IconButtons = ({
	src,
	alt,
	sizes = "size-6",
	buttonStyles = "",
	action,
}: props) => {
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
