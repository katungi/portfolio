import Head from 'next/head';
import Page from '../components/page';
import Link from 'next/link';

export default function Home() {
  return (
    <Page description="Hi, I'm Katungi. Software developer and amazing human">
      <article>
        <h1>Daniel Katungi Dennis</h1>

        <p>
          software developer and designer, Tech enthusiast, practicing
          minimalist, and{' '}
          <Link underline href='/music'>
            music lover
          </Link>{' '}
          in search of flow.{' '}
          <Link underline href='/blog'>
            Writing
          </Link>{' '}
          about javascript mostly
        </p>

        <p>
          Making magic at{' '}
          <Link underline href='https://castify.ai' external>
            Castify
          </Link>{' '}
          Writing stuff at
          <Link underline href='https://section.io' external>
            Section
          </Link>{' '}
          and making databases easy to use at
          <Link underline href='https://www.prisma.io/' external>
            Prisma
          </Link>{' '}
        </p>
      </article>
    </Page>
  );
}
