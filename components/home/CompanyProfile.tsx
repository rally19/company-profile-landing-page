'use client';

import { motion } from 'motion/react';

import companyData from '@/company.json';

export function CompanyProfile() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">{companyData.about.title}</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            {companyData.about.description1}
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            {companyData.about.description2}
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
                            <h3 className="text-xl font-bold text-blue-400 mb-3">{companyData.vision.title}</h3>
                            <p className="text-gray-400">
                                {companyData.vision.description}
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-zinc-900 border border-white/10 hover:border-purple-500/50 transition-colors">
                            <h3 className="text-xl font-bold text-purple-400 mb-3">{companyData.mission.title}</h3>
                            <p className="text-gray-400">
                                {companyData.mission.description}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
