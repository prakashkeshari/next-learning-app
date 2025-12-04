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
          <h1 className={styles.title}>Blog Post Not Found</h1>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{blog.title}</h1>
        <div className={styles.meta}>By {blog.author}</div>
        <div className={styles.content}>{blog.content}</div>
      </main>
    </div>
  );
}
