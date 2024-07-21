import {Button} from "@/components/ui/button";
import {DownloadIcon} from "lucide-react";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
    return (
        <section className={"h-full"}>
            <div className={"container mx-auto h-full"}>
                <div className={"flex flex-col xl:flex-row items-center justify-between xl:pt-5 xl:pb-24"}>
                    {/* introductory text */}
                    <div className={"text-center xl:text-left order-2 xl:order-none"}>
                        <span className={"text-xl"}>Software Engineer</span>
                        <h1 className={"h1 mb-6"}>Hello, I'm <br/><span className={"text-accent"}>Jamie Omondi</span></h1>
                        <p className={"max-w-[500px] mb-9 text-white/80"}>
                            I'm a software engineer based in Nairobi, Kenya. I specialize in building and designing web applications. I'm passionate about building software that is scalable,
                            maintainable, and user-friendly. I am proficient in various programming languages and technologies.
                        </p>
                    {/*  Buttons and socials  */}
                        <div className={"flex flex-col xl:flex-row items-center gap-8"}>
                            <Button variant={"outline"} size={"lg"} className={"uppercase flex items-center gap-2 border-accent bg-primary text-accent rounded-full hover:text-primary"}>
                                <span>Download CV</span>
                                <DownloadIcon className={"w-5 h-5 ml-2"}/>
                            </Button>
                            <div className={"mb-8 xl:mb-0"}>
                                <Socials containerStyles={"flex gap-6"} iconStyles={"p-2 border border-accent rounded-full justify-center items-center text-accent text-base hover:bg-accent" +
                                    " hover:text-primary hover:transition-all duration-500"}/>
                            </div>
                        </div>
                    </div>
                    {/* photo */}
                    <div className={"order-1 xl:order-none mb-8 xl:mb-0"}>
                        <Photo/>
                    </div>
                </div>
            </div>
            <Stats/>
        </section>
    );
}

export default Home;
