import Page from '../../components/page';
import { getSortedPostsData } from '../../lib/blog-parser';
import { RoughNotation } from 'react-rough-notation';
import Entry from '../../components/entry';

export default function Blog({ result }) {
  console.log(result)
  return (
    <Page description="Hi, I'm Katungi. Software developer and amazing human">
      <article>
        <h1>Blog</h1>

        <p>
          This is a curated list of Blog articles 📓{' '}
          <RoughNotation color='#5dfdcb' type='underline' show='true'>
            I have written{' '}
          </RoughNotation>
          here and there 💬
        </p>
        {result.map((entry) => {
          const href = `/blog/${entry.id}`;
          return (
            <Entry
              key={entry.id}
              title={entry.title}
              // image={entry.image[0].url}
              href={href}
              description={entry.url}
            />
          );
        })}
      </article>
    </Page>
  );
}

export async function getStaticProps(context) {
  const result = await getSortedPostsData();

  // console.log("Server Result",result)
  return {
    props: {
      result
    },
  };
}
