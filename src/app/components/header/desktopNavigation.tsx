import Link from "next/link";
import Image from "next/image";
import { farmhouse } from "@/app/fonts/fonts";

interface Props {
    links: { href: string; label: string; }[],
}

export default function DesktopNavigation(props: Props) {

    const navLink = (link: { href: string, label: string }) => {
        return (
            <li>
                <Link href={link.href}>{link.label}</Link>
            </li>
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

    const listLinks = props.links.map((link) => navLink(link));
    listLinks.splice((listLinks.length / 2) + 1, 0, mainLink())

    return (
        <ul className="DesktopNavigation fs-300 flex gap-4 h-full items-center justify-around capitalize">
            {listLinks}
        </ul>
    )
}