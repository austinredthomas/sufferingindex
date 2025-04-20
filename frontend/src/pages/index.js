import { useEffect, useState } from "react";
import USMap from "@/components/USMap";
import Legend from "@/components/Legend";
import Footer from "@/components/Footer";

export default function Home() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/data")
			.then((res) => res.json())
			.then(setData);
	}, []);

	return (
		<div className="min-h-screen flex flex-col bg-white text-gray-800 font-sans">
			<main className="flex-grow p-8">
				<div className="max-w-5xl mx-auto">
					<h1 className="text-2xl mb-4 border-b border-gray-300 pb-2">
						Suffering Index Lite
					</h1>
					<USMap data={data} />
					{data.length > 0 && (
						<Legend
							min={Math.min(...data.map((d) =>
								typeof d["Crude Rate"] === "number" ? d["Crude Rate"] : Infinity
							))}
							max={Math.max(...data.map((d) =>
								typeof d["Crude Rate"] === "number" ? d["Crude Rate"] : -Infinity
							))}
						/>
					)}
				</div>
			</main>
			<Footer />
		</div>
	);
}
