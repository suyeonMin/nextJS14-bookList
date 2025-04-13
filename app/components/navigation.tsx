"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "../styles/navigation.module.css";

export default function Navigation(){
	const path = usePathname();
		return (
			<nav className={style.nav}>
				<ul>
					<li className={path==='/' ? 'active' : ''}><Link href="/">HOME</Link></li>
					<li className={path==='/about' ? 'active' : ''}><Link href="/about">ABOUT</Link></li>
				</ul>
			</nav>
		)
}