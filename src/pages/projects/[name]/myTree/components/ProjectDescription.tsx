import { motion, useInView } from 'framer-motion'
import { useRef } from 'react';

export default function ProjectDescription() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-10 px-4 md:px-8 max-w-6xl mx-auto ">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                    Sobre el Proyecto
                </h2>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                        FamilyTree es una aplicación web innovadora diseñada para simplificar la visualización
                        y gestión de árboles genealógicos. Permite a los usuarios crear conexiones familiares
                        de manera intuitiva, agregando padres e hijos de forma directa.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                        El sistema calcula automáticamente todas las relaciones consanguíneas, identificando
                        tíos, sobrinos, abuelos, primos y demás parentescos sin que el usuario tenga que
                        especificarlos manualmente.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};