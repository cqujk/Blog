// components/ui/AnimatedBackground.tsx
'use client';

import { useEffect, useCallback, useState } from 'react';
import {keyframes} from "framer-motion";

export default function AnimatedBackground() {
    // 粒子生成逻辑
    const createParticle = useCallback(() => {
        // 1. 创建粒子元素
        const particle = document.createElement('div');
        // 2. 随机属性设置
        const size = Math.random() * 4 + 2;       // 粒子大小：2-6px
        const duration = Math.random()  + 2;   // 动画时长：0-3秒
        //const startX = Math.random() * 100;       // 水平起始位置：0-100%
        // 随机颜色生成
        const baseHue = Math.random() * 360;
        const hueVariation = 30;
        const validX = Math.random() * window.innerWidth;
        const validY = Math.random() * window.innerHeight;
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
        // will-change: transform, opacity; /* 启用 GPU 加速 */
        // 4. 添加到DOM
        document.body.appendChild(particle);
        // 5. 自动清理
        particle.addEventListener('animationend', () => {
            particle.remove();
        });
    }, []);

// 粒子生成控制器 - 使用 React useEffect 管理粒子动画生命周期
    useEffect(() => {
        // 动画控制变量
        let animationFrame: number;  // 存储 requestAnimationFrame 返回的ID
        let lastTime = 0;            // 记录上次生成粒子的时间戳
        const isMobile = window.innerWidth < 768;
        const baseInterval = isMobile ? 350 : 300;
// 动画循环核心逻辑
        const animate = (timestamp: number) => {
            const currentParticles = document.querySelectorAll('.particle').length;
            // 动态调整生成间隔
            const dynamicInterval = baseInterval + (currentParticles * 15); // 粒子越多，间隔越长
            // 时间间隔检查：通过时间差控制粒子生成频率
            if (timestamp - lastTime > dynamicInterval) {
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

