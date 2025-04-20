import { useEffect, useState } from "react";
import USMap from "@/components/USMap";

export default function Home() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/data")
			.then((res) => res.json())
			.then(setData);
	}, []);

	return (
		<main className="min-h-screen bg-white text-gray-800 font-sans p-8">
			<div className="max-w-5xl mx-auto">
				<h1 className="text-2xl mb-4 border-b border-gray-300 pb-2">
					Suffering Index Lite
				</h1>
				<USMap data={data} />
			</div>
		</main>
	);
}