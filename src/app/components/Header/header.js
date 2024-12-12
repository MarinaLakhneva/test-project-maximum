"use client";
import Image from "next/image";
import {useRouter} from "next/navigation";
import styles from "./header.module.scss";
import Logo from "../../../../public/assets/logo.svg";

export default function Header() {
	const router = useRouter();
	
	return (
		<header className={styles.header}>
			<Image className={styles.logo} src={Logo} alt="logo" onClick={() => router.push('/')}/>
			<hr className={styles.delimiter}/>
			<p className={styles.company}>Официальный дилер Максимум </p>
		</header>
	);
}
