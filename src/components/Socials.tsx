import {Github, GithubIcon, Linkedin, Twitter, Youtube} from "lucide-react";
import Link from "next/link";

const socials = [
    {icon: <Github/>, path: ""},
    {icon: <Linkedin/>,path: ""},
    {icon: <Youtube/>,path: ""},
    {icon:<Twitter/>,path: ""}
]

interface SocialProps {
    containerStyles?: string;
    iconStyles?: string;
}

const Socials:React.FC<SocialProps> = ({containerStyles,iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((social,index) => (
                <Link key={index} href={social.path} className={iconStyles}>
                    {social.icon}
                </Link>
            ))}
        </div>
    );
}

export default Socials;