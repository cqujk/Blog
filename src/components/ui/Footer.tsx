// components/ui/Footer.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    // GithubIcon,
    // LinkedInIcon,
    // TwitterIcon,
    EnvelopeIcon,
} from '@heroicons/react/24/outline';

const socialLinks = [
    // {
    //     name: 'GitHub',
    //     href: 'https://github.com/yourusername',
    //     icon: GithubIcon,
    // },
    // {
    //     name: 'LinkedIn',
    //     href: 'https://linkedin.com/in/yourprofile',
    //     icon: LinkedInIcon,
    // },
    // {
    //     name: 'Twitter',
    //     href: 'https://twitter.com/yourhandle',
    //     icon: TwitterIcon,
    // },
    {
        name: 'Email',
        href: 'mailto:your@email.com',
        icon: EnvelopeIcon,
    },
];

const footerLinks = [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-dark text-light py-12 mt-20"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
                    {/* Branding Section */}
                    <div className="space-y-4 max-w-sm">
                        <h3 className="text-2xl font-bold">
                            Jia<span className="text-primary">.</span>Ke
                        </h3>
                        <p className="text-gray-400">
                            Building digital experiences that combine creativity with technical
                            excellence.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="grid grid-cols-2 gap-8 md:w-1/3">
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                {footerLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-primary transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">Connect</h4>
                            <ul className="space-y-2">
                                {socialLinks.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors"
                                        >
                                            <link.icon className="h-5 w-5" />
                                            <span>{link.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-center">
                        &copy; {currentYear} John Doe. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        <Link
                            href="/privacy"
                            className="text-gray-500 hover:text-primary transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="text-gray-500 hover:text-primary transition-colors"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}