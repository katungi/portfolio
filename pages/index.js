import Page from '../components/page';
import Link from 'next/link';
import { RoughNotation } from 'react-rough-notation';

export default function Home() {
  return (
    <Page description="Hi, I'm Katungi. Software developer and amazing human">
      <article>
        <h1>Daniel Katungi Dennis</h1>

        <p>
          <RoughNotation color='#a30000' type='highlight' show='true'>
            software developer
          </RoughNotation>
          , Tech enthusiast, practicing minimalist.{' '}
          <Link underline href='/music'>
            I am a huuuuge music lover
          </Link>{' '}
          in search of flow.{' '}
          <Link underline href='/blog'>
            I Write alot
          </Link>{' '}
          about javascript mostly
        </p>

        {/* <p>
          <RoughNotation color='#b2b1cf' type='circle' show='true'>
            Hint: Press the Command Button
          </RoughNotation>
        </p> */}

        <p>
          Making magic at{' '}
          <Link underline href='https://castify.ai' external>
            <RoughNotation color='#00afb5' type='underline' show='true'>
              Castify
            </RoughNotation>
          </Link>{' '}
          , Technically Writting at{' '}
          <Link underline href='https://section.io' external>
            <RoughNotation color='#ff7700' type='underline' show='true'>
              Section
            </RoughNotation>
          </Link>{' '}
          and making databases easy to use at{' '}
          <Link underline href='https://www.prisma.io/' external>
            <RoughNotation color='#5dfdcb' type='underline' show='true'>
              Prisma
            </RoughNotation>
          </Link>{' '}
        </p>
      </article>
    </Page>
  );
}
