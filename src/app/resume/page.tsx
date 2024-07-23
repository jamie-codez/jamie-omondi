"use client";
import React, {Key} from 'react';
import {BriefcaseIcon, Clipboard, FlaskConical, GraduationCap, Info} from "lucide-react";
import IconCloud from "@/components/magicui/icon-cloud";
import {MarqueeDemo} from "@/components/SkillsMaqee";
import {Tab, Tabs} from "@nextui-org/tabs";
import {Card} from "@/components/ui/card";
import {Separator} from "@radix-ui/react-select";
import {Divider} from "@nextui-org/divider";
import Link from "next/link";

// About data
const about = {
    name: "Jamie Omondi",
    title: "Software Engineer",
    location: "Nairobi, Kenya",
    icon: <Info/>,
    summary: "I'm a software engineer based in Nairobi, Kenya. I specialize in building web and mobile applications. I'm passionate about building software that is scalable, maintainable, and user-friendly. I am proficient in various programming languages and technologies.",
    items: [
        {
            title: "Email",
            value: "jamesomondi1418@gmail.com"
        },
        {
            title: "Phone",
            value: "+254 759459363"
        },
        {
            title: "Experience",
            value: "5 years"
        },
        {
            title: "Freelance",
            value: "Available"
        },
        {
            title: "Languages",
            value: "English, Swahili"
        },
        {
            title: "Address",
            value: "Nairobi, Kenya"
        },
    ],
    socials: [
        {
            name: "LinkedIn",
            icon: "linkedin",
            link: "https://www.linkedin.com/in/jamie-omondi/"
        },
        {
            name: "GitHub",
            icon: "github",
            link: "https://github.com/jamie-codez"
        },
        {
            name: "Twitter",
            icon: "twitter",
            link: "https://twitter.com/jamie_codez"
        },
        {
            name: "Facebook",
            icon: "facebook",
            link: "https://www.facebook.com/jamie.codez"
        },
    ],
    skills: [
        "javascript",
        "typescript",
        "react",
        "nextdotjs",
        "nodedotjs",
        "express",
        "typeorm",
        "prisma",
        "mongodb",
        "kotlin",
        "nginx",
        "android",
        "jest",
        "mocha",
        "junit5",
        "chai",
        "css3",
        "html5",
        "java",
        "springboot",
        "framer",
        "hibernate",
        "quarkus",
        "gradle",
        "python",
        "flask",
        "fastapi",
        "php",
        "laravel",
        "c",
        "firebase",
        "cplusplus",
        "arduino",
        "androidstudio",
        "visualstudiocode",
        "raspberrypi",
        "microPython",
        "postgresql",
        "graphql",
        "nextui",
        "magicui",
        "numpy",
        "platformio",
        "shadcnui",
        "spring",
        "swagger",
        "rest",
        "git",
        "github",
        "devops",
        "docker",
        "kubernetes",
        "figma",
        "yarn",
        "yaml",
        "lintcode",
    ]
}

// Experiences
const experiences = {
    title: "Experience",
    icon: <BriefcaseIcon/>,
    items: [
        {
            title: "Software Engineer",
            company: "Placid Systems",
            location: "Nairobi, Kenya",
            date: "April 2024 - July 2024",
            description: "I work as a software engineer at Placid Systems. I build web, mobile and backend applications for clients using various technologies. I work in a team of developers to deliver" +
                " high-quality" +
                " software products."
        },
        {
            title: "Backend Developer",
            company: "Yellow Dot Energy",
            location: "Nairobi, Kenya",
            date: "January 2023 - March 2024",
            description:
                "I worked as a backend developer at Yellow Dot Energy. I built RESTful APIs and backend services for the company's energy management platform. I worked in a team of developers to deliver"
                + " software products."
        },
        {
            title: "Full stack Android Developer",
            company:
                "Cinch Markets",
            location:
                "Nairobi, Kenya",
            date:
                "August 2022 - December 2022",
            description:
                "I worked as a full stack Android developer at Cinch Markets. I built Android applications for the company's e-commerce platform. I worked in a team of developers to deliver" +
                " software products."
        }
        ,
        {
            title: "Software Developer",
            company:
                "Freelance",
            location:
                "Remote",
            date:
                "August 2019 - April 2022",
            description:
                "I worked as a freelance software developer. I built web and mobile applications for clients using various technologies. I worked with clients to deliver high-quality software" +
                " products."
        },
        {
            title: "Android Developer",
            company:
                "Voomantics Studios",
            location:
                "Nairobi, Kenya",
            date:
                "June 2019 - January 2021",
            description: "I worked as an Android developer at Voomantics Studios. I built Android applications for the company's clients. I worked in a team of developers to deliver software" +
                " products."
        }
    ],
}

