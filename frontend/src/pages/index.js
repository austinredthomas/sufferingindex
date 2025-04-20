import { useEffect, useState } from "react";

export default function Home() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/data")
			.then((res) => res.json())
			.then((json) => setData(json));
	}, []);

	return (
		<main className="p-8 font-sans">
			<h1 className="text-2xl font-bold mb-4">Suffering Index Lite</h1>
			<ul className="space-y-2">
				{data.map((item) => (
					<li key={item.State}>
						{item.State}: {item["Crude Rate"]} deaths per 100,000
					</li>
				))}
			</ul>
		</main>
	);
}