import Link from "next/link";
import style from "../styles/home.module.css";

export const metadata = {
	title: "Home"
}
const URL = "https://books-api.nomadcoders.workers.dev/lists";
async function getBooks(){
	const res = await fetch(URL);
	const json = await res.json();
	return json;
}

export default async function Home(){
	const books = await getBooks()

	return <div className={style.homepage}>
		<h1>The New York Times Best Seller Explorer</h1>
		<ul>
			{books.results.map((item, idx) => (
				<li key={idx}>
					<Link href={`/list/${item.list_name_encoded}`}>{item.display_name} →</Link>
				</li>
			))}
		</ul>
	</div>
}