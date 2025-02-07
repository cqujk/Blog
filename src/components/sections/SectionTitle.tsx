// components/ui/SectionTitle.tsx
import { motion } from 'framer-motion';

export const SectionTitle = ({ title }: { title: string }) => {
    const titleStyle = {
        fontSize: '2.25rem',
        fontWeight: 700,
        color: '#1f2937',
    };

    const gradientStyle = {
        backgroundImage: 'linear-gradient(to right, #2563eb, #7c3aed)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
    };

    const underlineStyle = {
        height: '4px',
        width: '80px',
        background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
        borderRadius: '9999px',
        marginTop: '8px',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ marginBottom: '48px' }}
        >
            <h2 style={titleStyle}>
                <span style={gradientStyle}>{title}</span>
            </h2>
            <div style={underlineStyle} />
        </motion.div>
    );
};