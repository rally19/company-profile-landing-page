import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                                C
                            </div>
                            <span className="text-xl font-bold text-white">CorpData</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Empowering transparency and innovation through open data access.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-blue-400">About Us</Link></li>
                            <li><Link href="#" className="hover:text-blue-400">Careers</Link></li>
                            <li><Link href="#" className="hover:text-blue-400">Press</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-blue-400">Blog</Link></li>
                            <li><Link href="#" className="hover:text-blue-400">Contact</Link></li>
                            <li><Link href="#" className="hover:text-blue-400">Support</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Social</h3>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Github size={20} />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} CorpData Inc. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-gray-300">Privacy Policy</Link>
                        <Link href="#" className="hover:text-gray-300">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
