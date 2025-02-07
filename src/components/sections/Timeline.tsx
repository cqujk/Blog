// components/ui/Timeline.tsx
import { motion } from 'framer-motion';

type TimelineItem = {
    time: string;
    title: string;
    institution: string;
    description: string;
};

export const Timeline = ({ items }: { items: TimelineItem[] }) => {
    const timelineStyle = {
        position: 'relative' as const,
        paddingLeft: '32px',
    };

    const lineStyle = {
        position: 'absolute' as const,
        left: '20px',
        top: 0,
        height: '100%',
        width: '2px',
        backgroundColor: '#e5e7eb',
        borderRadius: '9999px',
    };

    const dotStyle = {
        position: 'absolute' as const,
        left: '-6px',
        top: '4px',
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        backgroundColor: '#3b82f6',
        border: '3px solid #ffffff',
    };

    return (
        <div style={timelineStyle}>
            <div style={lineStyle} />

            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{
                        position: 'relative' as const,
                        paddingBottom: '32px',
                        paddingLeft: '48px',
                    }}
                >
                    <div style={dotStyle} />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <time style={{
                            fontSize: '0.875rem',
                            fontWeight: 500,
                            color: '#3b82f6',
                        }}>
                            {item.time}
                        </time>

                        <h3 style={{
                            fontSize: '1.125rem',
                            fontWeight: 600,
                            color: '#1f2937',
                        }}>
                            {item.title}
                        </h3>

                        <p style={{
                            color: '#4b5563',
                            fontWeight: 500,
                        }}>
                            {item.institution}
                        </p>

                        <p style={{
                            color: '#6b7280',
                            lineHeight: 1.5,
                        }}>
                            {item.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};