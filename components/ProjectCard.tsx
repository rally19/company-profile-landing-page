import { Project } from '@/lib/api/types';
import { motion } from 'motion/react';
import { Calendar, User, CheckCircle2, Clock, MapPin } from 'lucide-react';

interface ProjectCardProps {
    project: Project;
    index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    const isCompleted = project.status === 'completed';
    const isPlanning = project.status === 'planning';

    let statusColor = 'bg-blue-500';
    let statusBadgeClass = 'bg-blue-500/10 text-blue-400 border-blue-500/20';
    let StatusIcon = Clock;
    let statusLabel = 'Ongoing';

    if (isCompleted) {
        statusColor = 'bg-green-500';
        statusBadgeClass = 'bg-green-500/10 text-green-400 border-green-500/20';
        StatusIcon = CheckCircle2;
        statusLabel = 'Completed';
    } else if (isPlanning) {
        statusColor = 'bg-amber-500';
        statusBadgeClass = 'bg-amber-500/10 text-amber-400 border-amber-500/20';
        StatusIcon = MapPin; // Using MapPin or similar for Planning/Roadmap
        statusLabel = 'Planning';
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-zinc-900 border border-white/5 rounded-xl overflow-hidden hover:border-blue-500/30 transition-all flex flex-col h-full"
        >
            <div className={`h-2 w-full ${statusColor}`} />

            <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">{project.name}</h3>
                        <p className="text-sm text-blue-400 font-medium">{project.client}</p>
                    </div>
                    <span className={`flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-semibold border ${statusBadgeClass}`}>
                        <StatusIcon size={12} />
                        <span>{statusLabel}</span>
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
