import { NextRequest, NextResponse } from 'next/server';
import { BlogPost, getAllBlogs } from "../route";

export async function GET(
    request: NextRequest,
    context: { params: Promise<{ slug: string }> }
) {
    const { slug } = await context.params;
    try {
        const blogs = await getBlogPost(slug);
        return NextResponse.json(blogs);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Unable to fetch blogs" }, { status: 500 });
    }
}


export const getBlogPost = async (slug: string): Promise<BlogPost | null> => {
    const blogs = await getAllBlogs();
    return blogs.find((blog) => blog.slug === slug) || null;
};


