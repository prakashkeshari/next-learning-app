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

export async function GET() {
    try {
        const blogs = await getBlogPosts();
        return NextResponse.json(blogs);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Unable to fetch blogs" }, { status: 500 });
    }
}


const blogDir = path.join(process.cwd(), 'public', 'blogdata');

export const getBlogPosts = async (): Promise<BlogPost[]> => {
    const files = await fs.promises.readdir(blogDir);
    const blogs: BlogPost[] = [];

    for (const file of files) {
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