// Education
const education = {
    title: "Education",
    icon: <GraduationCap/>,
    items: [
        {
            title: "Bachelor of Science in Computer Science",
            institution: "University of Nairobi",
            location: "Nairobi, Kenya",
            date: "2016 - 2020",
            description: "I studied Computer Science at the University of Nairobi. I learned various programming languages, algorithms, data structures, and software development methodologies."
        },
        {
            title: "Pluralsight Online Learning",
            institution: "Pluralsight",
            location: "Online",
            date: "2019 - 2021",
            description: "I completed various courses on Pluralsight to learn new technologies and improve my skills as a software developer."

        }, {
            title: "Pluralsight Online Learning",
            institution: "Pluralsight",
            location: "Online",
            date: "2019 - 2021",
            description: "I completed various courses on Pluralsight to learn new technologies and improve my skills as a software developer."
        }, {
            title: "TUK IoT Bootcamp",
            institution: "Technical University of Kenya",
            location: "Nairobi, Kenya",
            date: "2018",
            description: "I attended the TUK IoT Bootcamp to learn about the Internet of Things and build IoT projects."
        }, {
            title: "Huawei Routing and Switching",
            institution: "Huawei Academy",
            location: "Nairobi, Kenya",
            date: "2017",
            description: "I completed the Huawei Routing and Switching course to learn about networking and network devices."
        }
    ]
}

// Certifications
const certifications = {
    title: "Certifications",
    icon: <Clipboard/>,
    items: [
        {
            title: "Android Developer Nanodegree",
            institution: "Pluralsight",
            location: "Online",
            date: "2021",
            description: "I completed the GADS Android Developer Nanodegree to improve my skills as an Android developer."
        },
        {
            title: "Software Engineering Immersive",
            institution: "Pluralsight",
            location: "Online",
            date: "2020",
            description: "I completed the GADS Software Engineering Immersive program to improve my skills as a software engineer."
        },
        {
            title: "Kotlin Expert",
            institution: "Pluralsight",
            location: "Online",
            date: "2019",
            description: "I completed the Kotlin Expert certification to demonstrate my skills in Kotlin programming."
        },
        {
            title: "Huawei Certified Network Associate",
            institution: "Huawei Academy",
            location: "Online",
            date: "2018",
            description: "I completed the Huawei Certified Network Associate certification to demonstrate my skills in networking."
        }
    ]
}

const sections = [
    {
        title: "About",
        icon: about.icon,
        items: about.items
    },
    {
        title: "Experiences",
        icon: experiences.icon,
        items: experiences.items
    },
    {
        title: "Education",
        icon: education.icon,
        items: education.items
    },
    {
        title: "Certifications",
        icon: certifications.icon,
        items: certifications.items
    },
    {
        title: "Skills",
        icon: <FlaskConical/>,
    }
]

const AboutMe = () => {
    return (
        <div className={"flex flex-col gap-4"}>
            <div className={"flex flex-col gap-4"}>
                <h2 className={"hidden md:flex text-4xl underline underline-offset-4 font-extrabold"}>About Me</h2>
                <p className={"text-lg"}>{about.summary}</p>
            </div>
            <div className={"flex flex-col gap-4"}>
                <h2 className={"text-2xl underline underline-offset-4 font-bold"}>Contact</h2>
                {about.items.map((item, index) => (
                    <div key={index} className={"flex gap-4"}>
                        {
                            item.title === "Email" ? <div className={"flex gap-6"}><p>Email Address:</p><Link href={`mailto:${item.value}`} className={"text-accent"}> {item.value}</Link></div> :
                                item.title === "Phone" ? <div className={"flex gap-6"}><p>Phone Number:</p><Link href={`tel:${item.value}`} className={"text-accent"}> {item.value}</Link></div> :
                                    <div className={"flex gap-6"}><p>{item.title}:</p><span className={"text-accent"}>{item.value}</span></div>
                        }
                    </div>
                ))}
            </div>
        </div>
    );
}

