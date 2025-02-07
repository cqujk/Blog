'use client';
import { motion} from 'framer-motion';

export default function NotFound() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#1a1a1a",
            color: "#ffffff",
            fontSize: "2rem",
            fontWeight: "bold",
        }}>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Coming Soon
            </motion.div>
        </div>
    );
}