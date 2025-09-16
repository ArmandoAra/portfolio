
export default function NotFound404() {

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
            {/* Efecto glitch */}
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-[12rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 opacity-10 select-none">
                    404
                </h1>
            </div>

            {/* Luces de neón */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-30 animate-ping"></div>

            {/* Contenido */}
            <div className="relative z-10 text-center max-w-lg px-6 py-10 bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10">
                <h1 className="text-6xl md:text-7xl font-extrabold mb-4 tracking-widest">
                    Página no encontrada
                </h1>
                <p className="text-gray-300 mb-6">
                    Parece que has llegado a un rincón olvidado del sitio.
                    Es posible que el enlace esté roto o que la página haya sido movida.
                </p>
                <a
                    href="/"
                    className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-black font-semibold shadow-lg transform hover:scale-105 hover:shadow-pink-500/50 transition-all"
                >
                    Volver al inicio
                </a>
            </div>

            {/* Detalle decorativo extra */}
            <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-pink-400 rounded-full animate-ping"></div>
            <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
        </div>
    );
}
