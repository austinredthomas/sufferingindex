import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="bg-white border-b mb-5 font-semibold tracking-wide">
			<div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
				<h1 className="text-xl font-semibold text-gray-800">
					Suffering Index Lite
				</h1>
				<Link href="/about" className="text-sm text-600 hover:text-blue-800 underline">
					About
				</Link>
			</div>
		</nav>
	);
}
