import Image from "next/image"

const UserCard = ({ type, year, amount }: { type: string, year: string, amount: number }) => {
    return (
        <div className="rounded-2xl  odd:bg-hSchoolPurple even:bg-hSchoolYellow p-4 flex-1 min-w-[130px]:">
            <div className="flex justify-between items-center">
                <span className="text-[10px] bg-white px-2 py-1 rounded-full text-emerald-600 font-semibold">{year}</span>
                <Image src='/more.png' alt="" width={20} height={20} />
            </div>
            <h1 className="text-2xl font-semibold my-4">{amount.toLocaleString()}</h1>
            <h2 className="capitalize text-gray-500 text-xs font-medium">{`${type}s`}</h2>
        </div>
    )
}

export default UserCard
