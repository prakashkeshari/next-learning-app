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

      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Latest Blog
        </h2>

        <div className="flex flex-col gap-4">
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl p-6 border border-gray-200"
            >
              <Link href={`/blogpost/${blog.slug}`}>
                <h3 className="text-2xl font-semibold text-blue-600 hover:underline mb-3">
                  {blog.title}
                </h3>
              </Link>

              <p className="text-gray-700 leading-relaxed">
                {blog.metadesc.length > 120
                  ? blog.metadesc.slice(0, 120) + "..."
                  : blog.metadesc}
              </p>

              <Link
                href={`/blogpost/${blog.slug}`}
                className="block mt-4 text-blue-500 font-medium hover:text-blue-700"
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}
