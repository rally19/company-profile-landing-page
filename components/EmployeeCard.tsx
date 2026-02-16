import { Employee } from '@/lib/api/types';
import { motion } from 'motion/react';
import { Mail, Briefcase, User } from 'lucide-react';

interface EmployeeCardProps {
    employee: Employee;
    index: number;
}

export function EmployeeCard({ employee, index }: EmployeeCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-zinc-900/50 border border-white/5 rounded-xl p-6 hover:bg-zinc-800/50 hover:border-white/10 transition-all group"
        >
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center text-white font-bold text-lg overflow-hidden">
                        {employee.avatarUrl ? (
                            <img src={employee.avatarUrl} alt={employee.name} className="w-full h-full object-cover" />
                        ) : (
                            <User size={20} />
                        )}
                    </div>
                    <div>
                        <h3 className="text-white font-semibold text-lg group-hover:text-blue-400 transition-colors">{employee.name}</h3>
                        <p className="text-gray-400 text-sm">{employee.position}</p>
                    </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${employee.status === 'active'
                        ? 'bg-green-500/10 text-green-400 border-green-500/20'
                        : 'bg-red-500/10 text-red-400 border-red-500/20'
                    }`}>
                    {employee.status}
                </span>
            </div>

            <div className="space-y-2 mt-4">
                <div className="flex items-center text-sm text-gray-500">
                    <Briefcase size={16} className="mr-2 text-gray-600" />
                    {employee.department}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                    <Mail size={16} className="mr-2 text-gray-600" />
                    {employee.email}
                </div>
            </div>
        </motion.div>
    );
}
