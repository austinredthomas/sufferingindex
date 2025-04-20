import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
	return (

        <div className="min-h-screen flex flex-col bg-white text-gray-800 font-sans">
            <Navbar />
            <main className="flex-grow px-6 py-16">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl font-bold mb-4">About Suffering Index Lite</h1>

                    <p className="mb-4 leading-relaxed text-gray-700">
                        This project visualizes crude mortality rates due to homicide in the United States using 2023 data from the CDC WONDER database. Each state is shaded according to its crude rate, offering a quick snapshot of disparities across regions.
                    </p>

                    <p className="mb-4 leading-relaxed text-gray-700">
                        It's meant to inspire awareness and reflection - turning public health data into something personal, legible, and interactive. Built with a Flask backend and a Next.js frontend using React, d3, and Tailwind CSS.
                    </p>

                    <p className="mb-8 leading-relaxed text-gray-700">
                        Created by{" "}
                        <a
                            href="https://github.com/austinredthomas"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline"
                        >
                            Austin Thomas
                        </a>
                        .
                    </p>

                    <Link
                        href="/"
                        className="text-sm text-blue-500 hover:underline transition-colors duration-150"
                    >
                        ← Back to map
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
	);
}
