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
            I tinker with React (Next.js), Node.js, TypeScript . I also write React Native, GO and a bit of Rust.{' '}
          </p>
        </p>

        <p>
          {' '}
          I am currently getting my hands dirty with a lot of framework stuff. Checkout : {'  '}
          <Link
            underline
            href='https://urban-js.dankat.io/'
            external
            target='_blank'
          >
            <RoughNotation color='#ff7700' type='underline' show='true'>
              Urban.Js (A minimalist react meta framework) ↗
            </RoughNotation>
          </Link>{' '}
        </p>

        <p>
          {' '}
          Full-stack Developer at{' '}
          <Link
            underline
            href='https://www.jumba.com/'
            external
            target='_blank'
          >
            <RoughNotation color='#ff7700' type='underline' show='true'>
              Jumba
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
