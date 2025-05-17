import { useEffect, useState } from "react";
import USMap from "@/components/USMap";
import Legend from "@/components/Legend";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('api/data')
			.then((res) => res.json())
			.then(setData)
			.catch((err) => console.error('fetch /data failed:', err));
	}, []);

	return (
		<div className="min-h-screen flex flex-col bg-white text-gray-800 font-sans">
			<Navbar />
			<main className="flex-grow p-8">
				<div className="max-w-5xl mx-auto">
					<p className="text-sm text-gray-600 mb-4 italic">
						Crude mortality rate by U.S. state, 2023 &mdash; <strong className="not-italic">Homicide deaths</strong>
					</p>
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
