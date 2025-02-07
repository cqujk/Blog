// components/ui/Card.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';

type LinkType = {
    href: string;
    label: string;
    download?: boolean;
};

type CardProps = {
    title: string;
    tags: string[];
    description: string;
    links?: LinkType[];
};

export const Card = ({ title, tags, description, links }: CardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const cardStyle = {
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        transform: isHovered ? 'translateY(-8px)' : 'none',
    };

    const tagStyle = {
        backgroundColor: '#bfdbfe',
        color: '#2563eb',
        padding: '4px 12px',
        borderRadius: '9999px',
        fontSize: '0.875rem',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={cardStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '8px' }}>
                {title}
            </h3>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
                {tags.map((tag) => (
                    <span key={tag} style={tagStyle}>
                        {tag}
                    </span>
                ))}
            </div>

            <p style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: '24px' }}>
                {description}
            </p>

            {links && (
                <div style={{
                    display: 'flex',
                    gap: '16px', // 增大间距
                    flexWrap: 'wrap'
                }}>
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            download={link.download}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 8,
                                padding: '8px 16px',
                                backgroundColor: '#f3f4f6',
                                borderRadius: 8,
                                textDecoration: 'none',
                                transition: 'background-color 0.2s'
                            }}
                        >
                            {/* 条件渲染图标 */}
                            {link.download && <span>📄</span>}
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </motion.div>
    );
};