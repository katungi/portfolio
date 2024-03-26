import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from 'remark-html';

const postDir = path.join(process.cwd(), "articles");

export async function getSortedPostsData() {
    const dirNames = fs.readdirSync(postDir).filter(dirName => {
        return fs.statSync(path.join(postDir, dirName)).isDirectory();
    });
    
    const allPostData = dirNames.map(dirName => {
        const fullPath = path.join(postDir, dirName, "index.md");
        
        if (!fs.existsSync(fullPath)) return null;
        
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents);
        
        // Convert date to a string if it exists
        const dateString = matterResult.data.date ? matterResult.data.date.toISOString() : null;
        
        return {
            id: dirName,
            ...matterResult.data,
            date: dateString // Use the stringified date
        };
    }).filter(post => post !== null);

    return allPostData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}
