'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// 导航栏项配置
const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: 'https://github.com/cqujk' },
    { name: 'Blog', path: 'https://blog.csdn.net/m0_73553411?spm=1000.2115.3001.5343' },
    { name: 'Contact', path: '#contact' },
];

// 常量配置
const EDGE_THRESHOLD = 50; // 距离边缘的阈值
const DEFAULT_WIDTH = 400; // 正常宽度
const DEFAULT_HEIGHT = 100; // 正常高度
const COLLAPSED_WIDTH = 180; // 收缩后的宽度
const COLLAPSED_HEIGHT = 70; // 收缩后的高度
// 背景图片路径，假设展开和收缩状态图片分别为 expanded-bg.jpg 和 collapsed-bg.jpg
const EXPANDED_BACKGROUND_IMAGE = 'url(/asset/image/background/light.jpg)';
const COLLAPSED_BACKGROUND_IMAGE = 'url(/asset/image/background/dark.jpg)';
// 在组件文件中添加生成随机颜色的函数
// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }
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
            <a href="/" style={{
                textDecoration: 'none', // 去除链接下划线
                display: 'flex', // 使用 flex 布局
                justifyContent: 'center', // 水平居中
                alignItems: 'center', // 垂直居中
            }}>
                {Array.from("Jia.Ke").map((char, index) => (
                    <span
                        key={index}
                        className="rainbow-char"
                        style={{
                            animationDelay: `${index * 0.2}s`, // 根据字符位置设置动画延迟
                            fontSize: '2.5rem', // 增大字体大小
                            fontWeight: 'bold', // 加粗字体
                            fontFamily: "'Poppins', sans-serif",
                            textShadow: '0 2px 4px rgba(37, 99, 235, 0.2)', // 添加阴影
                            transition: 'all 0.3s ease'
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
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1rem 2rem',
                gap: '0.4rem',
                backdropFilter: 'blur(8px)',
                backgroundColor: 'rgba(240, 255, 250, 0.8)', // 浅青色半透明背景
                borderRadius: '12px',
                border: '1px solid rgba(173, 216, 230, 0.3)', // 浅蓝色边框
                boxShadow: '0 4px 6px rgba(173, 216, 230, 0.1)',
                margin: '0 auto',
                maxWidth: '800px',
                width: '90%'
            }}>
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.path}
                        style={{
                            textDecoration: 'none',
                            color: '#2c7a7b', // 深青色文字
                            fontWeight: '500',
                            fontSize: '1.1rem',
                            padding: '0.5rem 1rem',
                            borderRadius: '8px',
                            transition: 'all 0.3s ease',
                            position: 'relative',
                        }}
                        onMouseEnter={(e) => {
                            const target = e.currentTarget;
                            if (target) {
                                target.style.transform = 'translateY(-2px)';
                                target.style.boxShadow = '0 4px 8px rgba(79, 209, 197, 0.2)';
                                target.style.backgroundColor = 'rgba(79, 209, 197, 0.1)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            const target = e.currentTarget; // 使用 currentTarget 替代 target
                            if (target) {
                                target.style.transform = 'translateY(0)';
                                target.style.boxShadow = 'none';
                                target.style.backgroundColor = 'transparent';
                            }
                        }}
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
            className="fixed top-6 left-6 right-6 bg-white/180 backdrop-blur-lg rounded-lg shadow-lg z-50 cursor-move  flex justify-center items-center"
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