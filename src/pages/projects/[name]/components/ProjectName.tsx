
interface Props {
  text: string;
  fromColor: string;
  toColor: string;
}

export const ProjectName = ({ text, fromColor, toColor }: Props) => {
  return (
    <h1
      className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-${fromColor} to-${toColor} bg-clip-text text-transparent`}>
      {text}
    </h1>
  )
}