const Experiences = () => {
    return (
        <div className={"flex flex-col gap-4"}>
            <h2 className={"hidden md:flex text-4xl underline underline-offset-4 font-extrabold"}>Experiences</h2>
            {experiences.items.map((experience, index) => (
                <div key={index} className={"flex flex-col gap-4"}>
                    <div className={"flex gap-4 font-bold text-xl text-accent"}>
                        <h3>{experience.title}</h3><p>|</p>
                        <h3>{experience.company}</h3><p>|</p>
                        <h3>{experience.location}</h3><p>|</p>
                        <h3>{experience.date}</h3>
                    </div>
                    <p>{experience.description}</p>
                    <Divider orientation={"horizontal"} className={"bg-gray-400"}/>
                </div>
            ))}
        </div>
    );
}

const Education = () => {
    return (
        <div className={"flex flex-col gap-4"}>
            <h2 className={"hidden md:flex text-4xl font-extrabold underline underline-offset-4"}>Education</h2>
            {education.items.map((item, index) => (
                <div key={index} className={"flex flex-col gap-4"}>
                    <div className={"flex gap-4 font-bold text-xl text-accent underline underline-offset-4"}>
                        <span>{item.title}</span>|<span>{item.institution}</span>|<span>{item.location}</span>|<span>{item.date}</span></div>
                    <p className={"text-lg"}>{item.description}</p>
                </div>
            ))}
        </div>
    );
}

const Certifications = () => {
    return (
        <div className={"flex flex-col gap-4"}>
            <h2 className={"hidden md:flex text-4xl font-extrabold underline underline-offset-4"}>Certifications</h2>
            {certifications.items.map((item, index) => (
                <div key={index} className={"flex flex-col gap-4"}>
                    <div className={"flex gap-4 font-bold text-xl text-accent"}>
                        <span>{item.title}</span>|<span>{item.institution}</span>|<span>{item.location}</span>|<span>{item.date}</span></div>
                    <p className={"text-lg"}>{item.description}</p>
                </div>
            ))}
        </div>
    );
}

const Skills = () => {
    return (
        <div className={"flex flex-col gap-4"}>
            <h2 className={"text-2xl"}>Skills</h2>
            <IconCloud iconSlugs={about.skills}/>
            <MarqueeDemo/>
        </div>
    );
}

const Sidebar = () => {
    const [activeSection, setActiveSection] = React.useState({name: "About", element: <AboutMe/>});
    const [selected, setSelected] = React.useState("About");
    const handleSectionClick = (name: string) => {
        if (name === "About") return setActiveSection({name: "About", element: <AboutMe/>});
        if (name === "Experiences") return setActiveSection({name: "Experiences", element: <Experiences/>});
        if (name === "Education") return setActiveSection({name: "Education", element: <Education/>});
        if (name === "Certifications") return setActiveSection({name: "Certifications", element: <Certifications/>});
        if (name === "Skills") return setActiveSection({name: "Skills", element: <Skills/>});
    }

    const handleTabChange = (name: Key) => {
        setSelected(name as string);
        if (name === "0") return setActiveSection({name: "About", element: <AboutMe/>});
        if (name === "1") return setActiveSection({name: "Experiences", element: <Experiences/>});
        if (name === "2") return setActiveSection({name: "Education", element: <Education/>});
        if (name === "3") return setActiveSection({name: "Certifications", element: <Certifications/>});
        if (name === "4") return setActiveSection({name: "Skills", element: <Skills/>});
    }

    return (
        <div className={"flex gap-2 w-full"}>
            <div className={"hidden md:flex flex-col gap-8 w-1/4"}>
                {sections.map((section, index) => (
                    <div className={`flex gap-4 hover:cursor-pointer hover:text-accent ${activeSection.name === section.title ? "text-accent" : "text-white"}`}
                         key={index}
                         onClick={() => handleSectionClick(section.title)}>
                        {section.icon}
                        <span>{section.title}</span>
                    </div>
                ))}
            </div>
            <div className={"hidden md:flex w-3/4"}>
                <div className={"flex gap-4"}>
                    {activeSection.element}
                </div>
            </div>
            <div className={"flex flex-col w-full md:hidden"}>
                <Tabs aria-label={"Sections"} color={"success"} variant={"underlined"} selectedKey={selected} onSelectionChange={(name) => handleTabChange(name)}>
                    {sections.map((section, index) => (
                        <Tab key={index} title={section.title}>
                            <div className={"flex gap-4"}>{activeSection.element}</div>
                        </Tab>
                    ))}
                </Tabs>
            </div>
        </div>
    );
}


const Resume = () => {
    return (
        <section>
            <div className={"container mx-auto"}>
                {/*  Sidebar  */}
                <Sidebar/>
                {/*  Main content  */}
            </div>
        </section>
    );
};

export default Resume;