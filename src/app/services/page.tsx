"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
    {
        id: 1,
        title: 'Web Development',
        description: 'I build websites that serve as powerful marketing tools and bring memorable brand experiences using the latest technologies and ensuring seamless performance.',
        href: '/web-development',
        image: "/assets/services/web.jpg"
    },
    {
        id: 2,
        title: 'Mobile App Development',
        description: 'I create mobile applications for Android and iOS devices that are highly intuitive, interactive, and functional.',
        href: '/mobile-app-development',
        image: "/assets/services/mobile.jpg"
    },
    {
        id: 3,
        title: 'API Development',
        description: 'I develop robust and secure RESTful APIs that are equipped to handle high volumes of traffic and data.',
        href: '/api-development',
        image: "/assets/services/api.jpg"
    },
    {
        id: 4,
        title: 'Database Management',
        description: 'I create and maintain databases that are efficient, scalable, and secure.',
        href: '/database-management',
        image: "/assets/services/database.jpg"
    },
    {
        id: 5,
        title: 'Cloud Integration',
        description: 'I offer cloud integration services that enable businesses to easily access their data and applications from anywhere in the world.',
        href: '/cloud-integration',
        image: "/assets/services/cloud.jpg"
    },
    {
        id: 6,
        title: 'E-commerce Development',
        description: 'I build e-commerce websites that are highly functional, user-friendly, and capable of driving sales.',
        href: '/e-commerce-development',
        image: "/assets/services/ecommerce.jpg"
    },
    {
        id: 7,
        title: 'Content Management System',
        description: 'I create custom CMS platforms for clients that need a specifically tailored solution for a website or web-based system.',
        href: '/content-management-system',
        image: "/assets/services/cms.jpg"
    },
    {
        id: 8,
        title: 'Quality Assurance',
        description: 'I provide quality assurance services to ensure that the software is bug-free and runs smoothly.',
        href: '/quality-assurance',
        image: "/assets/services/qa.jpg"
    },
    {
        id: 9,
        title: 'Maintenance & Support',
        description: 'I offer maintenance and support services to ensure that your website or application is always running smoothly.',
        href: '/maintenance-support',
        image: "/assets/services/maintenance.jpg"
    },
];

const Services = () => {
    return (
        <section className={"min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"}>
            <div className={"container mx-auto"}>
                <h2 className={"text-xl font-bold text-start text-gray-500"}>Services</h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity:1,
                        transition:{delay:2.4,duration:0.4, ease:"easeIn"},
                    }}
                    >
                    {services.map((service) => (
                        <div key={service.id} className={"flex flex-col lg:flex-row items-start lg:items-center justify-between py-4"}>
                            <div className={"w-full lg:w-1/2"}>
                                <h3 className={"text-lg font-bold text-gray-300"}>{service.title}</h3>
                                <p className={"text-gray-600"}>{service.description}</p>
                            </div>
                            <a href={service.href} className={"w-full lg:w-1/2 mt-4 lg:mt-0"}>
                                <img src={service.image} alt={service.title} height={20} width={20} className={"w-full h-auto rounded-md"} />
                            </a>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;