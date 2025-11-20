import { motion, useInView } from 'framer-motion'
import { useRef } from 'react';

const techs = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Flow', 'Vite', 'Zustand', 'Figma', 'Cloudinary', 'Prisma', 'Docker', 'Y otras...'];
interface PhaseShowcase {
    title: string;
    description: string;
    icon: string;
    color: string;
}

function TechnologiesUsed() {
    return (
        <section className="py-16 px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Tecnologías Usadas</h2>
            <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
                {techs.map((tech, i) => (
                    <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="px-4 py-2 bg-green-100 text-green-800 rounded-full"
                    >
                        {tech}
                    </motion.span>
                ))}
            </div>
        </section>
    )
}

const phases: PhaseShowcase[] = [
    {
        title: "1. Ideación",
        description: "Identificación del problema: dificultad para visualizar relaciones familiares extensas de manera clara y automática.",
        icon: "💡",
        color: "from-yellow-400 to-orange-500"
    },
    {
        title: "2. Brainstorming",
        description: "Definición de características clave: cálculo automático de relaciones, visualización en nodos, almacenamiento local offline-first.",
        icon: "🧠",
        color: "from-purple-400 to-pink-500"
    },
    {
        title: "3. Maquetación",
        description: "Diseño de wireframes y flujos de usuario, definiendo la arquitectura de información y patrones de interacción.",
        icon: "📐",
        color: "from-blue-400 to-cyan-500"
    },
    {
        title: "4. Prototipo",
        description: "Desarrollo de mockups interactivos en Figma, validación de UX/UI con usuarios potenciales y refinamiento de diseño.",
        icon: "🎨",
        color: "from-green-400 to-teal-500"
    },
    {
        title: "5. Desarrollo",
        description: "Implementación con Next.js 15, TypeScript, IndexedDB (Dexie), algoritmos de cálculo de relaciones y visualización con nodos.",
        icon: "⚙️",
        color: "from-indigo-400 to-purple-500"
    },
    {
        title: "6. Testing & Deploy",
        description: "Pruebas de integración, optimización de performance, implementación de PWA para uso offline y despliegue en producción.",
        icon: "🚀",
        color: "from-pink-400 to-rose-500"
    }
];

const PhaseCard = ({ phase, index }: { phase: PhaseShowcase; index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all hover:shadow-xl hover:shadow-purple-500/10"
        >
            <div className={`text-5xl mb-4 bg-gradient-to-r ${phase.color} w-16 h-16 rounded-xl flex items-center justify-center`}>
                {phase.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
            <p className="text-gray-400 leading-relaxed">{phase.description}</p>
        </motion.div>
    );
};

export default function DevelopmentProcess() {
    return (
        <section className="py-20 px-4 md:px-8 bg-slate-900/50">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-16 text-center"
                >
                    Proceso de Desarrollo
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {phases.map((phase, index) => (
                        <PhaseCard key={index} phase={phase} index={index} />
                    ))}
                </div>
            </div>
            <TechnologiesUsed />
        </section>
    );
};

