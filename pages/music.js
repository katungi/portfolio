import { useEffect, useState } from 'react';
import Page from '../components/page';
import Link from 'next/link';
import { RoughNotation } from 'react-rough-notation';
import { Music } from '../components/icons/index';
import axios from 'axios';
import Entry from '../components/entry';

export default function MusicPage({ data }) {
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
        {data.map((entry) => {
          return (
            <Entry
              key={entry.id}
              title={entry.title_short}
              image={entry.album.cover_xl}
              href={entry.link}
              description={entry.artist.name}
            />
          );
        })}
      </article>
    </Page>
  );
}

export async function getStaticProps(context) {
  const data = await axios.get('https://api.deezer.com/playlist/9469384682');

  return {
    props: {
      data: data.data.tracks.data,
    }, // will be passed to the page component as props
  };
}
