import Page from '../components/page';
import Link from 'next/link';
import { RoughNotation } from 'react-rough-notation';

export default function Home() {
  return (
    <Page description="Hi, I'm Katungi. Software developer and amazing human">
      <article>
        <h1>Hi i'm Daniel 👋🏿👋🏿</h1>

        <p>
          <RoughNotation color='#a30000' type='highlight' show='true'>
            I am a Software Engineer 🧑🏿‍💻 {'   '}
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
              lately. 😂😂 {'  '}
            </p>
          </Link>
          <Link underline href='/music'>
            <p>
              {' '}
              You can check out what music 🎶 I am listening to (It's
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
              Tellan Tech 🤖
            </RoughNotation>
          </Link>{' '}
        </p>
        <p>
          Trying to build a startup with my friends at{' '}
          <Link underline href='https://herzina.io' external target='_blank'>
            <RoughNotation color='#ff7700' type='underline' show='true'>
              Herzina 🤞
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
              Prisma 💚💚
            </RoughNotation>
          </Link>{' '}
        </p>

        <p>
          Now that we are friends 👀, you have my permission to roam around 👻
        </p>

        <blockquote>
          {' '}
          <p className='reset'>
            Hint: Press the Command Button or ⌘K to Get Started
          </p>
        </blockquote>
      </article>
    </Page>
  );
}
