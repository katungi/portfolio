import Page from '../components/page';
import Link from 'next/link';
import { RoughNotation } from 'react-rough-notation';

export default function Home() {
  return (
    <Page description="Hi, I'm Katungi. Software developer and amazing human">
      <article>
        <h1>Hi i'm Daniel ππΏππΏ</h1>

        <p>
          <RoughNotation color='#a30000' type='highlight' show='true'>
            I am a Software Engineer π§πΏβπ» {'   '}
          </RoughNotation>
          <p>
            {' '}
            Backend / Cloud Developer for most part (Node, React). Typescript
            Nerd, Flutter and Rust once in a while.
          </p>
          {/* <Link underline href='/projects'>
            <p>
              {' '}
              You can check some of the cool/weird/boring stuff i've been doing
              lately. ππ {'  '}
            </p>
          </Link>
          <Link underline href='/music'>
            <p>
              {' '}
              You can check out what music πΆ I am listening to (It's
              semi-realtime).{' '}
            </p>
          </Link>{' '}
          <Link underline href='/blog'>
            I write technical articles sometimes. Check out my articles!
          </Link>{' '} */}
        </p>

        <p>
          {' '}
          Full-stack Developer at{' '}
          <Link
            underline
            href='https://www.thewoundpros.com'
            external
            target='_blank'
          >
            <RoughNotation color='#ff7700' type='underline' show='true'>
              Tellan Tech π€
            </RoughNotation>
          </Link>{' '}
        </p>
        <p>
          Trying to build a startup with my friends at{' '}
          <Link underline href='https://herzina.io' external target='_blank'>
            <RoughNotation color='#ff7700' type='underline' show='true'>
              Herzina π€
            </RoughNotation>
          </Link>{' '}
        </p>
        <p>
          Technical Writer at{' '}
          <Link underline href='https://section.io' external target='_blank'>
            <RoughNotation color='#ff7700' type='underline' show='true'>
              Section
            </RoughNotation>
          </Link>{' '}
          and contributes to making databases easy to use at{' '}
          <Link
            underline
            href='https://www.prisma.io/'
            external
            target='_blank'
          >
            <RoughNotation color='#5dfdcb' type='underline' show='true'>
              Prisma ππ
            </RoughNotation>
          </Link>{' '}
        </p>

        <p>
          Now that we are friends π, you have my permission to roam around π»
        </p>

        <blockquote>
          {' '}
          <p className='reset'>
            Hint: Press the Command Button or βK to Get Started
          </p>
        </blockquote>
      </article>
    </Page>
  );
}
