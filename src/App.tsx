import Sidebar from "./components/Sidebar";
import Sidelist from "./components/Sidelist";

function App() {
	return (
		<div className="flex w-screen h-screen">
			<Sidebar />
			<Sidelist />

			<section className="flex w-full h-full items-center justify-center bg-charcoal font-open-sans overflow-hidden">
				<div>
					<img
						src="../wumpus.png"
						alt="Wumpus"
						className="max-w-[500px]"
					/>
					<p className="text-center text-[32px]">
						Wumpus is waiting for you to pick a chat.
					</p>
				</div>
			</section>
		</div>
	);
}

export default App;
