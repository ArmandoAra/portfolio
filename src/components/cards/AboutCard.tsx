import ScrambleText from "../textAnimation/scrambleText";


interface AboutCardProps {
    image: string;
    description: string;
    position: string;
}

export function AboutCard({ image, description, position }: AboutCardProps) {
    return (
        <div className={`
                                         flex flex-col md:flex-row items-center justify-center md:w-3/4 lg:w-2/3 gap-7 md:gap-14 my-4 bg-orange-500/8 p-6 rounded-2xl
                                          ${position === "right" ? "md:flex-row" : "md:flex-row-reverse"}
                 `}>
            <div className="md:w-5/12">
                <p className="text-slate-200 mb-6 text-center md:text-justify text-lg">
                    <ScrambleText text={description} />
                </p>
            </div>

            <div className="md:w-5/12 max-w-sm">
                <img className="rounded-md border-none" src={image} alt="Certificate Udemy" width={500} height={300} />
            </div>

        </div>

    )
}