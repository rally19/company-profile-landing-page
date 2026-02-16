'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export function HeroSection() {
    return (
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Gradient / Effect */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-black to-purple-900/20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-white">
                        Transparent Data
                    </span>
                    <br />
                    For A Better Future.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto mb-10"
                >
                    Access real-time insights into our company's growth, projects, and people.
                    We believe in openness and accountability.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="/projects"
                        className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
                    >
                        View Projects
                    </Link>
                    <Link
                        href="/employees"
                        className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
                    >
                        Meet the Team
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
