import Page from '../components/page';
import Link from 'next/link';

import { Pin } from '../components/icons/index';

export default function Videos() {
  return (
    <Page description="Hi, I'm Katungi. Software developer and amazing human">
      <article>
        <h1>Videos</h1>

        <p>
          This page shows a list of videos I have with or without my consent
          appeared in, fetched from
          <Link underline href='youtube.com'>
            YouTube
          </Link>{' '}
        </p>

        <p>
          {' '}
        Disclaimer: Some of them are embarassing to me. Do not
          mention, just watch
        </p>

        <p>
          Still working on the page, but feel free to go back{' '}
          <Link underline href='/' external>
            Home
          </Link>
        </p>
      </article>
    </Page>
  );
}
