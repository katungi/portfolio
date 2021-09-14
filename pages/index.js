import Page from '../components/page';
import Link from 'next/link';

export default function Home() {
  return (
    <Page description="Hi, I'm Katungi. Software developer and amazing human">
      <article>
        <h1>Daniel Katungi Dennis</h1>

        <p>
          software developer , Tech enthusiast, practicing minimalist.{' '}
          <Link underline href='/music'>
            Also a music lover
          </Link>{' '}
          in search of flow.{' '}
          <Link underline href='/blog'>
            I Write alot
          </Link>{' '}
          about javascript mostly
        </p>

        <p>
          Making magic at ,{' '}
          <Link underline href='https://castify.ai' external>
            Castify
          </Link>
          Writing stuff at{' '}
          <Link underline href='https://section.io' external>
            Section
          </Link>{' '}
          and making databases easy to use at{' '}
          <Link underline href='https://www.prisma.io/' external>
            Prisma
          </Link>{' '}
        </p>
      </article>
    </Page>
  );
}
