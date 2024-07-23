"use client";
import React from 'react';
import CountUp from "react-countup";
import {BriefcaseBusiness, Building, Coffee, CoffeeIcon, FolderKanban, GitCommit, PanelsTopLeft, Users, Workflow} from "lucide-react";
import {Card} from "@/components/ui/card";

const stats = [
    {
        num: 5,
        text: "Years of experience",
        icon: <BriefcaseBusiness/>
    },
    {
        num: 26,
        text: "Projects completed",
        icon: <FolderKanban/>
    },
    {
        num: 10,
        text: "Technologies mastered",
        icon: <PanelsTopLeft/>
    },
    {
        num: 3000,
        text: "Code commits",
        icon: <GitCommit/>
    },
    {
        num: 10,
        text: "Happy clients",
        icon: <Users/>
    },
    {
        num: 5,
        text: "Companies worked with",
        icon: <Building/>
    },
    {
        num: 100,
        text: "Cups of coffee",
        icon: <Coffee/>
    }
]


const Stats = () => {
    return (
        <section className={"pt-4 pb-12 xl:pt-0 xl:pb-0"}>
            <div className={"container mx-auto"}>
                <div className={"flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none"}>
                    {stats.map((stat, index) => (
                        <div className={"flex-1 flex gap-4 items-center justify-center xl:justify-start"} key={index}>
                            <CountUp end={stat.num} duration={5} delay={2} className={"text-4xl xl:text-6xl font-extrabold"}/>
                            <p className={`${stat.text.length <15 ?"max-w-[100px]":"max-w-[150px]"} text-white/80 leading-snug`}>{stat.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;