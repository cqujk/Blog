// components/ui/AnimatedBackground.tsx
'use client';

import { useEffect, useCallback, useState } from 'react';
import {keyframes} from "framer-motion";

export default function AnimatedBackground() {
    // 鼠标位置状态
    const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
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
        // 动态位置计算
        const offsetX = Math.random() * 100 - 50;
        const offsetY = Math.random() * 100 - 50;
        const validX = mousePos.x > 0 ? mousePos.x + offsetX : Math.random() * window.innerWidth;
        const validY = mousePos.y > 0 ? mousePos.y + offsetY : Math.random() * window.innerHeight;
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
        // // 粒子样式
        // particle.style.cssText = `
        //   ${particle.style.cssText}
        //   /* 复用CSS类 */
        //   @apply particle;
        //   /* 动态属性 */
        //   left: ${validX}px;
        //   top: ${validY}px;
        //   animation: particleMove ${duration}s linear infinite;
        //   /* 颜色相关保持动态 */
        //   background: radial-gradient(
        //     circle at 50% 50%,
        //     hsla(${baseHue}, 95%, 70%, 0.9) 0%,
        //     hsla(${baseHue + hueVariation}, 85%, 60%, 0.6) 70%,
        //     transparent 100%
        //   );
        //   box-shadow: 0 0 15px hsla(${baseHue}, 100%, 50%, 0.3);
        // `;
        // 4. 添加到DOM
        document.body.appendChild(particle);
        // 5. 自动清理
        particle.addEventListener('animationend', () => {
            particle.remove();
        });
    }, [mousePos.x, mousePos.y]);
    // 鼠标跟踪
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    // 粒子生成控制器
    useEffect(() => {
        let animationFrame: number;
        let lastTime = 0;
        const baseInterval = 50;

        const animate = (timestamp: number) => {
            const isMobile = window.innerWidth < 768;
            const actualInterval = isMobile ? 100 : baseInterval;

            if (timestamp - lastTime > actualInterval) {
                createParticle();
                lastTime = timestamp;
            }

            animationFrame = requestAnimationFrame(animate);
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [createParticle]);


    return null;
}

