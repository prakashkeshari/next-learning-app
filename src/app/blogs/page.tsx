import Link from "next/link";
import styles from "../home_page.module.css";
import { getBlogPosts } from "@/app/api/blogs/route";

export default async function Page() {
  const blogs = await getBlogPosts();

  return (
    <>
      <div className={styles.content}>
        <h1 className={styles.title}>Blog Page</h1>
        <p className={styles.subTitle}>This is the Blog page content 🚀</p>
      </div>

      <div className="container mx-auto p-4">
        <h2 className="text-4xl text-black font-bold mb-8 text-center">
          Latest Blog
        </h2>

        {blogs.map((blog) => (
          <div key={blog.slug} className={`${styles.blogItem} mb-6 p-6`}>
            <Link href={`/blogpost/${blog.slug}`}>
              <h3>{blog.title}</h3>
            </Link>
            <p>{blog.metadesc}</p>
          </div>
        ))}
      </div>
    </>
  );
}
