import { scaleLinear } from "d3-scale";
import { useMemo } from "react";

export default function Legend({ min, max }) {
	const gradientId = "legend-gradient";

	// Create a color scale that matches the map
	const colorScale = useMemo(() => {
		return scaleLinear().domain([min, max]).range(["#cce5ff", "#003366"]);
	}, [min, max]);

	return (
		<div className="mt-6">
			<div className="text-sm text-gray-600 mb-1">Crude Mortality Rate (per 100,000)</div>
			<svg width={300} height={40}>
				<defs>
					<linearGradient id={gradientId} x1="0%" x2="100%" y1="0%" y2="0%">
						<stop offset="0%" stopColor={colorScale(min)} />
						<stop offset="100%" stopColor={colorScale(max)} />
					</linearGradient>
				</defs>
				<rect x={0} y={10} width={300} height={20} fill={`url(#${gradientId})`} />
				<text x={0} y={38} fontSize={12} fill="#333">
					{min}
				</text>
				<text x={300} y={38} textAnchor="end" fontSize={12} fill="#333">
					{max}
				</text>
			</svg>
		</div>
	);
}
