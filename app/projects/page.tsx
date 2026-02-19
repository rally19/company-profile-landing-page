'use client';

import { useQuery } from '@tanstack/react-query';
import { getProjects } from '@/lib/api/services';
import { ProjectCard } from '@/components/ProjectCard';
import { motion } from 'motion/react';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Project } from '@/lib/api/types';

import companyData from '@/company.json';

export default function ProjectsPage() {
    const { data: projects, isLoading, error } = useQuery({
        queryKey: ['projects'],
        queryFn: getProjects,
    });

    const [filter, setFilter] = useState<'all' | 'planning' | 'ongoing' | 'completed'>('all');

    const filteredProjects = projects?.filter((project: Project) => {
        if (filter === 'all') return true;
        return project.status === filter;
    });

    return (
        <div className="min-h-screen py-20 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600">
                        {companyData.projectsPage.title}
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                        {companyData.projectsPage.description}
                    </p>

                    {/* Filter Tabs */}
                    <div className="flex justify-center space-x-2 bg-zinc-900/50 p-1.5 rounded-lg inline-flex border border-white/5">
                        {(['all', 'planning', 'ongoing', 'completed'] as const).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setFilter(tab)}
                                className={cn(
                                    "px-4 py-2 rounded-md text-sm font-medium transition-all capitalize",
                                    filter === tab
                                        ? "bg-white/10 text-white shadow-sm"
                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                )}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <Loader2 className="animate-spin text-blue-500 w-12 h-12" />
                    </div>
                ) : error ? (
                    <div className="text-center text-red-500 py-12">
                        <p>Failed to load projects. Please try again later.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects?.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                        {filteredProjects?.length === 0 && (
                            <div className="col-span-full text-center text-gray-500 py-12">
                                No projects found for this filter.
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
