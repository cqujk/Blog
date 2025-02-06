'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// 导航栏项配置
const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
];

// 常量配置
const EDGE_THRESHOLD = 50; // 距离边缘的阈值
const DEFAULT_WIDTH = 300; // 正常宽度
const DEFAULT_HEIGHT = 100; // 正常高度
const COLLAPSED_WIDTH = 80; // 收缩后的宽度
const COLLAPSED_HEIGHT = 50; // 收缩后的高度
// 背景图片路径，假设展开和收缩状态图片分别为 expanded-bg.jpg 和 collapsed-bg.jpg
const EXPANDED_BACKGROUND_IMAGE = 'url(/asset/image/background/light.jpg)';
const COLLAPSED_BACKGROUND_IMAGE = 'url(/asset/image/background/dark.jpg)';
// 在组件文件中添加生成随机颜色的函数
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
export default function Navbar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [dragConstraints, setDragConstraints] = useState({
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    });
    const x = useMotionValue(0); // 用于跟踪导航栏的 X 轴位置
    const y = useMotionValue(0); // 用于跟踪导航栏的 Y 轴位置
    // 动态调整宽度和高度
    const width = useTransform(x, () => (isCollapsed ? COLLAPSED_WIDTH : DEFAULT_WIDTH));
    const height = useTransform(y, () => (isCollapsed ? COLLAPSED_HEIGHT : DEFAULT_HEIGHT));
    // 监听窗口大小变化，动态更新约束范围
    useEffect(() => {
        const updateConstraints = () => {
            setDragConstraints({
                top: 0,
                left: 0,
                right: window.innerWidth - COLLAPSED_WIDTH,
                bottom: window.innerHeight - DEFAULT_HEIGHT,
            });
        };
        updateConstraints();
        window.addEventListener('resize', updateConstraints);
        return () => window.removeEventListener('resize', updateConstraints);
    }, [isCollapsed]);
    // 监听 X 轴和 Y 轴位置变化，判断是否靠近边缘
    useEffect(() => {
        const unsubscribeX = x.onChange((value) => {
            if (value < EDGE_THRESHOLD || value > window.innerWidth - DEFAULT_WIDTH - EDGE_THRESHOLD) {
                setIsCollapsed(true); // 靠近左右边缘时收缩
            } else {
                setIsCollapsed(false);
            }
        });
        // const unsubscribeY = y.onChange((value) => {
        //     if (value < EDGE_THRESHOLD) {
        //         setIsCollapsed(true); // 靠近上边缘时收缩
        //     } else {
        //         setIsCollapsed(false); // 远离上边缘时展开
        //     }
        // });
        return () => {
            unsubscribeX();
           // unsubscribeY();
        };
    }, [x]);

    // 根据状态设置背景图片和样式
    const backgroundStyle = {
        backgroundImage: isCollapsed ? COLLAPSED_BACKGROUND_IMAGE : EXPANDED_BACKGROUND_IMAGE,
        backgroundSize: isCollapsed ? 'cover' : 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };
    // 生成标题组件
    const renderTitle = () => {
        return (
            <a href="/">
                {Array.from("Jia.Ke").map((char, index) => (
                    <span
                        key={index}
                        className="rainbow-char"
                        style={{
                            animationDelay: `${index * 0.2}s` // 根据字符位置设置动画延迟
                        }}
                    >
                        {char}
                    </span>
                ))}
            </a>
        );
    };

    // 生成导航项组件
    const renderNavItems = () => {
        return (
            <div style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.path}
                        className="text-white hover:text-primary transition-colors"
                    >
                        {item.name}
                    </a>
                ))}
            </div>
        );
    };
    return (
        <motion.nav
            initial={{y: -100}}
            animate={{y: 0}}
            className="fixed top-4 left-4 right-4 bg-white/90 backdrop-blur-lg rounded-lg shadow-lg z-50 cursor-move  flex justify-center items-center"
            style={{
                x: x,
                y: y,
                width: width,
                height: height,
                ...backgroundStyle,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}// 动态调整宽度和高度
            drag
            dragConstraints={dragConstraints} // 使用动态设置的 dragConstraints
            dragElastic={0.1} // 拖动弹性
            whileHover={{scale: 1.02}} // 悬浮放大
            whileTap={{scale: 0.98}} // 点击缩小
        >

    {isCollapsed ? renderTitle() : renderNavItems()}

        </motion.nav>
    );
}