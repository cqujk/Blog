// components/ui/AnimatedBackground.tsx
'use client';

import { useEffect, useCallback, useState } from 'react';
import {keyframes} from "framer-motion";

export default function AnimatedBackground() {
    // // 鼠标位置状态
    // const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
    // 粒子生成逻辑
    const createParticle = useCallback(() => {
        // 1. 创建粒子元素
        const particle = document.createElement('div');
        // 2. 随机属性设置
        const size = Math.random() * 4 + 2;       // 粒子大小：2-6px
        const duration = Math.random() * 3 + 2;   // 动画时长：2-5秒
        //const startX = Math.random() * 100;       // 水平起始位置：0-100%
        // 随机颜色生成
        const baseHue = Math.random() * 360;
        const hueVariation = 30;
        const validX = Math.random() * window.innerWidth;
        const validY = Math.random() * window.innerHeight;
        // // 动态位置计算
        // const offsetX = Math.random() * 100 - 50;
        // const offsetY = Math.random() * 100 - 50;
        // const validX = mousePos.x > 0 ? mousePos.x + offsetX : Math.random() * window.innerWidth;
        // const validY = mousePos.y > 0 ? mousePos.y + offsetY : Math.random() * window.innerHeight;
        // 3. CSS样式定义
        // 应用 CSS 类 + 动态样式
        particle.className = 'particle';
        particle.style.cssText = `
      --hue: ${baseHue};
      --hue-var: ${hueVariation};
      left: ${validX}px;
      top: ${validY}px;
      width: ${size}px;
      height: ${size}px;
      animation: particle-move ${duration}s linear infinite;
    `;
        // 4. 添加到DOM
        document.body.appendChild(particle);
        // 5. 自动清理
        particle.addEventListener('animationend', () => {
            particle.remove();
        });
    }, []);
    // // 鼠标跟踪
    // useEffect(() => {
    //     const handleMouseMove = (e: MouseEvent) => {
    //         setMousePos({ x: e.clientX, y: e.clientY });
    //     };
    //     window.addEventListener('mousemove', handleMouseMove, { passive: true });
    //     return () => {
    //         window.removeEventListener('mousemove', handleMouseMove);
    //     };
    // }, []);
// 粒子生成控制器 - 使用 React useEffect 管理粒子动画生命周期
    useEffect(() => {
        // 动画控制变量
        let animationFrame: number;  // 存储 requestAnimationFrame 返回的ID
        let lastTime = 0;            // 记录上次生成粒子的时间戳
        const baseInterval = 50;     // 桌面端基础生成间隔（单位：毫秒）
// 动画循环核心逻辑
        const animate = (timestamp: number) => {
            // 设备检测：当屏幕宽度小于 768px 时视为移动端
            const isMobile = window.innerWidth < 768;
            // 动态间隔调整：移动端延长生成间隔以优化性能
            const actualInterval = isMobile ? 100 : baseInterval;
            // 时间间隔检查：通过时间差控制粒子生成频率
            if (timestamp - lastTime > actualInterval) {
                createParticle();  // 执行粒子创建逻辑
                lastTime = timestamp; // 更新最后生成时间
            }
            // 递归调用：维持动画循环
            animationFrame = requestAnimationFrame(animate);
        };
        // 启动动画循环
        animationFrame = requestAnimationFrame(animate);

        // 清理函数：组件卸载时取消动画帧请求
        return () => cancelAnimationFrame(animationFrame);
    }, [createParticle]);  // 依赖项：当 createParticle 变化时重新运行


    return null;
}

