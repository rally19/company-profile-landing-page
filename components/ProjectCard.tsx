import { Project } from '@/lib/api/types';
import { motion } from 'motion/react';
import { Calendar, User, CheckCircle2, Clock } from 'lucide-react';

interface ProjectCardProps {
    project: Project;
    index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    const isCompleted = project.status === 'completed';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-zinc-900 border border-white/5 rounded-xl overflow-hidden hover:border-blue-500/30 transition-all flex flex-col h-full"
        >
            <div className={`h-2 w-full ${isCompleted ? 'bg-green-500' : 'bg-blue-500'}`} />

            <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">{project.name}</h3>
                        <p className="text-sm text-blue-400 font-medium">{project.client}</p>
                    </div>
                    <span className={`flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-semibold border ${isCompleted
                            ? 'bg-green-500/10 text-green-400 border-green-500/20'
                            : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                        }`}>
                        {isCompleted ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                        <span>{isCompleted ? 'Completed' : 'Ongoing'}</span>
                    </span>
                </div>

                <p className="text-gray-400 text-sm mb-6 flex-grow">
                    {project.description}
                </p>

                <div className="border-t border-white/5 pt-4 space-y-3">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center">
                            <Calendar size={14} className="mr-2" />
                            <span>{project.startDate} {project.endDate ? ` - ${project.endDate}` : ''}</span>
                        </div>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                        <div className="flex items-center">
                            <User size={14} className="mr-2" />
                            <span className="text-gray-400">PIC: {project.pic}</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
