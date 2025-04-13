import style from "../styles/about.module.css";

export const metadata = {
	title: "About",
}

export default function About(){
	return <div className={style.aboutPage}>
		<h1>ABOUT US</h1>
		<p>Welcome to the official explorer for The New York Times Best Seller list explorer.</p>
		<p>We hope you enjoy your stay!</p>
		<span>👍</span>
	</div>
}