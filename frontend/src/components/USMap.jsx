import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleLinear } from "d3-scale";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

export default function USMap({ data }) {
	// Build lookup: state -> rate (skip unreliable)
	const rateByState = {};
	data.forEach((item) => {
		const rate = item["Crude Rate"];
		if (typeof rate === "number") {
			rateByState[item.State] = rate;
		}
	});

	// Extract valid rates
	const rates = Object.values(rateByState);
	const colorScale = scaleLinear()
		.domain([Math.min(...rates), Math.max(...rates)])
		.range(["#cce5ff", "#003366"]);

	return (
		<div className="bg-white text-gray-800 p-4 rounded shadow">
			<ComposableMap projection="geoAlbersUsa" width={980} height={600}>
				<Geographies geography={geoUrl}>
					{({ geographies }) =>
						geographies.map((geo) => {
							const stateName = geo.properties.name;
							const rate = rateByState[stateName];

                            // Debug output
                            console.log("Matching rate for", geo.properties.name, "→", rate);

							const fill = typeof rate === "number" ? colorScale(rate) : "#eeeeee";
							return (
								<Geography
									key={geo.rsmKey}
									geography={geo}
									style={{
										default: {
											fill,
											stroke: "#999",
											strokeWidth: 0.5,
											outline: "none",
										},
										hover: {
											fill: "#ffcc00",
											outline: "none",
										},
										pressed: {
											fill: "#ffaa00",
											outline: "none",
										},
									}}
								/>
							);
						})
					}
				</Geographies>
			</ComposableMap>
		</div>
	);
}
