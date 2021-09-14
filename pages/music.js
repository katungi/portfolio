import Page from '../components/page';
import Link from 'next/link';
import { RoughNotation } from 'react-rough-notation';

import { Music } from '../components/icons/index';

export default function MusicPage() {
  return (
    <Page description="Hi, I'm Katungi. Software developer and amazing human">
      <article>
        <h1>Music</h1>

        <p>
          This page shows a list of music I am{' '}
          <RoughNotation color='#5dfdcb' type='underline' show='true'>
            currently obsessing over
          </RoughNotation>
          , gotten from my{' '}
          <Link
            underline
            href='https://www.deezer.com/us/profile/3592873264/loved'
          >
            Deezer playlist
          </Link>{' '}
        </p>

        <p>
          Still working on the page, but feel free to stalk my ,{' '}
          <Link
            underline
            href='https://www.deezer.com/us/profile/3592873264/loved'
            external
          >
            <a>
              <Music />{' '}
              <RoughNotation color='#a30000' type='highlight' show='true'>
                Deezer playlist
              </RoughNotation>
            </a>
          </Link>
        </p>
      </article>
    </Page>
  );
}
