"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {ArrowRight} from "lucide-react";

const services = [
    {
        id:"01",
        title: 'Web Development',
        description: 'I build websites that serve as powerful marketing tools and bring memorable brand experiences using the latest technologies and ensuring seamless performance.',
        href: '/web-development',
        image: "/assets/services/web.jpg"
    },
    {
        id: "02",
        title: 'Mobile App Development',
        description: 'I create mobile applications for Android and iOS devices that are highly intuitive, interactive, and functional.',
        href: '/mobile-app-development',
        image: "/assets/services/mobile.jpg"
    },
    {
        id: "03",
        title: 'API Development',
        description: 'I develop robust and secure RESTful APIs that are equipped to handle high volumes of traffic and data.',
        href: '/api-development',
        image: "/assets/services/api.jpg"
    },
    {
        id: "04",
        title: 'Database Management',
        description: 'I create and maintain databases that are efficient, scalable, and secure.',
        href: '/database-management',
        image: "/assets/services/database.jpg"
    },
    {
        id: "05",
        title: 'Cloud Integration',
        description: 'I offer cloud integration services that enable businesses to easily access their data and applications from anywhere in the world.',
        href: '/cloud-integration',
        image: "/assets/services/cloud.jpg"
    },
    {
        id: "06",
        title: 'E-commerce Development',
        description: 'I build e-commerce websites that are highly functional, user-friendly, and capable of driving sales.',
        href: '/e-commerce-development',
        image: "/assets/services/ecommerce.jpg"
    },
    {
        id: "07",
        title: 'Content Management System',
        description: 'I create custom CMS platforms for clients that need a specifically tailored solution for a website or web-based system.',
        href: '/content-management-system',
        image: "/assets/services/cms.jpg"
    },
    {
        id: "08",
        title: 'Quality Assurance',
        description: 'I provide quality assurance services to ensure that the software is bug-free and runs smoothly.',
        href: '/quality-assurance',
        image: "/assets/services/qa.jpg"
    },
    {
        id: "09",
        title: 'Maintenance & Support',
        description: 'I offer maintenance and support services to ensure that your website or application is always running smoothly.',
        href: '/maintenance-support',
        image: "/assets/services/maintenance.jpg"
    },
];

const Services = () => {
    return (
        <section className={"min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 mt-20"}>
            <div className={"container mx-auto"}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity:1,
                        transition:{delay:2.4,duration:0.4, ease:"easeIn"},
                    }}
                    className={"grid grid-cols-1 md:grid-cols-2 gap-[60px]"}
                    >
                    {services.map((service,index) => (
                        <div key={index} className={"flex-1 flex flex-col justify-center gap-6 group min-h-[20vh]"}>
                            <div className={"w-full flex justify-between items-center"}>
                                <div className={"text-5xl font-entrabold text-transparent text-outline group-hover:text-outline-hover duration-500"}>
                                    {service.id}
                                </div>
                                <Link href={service.href} className={"w-[60px] h-[60px] rounded-full bg-white text-primary group-hover:bg-accent transition-all duration-500 flex justify-center" +
                                    " items-center hover:rotate-45"}>
                                    <ArrowRight />
                                </Link>
                            </div>
                            <h2 className={"text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500"}>{service.title}</h2>
                            <p className={"text-white/60"}>{service.description}</p>
                            <div className={"border-b border-white/20 w-full"} />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;