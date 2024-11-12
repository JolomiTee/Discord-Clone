import GeneralSettings from "@/components/profile/GeneralSettings";
import Others from "@/components/profile/Others";
import PersonalInfo from "@/components/profile/PersonalInfo";
import RediscordPro from "@/components/profile/RediscordPro";

const Profile = () => {
	return (
		<div className="theme_container w-full h-full relative overflow-hidden scrollbar-hidden">
			<div className="fixed top-0 w-full h-full z-10 bg-onyx/[98%]" />

			<div className="text-white z-20 relative h-full w-full grid gap-5">
				<SettingsSection
					title="Personal Information"
					style="bg-gradient-to-r from-discord-blue/50"
				>
					<PersonalInfo />
				</SettingsSection>

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

				<SettingsSection
					title="Others"
					style="bg-gradient-to-r from-discord-blue/50"
				>
					<Others />
				</SettingsSection>
			</div>
		</div>
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
				className={`py-3 px-3 text-lg rounded-[6px] via-gray-500 to-transparent font-semibold ${style}`}
			>
				<h1>{title}</h1>
			</div>

			<div className="p-3">{children}</div>
		</section>
	);
};
