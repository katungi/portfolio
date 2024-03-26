import fs from "fs";
import path from "path";
import matter from "gray-matter";

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
        
        const dateString = matterResult.data.date ? matterResult.data.date.toISOString() : null;
        
        return {
            id: dirName,
            ...matterResult.data,
            date: dateString
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
