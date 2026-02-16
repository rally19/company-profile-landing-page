'use client';

import { motion } from 'motion/react';

export function CompanyProfile() {
    return (
        <section className="py-24 bg-black relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">About CorpData</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            CorpData is a leading technology firm dedicated to solving complex problems through innovative software solutions.
                            Founded in 2020, we have grown from a small startup to a global team of passionate experts.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Our culture is built on transparency, continuous learning, and a relentless drive for excellence.
                            We open our data to the public because we believe trust is earned through visibility.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 gap-8"
                    >
                        <div className="p-8 rounded-2xl bg-zinc-900 border border-white/10 hover:border-blue-500/50 transition-colors">
                            <h3 className="text-xl font-bold text-blue-400 mb-3">Our Vision</h3>
                            <p className="text-gray-400">
                                To become the world's most trusted and transparent technology partner, driving global innovation.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-zinc-900 border border-white/10 hover:border-purple-500/50 transition-colors">
                            <h3 className="text-xl font-bold text-purple-400 mb-3">Our Mission</h3>
                            <p className="text-gray-400">
                                To deliver high-quality, scalable digital products while maintaining an open ecosystem for our employees, clients, and the community.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
