'use client';

import { useQuery } from '@tanstack/react-query';
import { getEmployees } from '@/lib/api/services';
import { EmployeeCard } from '@/components/EmployeeCard';
import { motion } from 'motion/react';
import { Loader2 } from 'lucide-react';

import companyData from '@/company.json';

export default function EmployeesPage() {
    const { data: employees, isLoading, error } = useQuery({
        queryKey: ['employees'],
        queryFn: getEmployees,
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
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        {companyData.employeesPage.title}
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {companyData.employeesPage.description}
                    </p>
                </motion.div>

                {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <Loader2 className="animate-spin text-blue-500 w-12 h-12" />
                    </div>
                ) : error ? (
                    <div className="text-center text-red-500 py-12">
                        <p>Failed to load employees. Please try again later.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {employees?.map((employee, index) => (
                            <EmployeeCard key={employee.id} employee={employee} index={index} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
