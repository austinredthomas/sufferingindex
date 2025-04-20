export default function Footer() {
	return (
		<footer className="mt-12 border-t pt-2 pb-2 text-sm text-gray-500 text-center">
			<p>
				Suffering Index Lite &mdash; Built by{" "}
                <a
                    href="https://github.com/austinredthomas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
                >
                Austin Thomas
                </a>{" "}
                with Flask, Next.js, and d3
			</p>
			<p className="mt-1 text-xs">
				Data source: CDC WONDER (2023)
			</p>
		</footer>
	);
}
