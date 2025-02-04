import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center pt-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left"
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6">
                        Frontend Developer &<br />
                        <span className="text-primary">UI Designer</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                        Building beautiful and functional web experiences with modern
                        technologies.
                    </p>
                    <div className="flex gap-4 justify-center md:justify-start">
                        <a
                            href="#contact"
                            className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                        >
                            Get in touch
                        </a>
                        <a
                            href="#projects"
                            className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/10 transition-colors"
                        >
                            View work
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}