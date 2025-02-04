// components/sections/SkillsRadar.tsx
'use client';

import { motion } from 'framer-motion';

const skills = [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'Node.js', level: 75 },
    { name: 'GraphQL', level: 70 },
];

export default function SkillsRadar() {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white p-6 rounded-xl shadow-md"
                    >
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-lg font-medium text-dark">{skill.name}</span>
                            <span className="text-primary font-bold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1 }}
                                className="h-full bg-primary rounded-full"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}