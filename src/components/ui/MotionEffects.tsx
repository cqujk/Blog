'use client';

import { useEffect, useCallback } from 'react';

export default function MotionEffects() {
    // 光标火花生成器
    const emitCursorSpark = useCallback((x: number, y: number) => {
        const clusterSize = 5;
        const baseHue = Math.random() * 360;

        for(let i = 0; i < clusterSize; i++) {
            const spark = document.createElement('div');
            const angle = (i * 72) * Math.PI/180; // 五芒星分布
            const speed = Math.random() * 60 + 40;

            const size = Math.random() * 3 + 2;
            const lifeTime = Math.random() * 0.6 + 0.4;
            const dx = Math.cos(angle) * speed;
            const dy = Math.sin(angle) * speed;

            spark.className = 'cursor-spark';
            spark.style.cssText = `
                --hue: ${baseHue};
                --vector-x: ${dx}px;
                --vector-y: ${dy}px;
                left: ${x}px;
                top: ${y}px;
                width: ${size}px;
                height: ${size}px;
                animation: spark-emit ${lifeTime}s ease-out forwards;
            `;

            document.body.appendChild(spark);
            spark.addEventListener('animationend', () => spark.remove());
        }
    }, []);

    // 光标移动处理器   组件挂载 (Mount)
    useEffect(() => {
        let lastEmit = 0;
        const emissionInterval = 25;

        const handleCursorMove = (e: MouseEvent) => {
            if (Date.now() - lastEmit < emissionInterval) return;
            // 确认此处逻辑执行
           // console.log('Mouse moved!', e.clientX, e.clientY);
            emitCursorSpark(e.clientX, e.clientY);
            lastEmit = Date.now();
        };

        window.addEventListener('mousemove', handleCursorMove);
        return () => window.removeEventListener('mousemove', handleCursorMove);
    }, [emitCursorSpark]);

    return null;
}