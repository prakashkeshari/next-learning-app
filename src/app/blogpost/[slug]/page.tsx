import { getBlogPost } from "@/app/api/blogs/[slug]/route";
import styles from "../../styles/BlogPost.module.css";

interface Props {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlogPost(slug);

  if (!blog) {
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className="text-4xl text-black font-bold">Blog Post Not Found</h1>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className="text-4xl text-black font-bold">{blog.title}</h1>
        <div className="text-center text-gray-600 mt-4 mb-4">By {blog.author}</div>
        <div className="text-left text-gray-800">{blog.content}</div>
      </main>
    </div>
  );
}
