'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import companyData from '@/company.json';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Employees', href: '/employees' },
    { name: 'Projects', href: '/projects' },
];

export function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 inset-x-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg group-hover:scale-105 transition-transform">
                            {companyData.name[0]}
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            {companyData.name}
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "relative text-sm font-medium transition-colors hover:text-white",
                                        isActive ? "text-white" : "text-gray-400"
                                    )}
                                >
                                    {item.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-blue-500"
                                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Placeholder for Dashboard Login if needed, or just a generic CTA */}
                        <Link href="https://wicked-katleen-companyuhuy-cda70a58.koyeb.app/" className="px-4 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors border border-white/5">
                            Login
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-400 hover:text-white p-2"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden bg-zinc-900 border-b border-white/10"
                >
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                    "block px-3 py-2 rounded-md text-base font-medium",
                                    pathname === item.href
                                        ? "bg-white/10 text-white"
                                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="#"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-2 mt-4 text-center rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700"
                        >
                            Login
                        </Link>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
