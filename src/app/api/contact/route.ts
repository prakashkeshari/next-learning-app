import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// Folder to store contact files
const contactDir = path.join(process.cwd(), "public/contactdata");

export async function POST(request: Request) {
    try {
        const body = await request.json(); // directly read request body

        // Ensure directory exists
        try {
            await fs.access(contactDir);
        } catch {
            await fs.mkdir(contactDir, { recursive: true });
        }

        // Determine file name
        const files = await fs.readdir(contactDir);
        const newFileName = `${files.length + 1}.json`;

        // Save file
        await fs.writeFile(
            path.join(contactDir, newFileName),
            JSON.stringify(body, null, 2)
        );

        return NextResponse.json({
            success: true,
            message: "Contact saved successfully",
            file: newFileName,
            data: body
        });

    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json(
            { error: "Unable to save contact" },
            { status: 500 }
        );
    }
}
