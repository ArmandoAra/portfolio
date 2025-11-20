import { motion } from 'framer-motion'
import { SocialButton } from './Hero';

export default function Footer() {
    return (
        <footer className="py-12 px-4 border-t border-slate-800">
            <div className="max-w-6xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold mb-4">FamilyTree</h3>
                    <p className="text-gray-400 mb-6">
                        Conectando generaciones de forma visual e intuitiva
                    </p>
                    <div className="flex justify-center gap-6 mb-8">
                        <SocialButton icon="💻" label="GitHub" />
                    </div>
                    <p className="text-gray-500 text-sm">
                        © 2025 FamilyTree. Proyecto Personal.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

