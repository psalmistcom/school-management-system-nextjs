"use client";
import Image from "next/image";
import {
    RadialBarChart,
    RadialBar,
    Legend,
    ResponsiveContainer,
} from "recharts";
import Heading from "./utilities/Heading";

const data = [
    {
        name: "Total",
        count: 106,
        fill: "white",
    },
    {
        name: "Girls",
        count: 53,
        fill: "#FAE27C",
    },
    {
        name: "Boys",
        count: 53,
        fill: "#C3EBFA",
    },
];

const CountChart = () => {
    return (
        <div className="bg-white rounded-xl w-full h-full p-4">
            {/* TITLE */}
            <Heading title="Students" />
            {/* CHART */}
            <div className="relative w-full h-[75%]">
                <ResponsiveContainer>
                    <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="40%"
                        outerRadius="100%"
                        barSize={32}
                        data={data}
                    >
                        <RadialBar background dataKey="count" />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image
                    src="/maleFemale.png"
                    alt=""
                    width={50}
                    height={50}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
            </div>
            {/* BOTTOM */}
            <div className="flex justify-center gap-16">
                <div className="flex flex-col gap-1">
                    <div className="w-3 h-3 bg-hSchoolSky rounded-full" />
                    <h1 className="font-bold">1,234</h1>
                    <h2 className="text-xs text-gray-300">Boys (55%)</h2>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="w-3 h-3 bg-hSchoolYellow rounded-full" />
                    <h1 className="font-bold">1,234</h1>
                    <h2 className="text-xs text-gray-300">Girls (45%)</h2>
                </div>
            </div>
        </div>
    );
};

export default CountChart;