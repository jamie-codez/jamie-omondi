"use client";
import {cn} from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import React from "react";

const skillSet = [
    {
        "name": "JavaScript",
        "body": "I use JavaScript for creating and controlling web page content.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
        "name": "TypeScript",
        "body": "I use TypeScript to add type safety to my JavaScript projects.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    },
    {
        "name": "React",
        "body": "I use React to build user interfaces for web applications.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
        "name": "Next.js",
        "body": "I use Next.js for server-side rendering and static site generation.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
    },
    {
        "name": "Node.js",
        "body": "I use Node.js to run JavaScript on the server.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    {
        "name": "Express",
        "body": "I use Express to create web applications with Node.js.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
    },
    {
        "name": "TypeORM",
        "body": "I use TypeORM as an ORM to interact with databases in TypeScript.",
        "img": "https://cdn.jsdelivr.net/npm/simple-icons@13.2.0/icons/typeorm.svg"
    },
    {
        "name": "Prisma",
        "body": "I use Prisma as a modern ORM to interact with my database.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg"
    },
    {
        "name": "MongoDB",
        "body": "I use MongoDB as a NoSQL database for scalable applications.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    },
    {
        "name": "Kotlin",
        "body": "I use Kotlin to develop Android applications and other JVM-based projects.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"
    },
    {
        "name": "Nginx",
        "body": "I use Nginx as a web server and reverse proxy.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg"
    },
    {
        "name": "Android",
        "body": "I develop Android applications using Android Studio.",
        "img": "https://cdn.jsdelivr.net/npm/simple-icons@13.2.0/icons/android.svg"
    },
    {
        "name": "Jest",
        "body": "I use Jest to write unit tests for my JavaScript and TypeScript code.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
    },
    {
        "name": "Mocha",
        "body": "I use Mocha to test JavaScript applications.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg"
    },
    {
        "name": "JUnit 5",
        "body": "I use JUnit 5 for testing Java applications.",
        "img": "https://cdn.jsdelivr.net/npm/simple-icons@13.2.0/icons/junit5.svg"
    },
    {
        "name": "Chai",
        "body": "I use Chai for assertion in my JavaScript tests.",
        "img": "https://cdn.jsdelivr.net/npm/simple-icons@13.2.0/icons/chai.svg"
    },
    {
        "name": "CSS3",
        "body": "I use CSS3 for styling web pages.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },
    {
        "name": "HTML5",
        "body": "I use HTML5 to structure web pages.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
        "name": "Java",
        "body": "I use Java for developing backend applications and Android apps.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    },
    {
        "name": "Spring Boot",
        "body": "I use Spring Boot to create stand-alone, production-grade Spring-based applications.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
    },
    {
        "name": "Framer",
        "body": "I use Framer for creating interactive prototypes.",
        "img": "https://cdn.jsdelivr.net/npm/simple-icons@13.2.0/icons/framer.svg"
    },
    {
        "name": "Hibernate",
        "body": "I use Hibernate as an ORM for Java applications.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg"
    },
    {
        "name": "Quarkus",
        "body": "I use Quarkus to develop Kubernetes-native Java applications.",
        "img": "https://design.jboss.org/quarkus/logo/final/SVG/quarkus_logo_horizontal_rgb_default.svg"
    },
    {
        "name": "Gradle",
        "body": "I use Gradle for automating builds and managing dependencies.",
        "img": "https://cdn.jsdelivr.net/npm/simple-icons@13.2.0/icons/gradle.svg"
    },
    {
        "name": "Python",
        "body": "I use Python for a wide range of programming tasks, from web development to data analysis.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },
    {
        "name": "Flask",
        "body": "I use Flask to create lightweight web applications in Python.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
    },
    {
        "name": "FastAPI",
        "body": "I use FastAPI to build fast and scalable APIs with Python.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
    },
    {
        "name": "PHP",
        "body": "I use PHP for server-side scripting and web development.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
    },
    {
        "name": "Laravel",
        "body": "I use Laravel to build modern PHP applications.",
        "img": "https://cdn.jsdelivr.net/npm/simple-icons@13.2.0/icons/laravel.svg"
    },
    {
        "name": "C",
        "body": "I use C for system programming and developing embedded systems.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
    },
    {
        "name": "Firebase",
        "body": "I use Firebase for backend services like authentication, database, and hosting.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
    },
    {
        "name": "C++",
        "body": "I use C++ for high-performance applications and game development.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
    },
    {
        "name": "Arduino",
        "body": "I use Arduino for building electronic projects and prototyping.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg"
    },
    {
        "name": "Android Studio",
        "body": "I use Android Studio to develop Android applications.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"
    },
    {
        "name": "Visual Studio Code",
        "body": "I use Visual Studio Code as my primary code editor.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
    },
    {
        "name": "Raspberry Pi",
        "body": "I use Raspberry Pi for various IoT projects and as a mini-computer.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg"
    },
    {
        "name": "MicroPython",
        "body": "I use MicroPython to run Python on microcontrollers.",
        "img": "https://micropython.org/static/img/Mlogo_138wh.png"
    },
    {
        "name": "PostgreSQL",
        "body": "I use PostgreSQL as a powerful, open source object-relational database system.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
    },
    {
        "name": "GraphQL",
        "body": "I use GraphQL to query and manipulate data in APIs.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
    },
    {
        "name": "NextUI",
        "body": "I use NextUI for building modern and responsive user interfaces.",
        "img": "https://nextui.org/favicon.ico"
    },
    {
        "name": "Magic UI",
        "body": "I use Magic UI for creating dynamic user interfaces.",
        "img": "https://magicui.design/favicon.ico"
    },
    {
        "name": "NumPy",
        "body": "I use NumPy for numerical computing and data analysis in Python.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
    },
    {
        "name": "PlatformIO",
        "body": "I use PlatformIO for development on embedded systems and IoT.",
        "img": "https://cdn.jsdelivr.net/npm/simple-icons@13.2.0/icons/platformio.svg"
    },
    {
        "name": "shadcn/ui",
        "body": "I use shadcn/ui for building component libraries with utility-first CSS.",
        "img": "https://cdn.jsdelivr.net/npm/simple-icons@13.2.0/icons/shadcnui.svg"
    },
    {
        "name": "Spring",
        "body": "I use Spring for building enterprise Java applications.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
    },
    {
        "name": "Swagger",
        "body": "I use Swagger to design, build, document, and consume RESTful web services.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg"
    },
    {
        "name": "REST",
        "body": "I use REST principles to build web services and APIs.",
        "img": "https://www.iconpacks.net/icons/free-icons-6/free-rest-api-blue-logo-icon-22098-thumb.png"
    },
    {
        "name": "Git",
        "body": "I use Git for version control in my projects.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    },
    {
        "name": "GitHub",
        "body": "I use GitHub to host and manage my code repositories.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    },
    {
        "name": "DevOps",
        "body": "I use DevOps practices to automate and streamline the software development lifecycle.",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq6Ov9Gqu2U1HD7NVB5OnF2hiBrqTy6cgaeoY8oy8GvMsOLuBSbB_7NSKP3JdbAn_74aY&usqp=CAU"
    },
    {
        "name": "Docker",
        "body": "I use Docker to containerize applications for consistent deployment.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
    },
    {
        "name": "Kubernetes",
        "body": "I use Kubernetes to manage containerized applications at scale.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
    },
    {
        "name": "Figma",
        "body": "I use Figma for UI/UX design and prototyping.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
    },
    {
        "name": "Yarn",
        "body": "I use Yarn as a fast, reliable, and secure dependency manager for JavaScript projects.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg"
    },
    {
        "name": "YAML",
        "body": "I use YAML for configuration files and data serialization.",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yaml/yaml-original.svg"
    },
    {
        "name": "LintCode",
        "body": "I use LintCode to practice coding problems and improve my algorithms skills.",
        "img": "https://cdn.jsdelivr.net/npm/simple-icons@13.2.0/icons/lintcode.svg"
    }
]

const firstRow = skillSet.slice(0, skillSet.length / 2);
const secondRow = skillSet.slice(skillSet.length / 2);

const ReviewCard = ({name,body,img}: { name:string,body:string,img:string}) => {
    return (
        <figure
            className={cn("relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4")}>
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img}/>
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    {/*<p className="text-xs font-medium dark:text-white/40">{body}</p>*/}
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

export const MarqueeDemo = () => {
    return (
        <div className="relative flex h-[500px] w-[65vw] flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
            <Marquee pauseOnHover className="[--duration:60s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.name} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:60s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.name} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-primary dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-primary dark:from-background"></div>
        </div>
    );
}