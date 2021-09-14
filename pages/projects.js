import Page from '../components/page';
import Link from 'next/link';

import { GitHub } from '../components/icons/index';

export default function Projects() {
  return (
    <Page description="Hi, I'm Katungi. Software developer and amazing human">
      <article>
        <h1>Projects</h1>

        <p>
          This page shows my coolest, dummest, successful, failed...{' '}
          <Link underline href='/music'>
            Projects
          </Link>{' '}
        </p>

        <p>
          Still working on the page, but feel free to stalk my ,{' '}
          <Link underline href='https://github.com/katungi' external>
            <a>
              <GitHub /> GitHub
            </a>
          </Link>
        </p>
      </article>
    </Page>
  );
}
