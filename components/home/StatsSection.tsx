'use client';

import { useQuery } from '@tanstack/react-query';
import { getCompanyStats } from '@/lib/api/services';
import { motion } from 'motion/react';

export function StatsSection() {
    const { data: stats, isLoading, error } = useQuery({
        queryKey: ['companyStats'],
        queryFn: getCompanyStats,
    });

    const statItems = [
        { label: 'Employees', value: stats?.totalEmployees, suffix: '+' },
        { label: 'Departments', value: stats?.totalDepartments, suffix: '' },
        { label: 'Active Projects', value: stats?.totalProjects, suffix: '' },
    ];

    return (
        <section className="py-20 border-t border-b border-white/10 bg-zinc-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {statItems.map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-6"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                {isLoading ? (
                                    <span className="animate-pulse bg-white/20 rounded h-12 w-24 inline-block align-middle" />
                                ) : error ? (
                                    <span className="text-red-500 text-lg">Error</span>
                                ) : (
                                    <span>{item.value}{item.suffix}</span>
                                )}
                            </div>
                            <div className="text-gray-500 font-medium uppercase tracking-wider text-sm">
                                {item.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
