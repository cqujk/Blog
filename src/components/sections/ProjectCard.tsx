import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
}

export default function ProjectCard({
                                        title,
                                        description,
                                        image,
                                        tags,
                                        link,
                                    }: ProjectCardProps) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
            <div className="relative h-48">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
              {tag}
            </span>
                    ))}
                </div>
                <a
                    href={link}
                    className="text-primary font-medium hover:text-primary/80"
                >
                    View Project →
                </a>
            </div>
        </motion.div>
    );
}