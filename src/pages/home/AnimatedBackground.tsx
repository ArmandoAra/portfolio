"use client"
import React, { useEffect, useRef } from "react";

const AnimatedBackground: React.FC = () => {
    const particlesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = particlesRef.current;
        if (!container) return;

        const numParticles = 20;
        const particles: HTMLSpanElement[] = [];

        for (let i = 0; i < numParticles; i++) {
            const particle = document.createElement("span");
            particle.classList.add("particle");
            const size = Math.random() * 8 + 4; // 4px - 12px
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 10}s`;
            particle.style.animationDuration = `${8 + Math.random() * 6}s`;
            container.appendChild(particle);
            particles.push(particle);
        }

        return () => {
            particles.forEach(p => p.remove());
        };
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden ">
            {/* Fondo oscuro */}
            <div className="absolute inset-0 bg-gray-900"></div>

            {/* Textura */}
            <div className="texture"></div>

            {/* Partículas */}
            <div className="particles" ref={particlesRef}></div>
        </div>
    );
};

export default AnimatedBackground;
