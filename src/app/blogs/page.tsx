import styles from "../home_page.module.css";
import { getBlogPosts } from "@/app/api/blogs/route";
import BlogList from "./BlogList";

export default async function Page() {
  const { blogs, total } = await getBlogPosts({ page: 1 });

  return (
    <>
      <div className={styles.content}>
        <h1 className={styles.title}>Blog Page</h1>
        {/* <p className={styles.subTitle}>This is the blog page content</p> */}
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
          Latest Blogs
        </h2>

        <BlogList initialBlogs={blogs} totalPosts={total} />
      </div>
    </>
  );
}
