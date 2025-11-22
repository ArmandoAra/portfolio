import { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

interface FeatureImages {
    device: string[];
    images: string[];
}

export default function ResponsiveCarousel({ images }: { images: FeatureImages[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Aplanar todas las imágenes en un solo array
    const allImages = images.flatMap(item => item.images);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % allImages.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        const touch = e.touches[0];
        e.currentTarget.dataset.touchStart = touch.clientX.toString();
    };

    const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        const touchStart = parseFloat(e.currentTarget.dataset.touchStart || '0');
        const touchEnd = e.changedTouches[0].clientX;
        const diff = touchStart - touchEnd;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    };

    // Función para obtener el dispositivo de la imagen actual
    const getCurrentDevice = () => {
        let count = 0;
        for (const item of images) {
            for (let i = 0; i < item.images.length; i++) {
                if (count === currentIndex) {

                    return item.device[i];
                }
                count++;
            }
        }
        return '';
    };

    return (
        <div className="w-full ">
            {/* Carrusel */}
            <div className="relative ">
                <div
                    className="overflow-hidden md:overflow-visible rounded-lg"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                ><h3 className="text-center text-white mb-2">{getCurrentDevice()}</h3>
                    <div
                        className="flex transition-transform duration-300 ease-out "
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >

                        {allImages.map((image, index) => (
                            <div key={index} className="min-w-full">
                                <img
                                    src={image}
                                    alt={`${getCurrentDevice()} view ${index + 1}`}
                                    className="w-full h-[230px] object-contain hover:scale-200 hover:relative hover:-translate-y-20  transition-transform duration-300 hover:z-50 "
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Botones de navegación - Solo si hay más de una imagen */}
                {allImages.length > 1 && (
                    <>
                        <button
                            onClick={prevSlide}
                            className="absolute -left-5 -bottom-12 -translate-y-1/2  hover:bg-white p-2 rounded-full shadow-lg transition-all hover:text-slate-800! cursor-pointer bg-white/30"
                            aria-label="Anterior"
                        >
                            <FaAngleLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute -right-5 -bottom-12 -translate-y-1/2  hover:bg-white p-2 rounded-full shadow-lg transition-all hover:text-slate-800! cursor-pointer bg-white/30"
                            aria-label="Siguiente"
                        >
                            <FaAngleRight className="w-5 h-5" />
                        </button>
                    </>
                )}
            </div>

            {/* Indicadores - Solo si hay más de una imagen */}
            {allImages.length > 1 && (
                <div className="flex justify-center  gap-2 mt-3">
                    {allImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 rounded-full transition-all ${index === currentIndex
                                ? 'bg-blue-600 w-8'
                                : 'bg-gray-300 w-2'
                                }`}
                            aria-label={`Ir a imagen ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
