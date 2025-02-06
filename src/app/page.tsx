
//
'use client'; // 添加这行在文件最顶部

import { motion } from 'framer-motion';
import Image from "next/image";
import ProjectCard from "@/components/sections/ProjectCard";
import SkillsRadar from "@/components/sections/SkillsRader";
const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A fully functional e-commerce platform with payment integration.',
        image: '/vercel.svg',
        tags: ['React', 'Node.js', 'MongoDB'],
        link: 'https://example.com/project-1',
    },
    {
        title: 'Portfolio Website',
        description: 'A personal portfolio website showcasing projects and skills.',
        image: '/vercel.svg',
        tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
        link: 'https://example.com/project-2',
    },
    {
        title: 'Task Management App',
        description: 'A task management application with real-time collaboration.',
        //image: '@/asset/image/favicon.ico',
        image: '/vercel.svg',
        tags: ['Vue.js', 'Firebase', 'GraphQL'],
        link: 'https://example.com/project-3',
    },
];


export default function Home() {
    return (
        <main className="min-h-screen">
            {/*/!* Hero Section *!/*/}
            {/*<section className="relative pt-32 pb-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">*/}
            {/*    <div className="max-w-6xl mx-auto">*/}
            {/*        <div className="grid md:grid-cols-2 gap-16 items-center">*/}
            {/*            /!* 文字内容 *!/*/}
            {/*            <div className="space-y-8">*/}
            {/*                <motion.h1*/}
            {/*                    initial={{opacity: 0, y: 20}}*/}
            {/*                    animate={{opacity: 1, y: 0}}*/}
            {/*                    className="text-5xl md:text-6xl font-bold text-dark"*/}
            {/*                >*/}
            {/*                    Full Stack Developer*/}
            {/*                    <span className="block text-primary mt-4">John.Doe</span>*/}
            {/*                </motion.h1>*/}

            {/*                <p className="text-xl text-gray-600 leading-relaxed tracking-wide max-w-2xl">*/}
            {/*                    Building digital experiences that combine creativity with technical excellence.*/}
            {/*                </p>*/}
            {/*            </div>*/}

            {/*            /!* 装饰图形 *!/*/}
            {/*            <div*/}
            {/*                className="relative h-96 w-full bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl overflow-hidden">*/}
            {/*                <div*/}
            {/*                    className="absolute inset-0 pattern-dots pattern-primary-500 pattern-bg-transparent pattern-opacity-20 pattern-size-4"/>*/}
            {/*                <Image*/}
            {/*                    src="/vercel.svg"*/}
            {/*                    alt="John Doe"*/}
            {/*                    fill*/}
            {/*                    className="object-contain object-center"*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/*/!* 项目展示 Section *!/*/}
            {/*<section className="py-24 bg-white">*/}
            {/*    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">*/}
            {/*        <h2 className="text-3xl font-bold text-dark mb-12">Featured Projects</h2>*/}
            {/*        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">*/}
            {/*            {projects.map((project, index) => (*/}
            {/*                <ProjectCard*/}
            {/*                    key={index}*/}
            {/*                    title={project.title}*/}
            {/*                    description={project.description}*/}
            {/*                    image={project.image}*/}
            {/*                    tags={project.tags}*/}
            {/*                    link={project.link}*/}
            {/*                />*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/*/!* 技能展示 Section *!/*/}
            {/*<section className="py-24 bg-gray-50">*/}
            {/*    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">*/}
            {/*        <h2 className="text-3xl font-bold text-dark mb-12">Technical Skills</h2>*/}
            {/*        <SkillsRadar/>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </main>
    )
}
