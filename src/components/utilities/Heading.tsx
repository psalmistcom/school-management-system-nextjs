import Image from 'next/image'

const Heading = ({ title }: { title: string }) => {
    return (
        <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold capitalize">{title}</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20} />
        </div>
    )
}

export default Heading
