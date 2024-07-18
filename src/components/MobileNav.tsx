"use client";
import {usePathname} from "next/navigation";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {MenuIcon} from "lucide-react";
import Link from "next/link";
import {links} from "@/components/Nav";

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className={"flex justify-center items-center"}>
                <MenuIcon className={"text-accent"}/>
            </SheetTrigger>
            <SheetContent className={"flex flex-col"}>
                <div className={"mt-32 mb-40 text-center text-2xl"}>
                    <Link href={"/"}>
                        <h1 className={"text-4xl font-semibold"}>
                            Jamie<span className={"text-accent"}>.</span>
                        </h1>
                    </Link>
                </div>
                <nav className={"flex flex-col justify-center items-center gap-8"}>
                    {links.map((link,index)=>(
                        <Link href={link.path} key={index} className={`text-xl capitalize hover:text-accent transition-all ${link.path===pathname && "text-accent border-b-2 border-accent"}`}>{link.name}</Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;