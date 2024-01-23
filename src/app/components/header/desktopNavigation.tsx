'use client';

import Link from "next/link";
import Image from "next/image";
import { farmhouse } from "@/app/fonts/fonts";
import { useState } from "react";

interface Props {
    links: { href: string; label: string; }[],
}

export default function DesktopNavigation(props: Props) {

    const NavLink = (link: { href: string, label: string }) => {
        const [hover, setHover] = useState(false);
        const onMouseEnter = () => setHover(true);
        const onMouseLeave = () => setHover(false);
        return (
            <li
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <Link className="relative z-10 p-2" href={link.href}>
                    <span className="">
                        {link.label}
                    </span>
                    {hover && <Image
                        className="absolute top-[-75%] left-0 z-[-1]"
                        src='/stars.png'
                        alt='background image'
                        width={233}
                        height={200}
                    />}
                </Link>


            </li >
        )
    }

    const mainLink = () => {
        return (<li>
            <Link href='/' className="flex flex-row justify-center">
                <div className="flex flex-col items-center justify-center gap-2">
                    <div className={`${farmhouse.className} fs-700`}>Céphée</div>
                    <div className={`${farmhouse.className} fs-200 whitespace-nowrap`}>Constellation d&apos;artistes</div>
                </div>
                <Image
                    src='/circle-icon.png'
                    width={150}
                    height={150}
                    alt='Céphée'
                />
            </Link>
        </li>)
    }

    return (
        <ul className="DesktopNavigation fs-300 h-full grid grid-cols-3 items-center capitalize ">
            <div className="flex">
                {props.links.slice(0, (props.links.length / 2) + 1).map((link: { href: string; label: string; }) => NavLink(link))}
            </div>
            {mainLink()}
            <div className="flex">
                {props.links.slice((props.links.length / 2) + 1, props.links.length).map((link: { href: string; label: string; }) => NavLink(link))}
            </div>
        </ul>
    )
}