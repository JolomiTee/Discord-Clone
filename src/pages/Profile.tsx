import GeneralSettings from "@/components/profile/GeneralSettings";
import RediscordPro from "@/components/profile/RediscordPro";

const Profile = () => {
	return (
		<>
			<h1 className="text-md font-bold border-b border-b-charcoal/10 pb-4">
				Other Settings
			</h1>
			{/* <div className="fixed top-0 w-full h-full z-10 bg-onyx/[98%]" /> */}

			<div className="text-white z-20 relative h-full w-full grid gap-5">
				<SettingsSection
					title="Settings and Customization"
					style="bg-gradient-to-r from-discord-blue/50"
				>
					<GeneralSettings />
				</SettingsSection>

				<SettingsSection
					title="Rediscord Pro"
					style="bg-gradient-to-r from-discord-blue/50"
				>
					<RediscordPro />
				</SettingsSection>
			</div>
		</>
	);
};

export default Profile;

interface SettingsHeaderProps {
	children: React.ReactElement;
	title: string;
	style: string;
}
const SettingsSection = ({ children, title, style }: SettingsHeaderProps) => {
	return (
		<section>
			<div
				className={`py-3 text-lg rounded-[6px] via-gray-500 to-transparent font-semibold ${style}`}
			>
				<h1>{title}</h1>
			</div>

			<div className="">{children}</div>
		</section>
	);
};
