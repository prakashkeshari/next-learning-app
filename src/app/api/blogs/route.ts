import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export interface BlogPost {
    title: string;
    content: string;
    author: string;
    metadesc: string;
    slug: string;
}

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get('page') || '1');
        const data = await getBlogPosts({ page });
        return NextResponse.json(data);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Unable to fetch blogs" }, { status: 500 });
    }
}

export const getBlogPosts = async ({ page = 1 }: { page?: number }): Promise<{ blogs: BlogPost[], total: number }> => {
    const perPage = 5;
    const blogs = await getAllBlogs();

    const start = (page - 1) * perPage;
    const end = page * perPage;
    const paginatedBlogs = blogs.slice(start, end);
    return { blogs: paginatedBlogs, total: blogs.length };
};

const blogDir = path.join(process.cwd(), 'public', 'blogdata');

export const getAllBlogs = async (): Promise<BlogPost[]> => {
    const files = await fs.promises.readdir(blogDir);
    // sort for stable pagination
    const sortedFiles = files.sort();
    const blogs: BlogPost[] = [];

    for (const file of sortedFiles) {
        const filePath = path.join(blogDir, file);
        const fileContent = await fs.promises.readFile(filePath, 'utf-8');
        try {
            const blog = JSON.parse(fileContent);
            blogs.push(blog);
        } catch (error) {
            console.error(`Error parsing JSON from ${file}:`, error);
        }
    }
    return blogs;
};


