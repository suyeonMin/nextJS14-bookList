import Link from "next/link";
import style from "../../../styles/book.module.css";

const URL = "https://books-api.nomadcoders.workers.dev/list";
async function getBooks(id:string){
	const res = await fetch(`${URL}?name=${id}`);
	const json = await res.json();
	return json;
}

export default async function Books({
  params,
}: {
  params: Promise<{ id: string }>;
}){
  const id = (await params).id;
	const books = await getBooks(id);
	const list = books.results.books;

  return <div className={style.bookPage}>
		<h1>{books.results.list_name}</h1>

		<ul>
			{list.map(item => (
				<li key={item?.title}>
					<img src={item?.book_image} alt="book image" />
					<p className={style.title}>{item?.title}</p>
					<p className={style.author}>{item?.author}</p>
					<Link href={item.amazon_product_url} target="_blank">Buy Now →</Link>
				</li>
				))}
		</ul>
	</div>
} 