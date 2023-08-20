import Image from "next/image";

interface EmptyProps {
    label: string;
}

const Empty = ({label}: EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
        <div>
            <Image alt="Empty" src="/empty.png" width={300} height={300} />
        </div>
        <div className="text-muted-foreground text-sm text-center">
            {label}
        </div>
    </div>
  )
}

export default Empty