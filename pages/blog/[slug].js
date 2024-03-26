import path from 'path';
import matter from 'gray-matter';
import Markdown from "markdown-to-jsx";
import { getSortedPostsData } from "../../lib/blog-parser";
import Page from '../../components/page';
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

function Code({ className, children }) {
    const language = className?.replace("lang-", "");
    return (
        <div className="codeBlock">
            <SyntaxHighlighter language={language?.toLowerCase()} style={materialDark}>
                {children}
            </SyntaxHighlighter>
        </div>
    );
}

export async function getPostContent(slug) {
    const folder = path.join(process.cwd(), "articles/");
    const file = path.join(folder, slug, "index.md");
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return {
        slug,
        content: matterResult.content,
        ...matterResult.data,
    };
}

export async function getStaticPaths() {
    const posts = await getSortedPostsData();
    const paths = posts.map(post => ({
        params: { slug: post.id },
    }));
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const fs = require("fs");
    const slug = params.slug;
    const folder = path.join(process.cwd(), "articles/");
    const file = path.join(folder, slug, "index.md");
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);

    console.log(matterResult)
    const post = {
        slug,
        content: matterResult.content,
        title: matterResult.data.title,
    };
    return {
        props: {
            post,
        },
    };
}

const PostPage = ({ post }) => {
    return (
        <Page description="Hi, I'm Katungi. Software developer and amazing human">
            <article>
                <h1>{post.title}</h1>
                <Markdown
                    options={{
                        overrides: {
                            code: {
                                component: Code,
                            },
                        },
                    }}
                >{post.content}</Markdown>
            </article>
        </Page>
    );
};

export default PostPage;
