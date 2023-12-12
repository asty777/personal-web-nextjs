"use client";
import Image from "next/image"
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id:"skills",
        content: (
            <ul>
                <button className="px-4 py-2 w-20 sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-300 via-rose-300 to-cyan-300 hover:bg-slate-200 text-black mt-4">Laravel</button>
                <button className="px-4 py-2 w-20 sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-300 via-rose-300 to-cyan-300 hover:bg-slate-200 text-black mt-4">HTML</button>
                <button className="px-4 py-2 w-20 sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-300 via-rose-300 to-cyan-300 hover:bg-slate-200 text-black mt-4">CSS</button>
                <button className="px-4 py-2 w-20 sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-300 via-rose-300 to-cyan-300 hover:bg-slate-200 text-black mt-4">JS</button>
            </ul>
        ),
    },
    {
        title: "Education",
        id:"education",
        content: (
            <ul>
                <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-300 via-rose-300 to-cyan-300 hover:bg-slate-200 text-black mt-4">SMK Wikrama since 2022 - Now</button>
            </ul>
        ),
    },
    {
        title: "Certification",
        id:"certification",
        content: (
            <ul> 
               <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-300 via-rose-300 to-cyan-300 hover:bg-slate-200 text-black mt-4">Dicoding | Meniti Karir</button>
            </ul>
        ),
    },
]

import React, { useTransition, useState} from "react";


export default function About(){
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition,] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    };
    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image className="bg-gray-800 rounded-xl" alt="profile" src="/images/profile3.png" width={450} height={450} />
                <div>
                    <h2 className="text-4xl font-bold text-white mb-4 mt-4">About Me</h2>
                    <p className="text-base lg:text-lg"> {`Hi, I'm Ni Kadek Belinda Asty or 
                        usually called Asty. I am a student at SMK Wikrama Bogor, majoring
                        in Software and Game Development. I love learning new things, Every
                        project is an opportunity for growth, and I am excited about the possibilities.`}
                    </p>
                    <div className="flex flex-row mt-8 ">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                            {""}
                            Skills{""}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                            {""}
                            Education{""}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("certification")} active={tab === "certification"}>
                            {""}
                            certification{""}
                        </TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t)=> t.id == tab)?.content}</div>
                </div>
            </div>
            </section>
    )
}