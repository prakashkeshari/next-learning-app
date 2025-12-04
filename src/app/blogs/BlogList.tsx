"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import styles from "../styles/BlogPost.module.css";

interface Blog {
    slug: string;
    title: string;
    metadesc: string;
}

export default function BlogList({ initialBlogs, totalPosts }: { initialBlogs: Blog[], totalPosts: number }) {
    const [blogs, setBlogs] = useState(initialBlogs);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [finished, setFinished] = useState(initialBlogs.length >= totalPosts);

    const loadMore = useCallback(async () => {
        setLoading(true);

        const res = await fetch(`/api/blogs?page=${page + 1}`);
        const { blogs: newBlogs, total } = await res.json();

        if (newBlogs.length === 0 || blogs.length + newBlogs.length >= total) {
            setFinished(true);
        }

        if (newBlogs.length > 0) {
            setBlogs((prev) => [...prev, ...newBlogs]);
            setPage((prev) => prev + 1);
        }

        setLoading(false);
    }, [page, blogs.length]);

    useEffect(() => {
        const handleScroll = () => {
            if (finished || loading) return;

            const bottom =
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 300;

            if (bottom) loadMore();
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [loading, finished, loadMore]);



    return (
        <div className={styles.container}>
            {blogs.map((blog) => (
                <div key={blog.slug} className={styles.card}>
                    <Link href={`/blogpost/${blog.slug}`}>
                        <h3 className={styles.titleSecondary}>{blog.title}</h3>
                    </Link>

                    <p className={styles.metadesc}>
                        {blog.metadesc.length > 120
                            ? blog.metadesc.slice(0, 120) + "..."
                            : blog.metadesc}
                    </p>

                    <Link href={`/blogpost/${blog.slug}`} className={styles.readMore}>
                        Read more →
                    </Link>
                </div>
            ))}

            {loading && <p className={styles.loader}>Loading...</p>}
            {finished && <p className={styles.end}>No more blogs</p>}
        </div>
    );
}
