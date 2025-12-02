
import * as fs from 'fs';
import { NextResponse } from 'next/server';
import { BlogPost, getBlogPosts } from "../route";

export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
) {
    const { slug } = params;
    try {
        const blogs = await getBlogPost(slug);
        return NextResponse.json(blogs);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Unable to fetch blogs" }, { status: 500 });
    }
}


export const getBlogPost = async (slug: string): Promise<BlogPost | null> => {
    const blogs = await getBlogPosts();
    return blogs.find((blog) => blog.slug === slug) || null;
};


