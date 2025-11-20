import { motion, useInView } from "framer-motion";
import { useRef } from "react";


interface FeaturesShowcase {
    title: string;
    description: string;
    image: string;
    gradient: string;
}

const features: FeaturesShowcase[] = [
    {
        title: "Página de Login",
        description: "Interfaz simple y elegante para acceder con una cuenta existente. Diseño minimalista que facilita el proceso de autenticación.",
        image: "🔐",
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        title: "Home sin Usuario",
        description: "Landing page inicial que presenta las opciones de login y registro para nuevos visitantes de forma clara y atractiva.",
        image: "🏠",
        gradient: "from-purple-500 to-pink-500"
    },
    {
        title: "Página de Registro",
        description: "Formulario intuitivo para crear una nueva cuenta. Proceso simplificado que guía al usuario paso a paso.",
        image: "📝",
        gradient: "from-green-500 to-teal-500"
    },
    {
        title: "Visualización Automática",
        description: "El sistema calcula y muestra automáticamente todas las relaciones familiares: tíos, primos, abuelos, sobrinos y más.",
        image: "🔄",
        gradient: "from-orange-500 to-red-500"
    },
    {
        title: "Vista de Nodos",
        description: "Representación visual interactiva del árbol familiar en forma de grafo, permitiendo una navegación intuitiva por las generaciones.",
        image: "🌳",
        gradient: "from-indigo-500 to-purple-500"
    },
    {
        title: "Gestión de Familia",
        description: "Agrega padres, hijos y visualiza la descendencia directa. El sistema conecta automáticamente todas las relaciones colaterales.",
        image: "👨‍👩‍👧‍👦",
        gradient: "from-pink-500 to-rose-500"
    }
];

function FeatureCard({ feature, index }: { feature: FeaturesShowcase; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-slate-600 overflow-hidden"
        >
            <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

            <div className={`text-6xl mb-4 bg-gradient-to-r ${feature.gradient} w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg`}>
                {feature.image}
            </div>

            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
            <p className="text-gray-400 leading-relaxed">{feature.description}</p>

            <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                className={`h-1 bg-gradient-to-r ${feature.gradient} rounded-full mt-6`}
            />
        </motion.div>
    );
};


// Incluir las Imagenes de como se ve la aplicarion (hacer la imagen en vertical y en horizontal)
//en los textos solo van las referencias al locales donde estan las traducciones
export default function FeaturesShowcase() {

    return (
        <section className="py-20 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-16 text-center"
                >
                    Características Principales
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

