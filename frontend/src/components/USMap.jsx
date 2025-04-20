import { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleLinear } from "d3-scale";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

export default function USMap({ data }) {
    const [tooltipContent, setTooltipContent] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    
    function handleMouseMove(evt) {
        setMousePos({ x: evt.clientX + 10, y: evt.clientY + 10 });
    }
    
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
                                    onMouseEnter={() => {
                                        if (typeof rate === "number") {
                                            setTooltipContent(`${stateName}: ${rate.toFixed(1)} deaths per 100,000`);
                                        } else {
                                            setTooltipContent(`${stateName}: Data unavailable`);
                                        }
                                    }}
                                    onMouseLeave={() => {
                                        setTooltipContent(null);
                                    }}
                                    onMouseMove={handleMouseMove}
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
            {tooltipContent && (
                <div
                    style={{
                        position: "fixed",
                        top: mousePos.y,
                        left: mousePos.x,
                        background: "white",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        padding: "6px 10px",
                        fontSize: "0.9rem",
                        boxShadow: "0 0 5px rgba(0,0,0,0.15)",
                        pointerEvents: "none",
                        whiteSpace: "nowrap",
                        zIndex: 10,
                    }}
                >
                    {tooltipContent}
                </div>
            )}
		</div>
	);
}
