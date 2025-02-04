'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const x = useMotionValue(0); // 用于跟踪导航栏的 X 轴位置
    const width = useTransform(x, (value) => {
        // 根据 X 轴位置动态调整宽度
        const edgeThreshold = 50; // 距离边缘的阈值
        if (value < edgeThreshold || value > window.innerWidth - 300 - edgeThreshold) {
            return 80; // 收缩后的宽度
        }
        return 300; // 正常宽度
    });
    useEffect(() => {
        // 监听 X 轴位置变化
        const unsubscribe = x.onChange((value) => {
            const edgeThreshold = 50;
            if (value < edgeThreshold || value > window.innerWidth - 300 - edgeThreshold) {
                setIsCollapsed(true);
            } else {
                setIsCollapsed(false);
            }
        });
        return () => unsubscribe();
    }, [x]);
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-4 left-4 right-4 bg-white/90 backdrop-blur-lg rounded-lg shadow-lg z-50 cursor-move"
            style={{ x, width }}
            drag
            dragConstraints={{
                top: 0,
                left: 0,
                right: window.innerWidth - 300, // 限制拖动范围
                bottom: window.innerHeight - 100,
            }}
            dragElastic={0.1} // 拖动弹性
            whileHover={{ scale: 1.02 }} // 悬浮放大
            whileTap={{ scale: 0.98 }} // 点击缩小
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo 区域 */}
                    <a href="/" className="text-2xl font-bold text-dark">
                        {isCollapsed ? 'JK' : 'Jia.Ke'}
                    </a>

                    {/* Desktop Menu */}
                    {!isCollapsed && (
                        <div className="hidden md:flex space-x-8 ml-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.path}
                                    className="text-dark hover:text-primary transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </motion.nav>
    );
}