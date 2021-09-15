import NextHead from 'next/head';
import { useTheme } from 'next-themes';

const defaultOgImage =
  'https://res.cloudinary.com/dankatdennis2758/image/upload/v1631639540/ludzccptuc40eoq2qsbw.png';

const Head = ({
  title = 'Katungi',
  description = "Hi, I'm Katungi. Software developer and amazing human",
  image = defaultOgImage,
  children,
}) => {
  const { systemTheme } = useTheme();

  return (
    <NextHead>
      {/* Preload font */}
      <link
        rel='preload'
        href='https://assets.vercel.com/raw/upload/v1587415301/fonts/2/inter-var-latin.woff2'
        as='font'
        type='font/woff2'
        crossOrigin='anonymous'
      />

      {/* Title */}
      <title>{title}</title>
      <meta name='og:title' content={title} />

      {/* Description */}
      <meta name='description' content={description} />
      <meta name='og:description' content={description} />

      {/* Image */}
      <meta name='twitter:image' content={defaultOgImage} />
      <meta name='og:image' content={defaultOgImage} />

      {/* URL */}
      <meta name='og:url' content='https://katungi.vercel.app' />

      {/* General */}
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta httpEquiv='Content-Language' content='en' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@WarriorRapid' />
      <meta name='apple-mobile-web-app-title' content='Katungi' />
      <meta name='author' content='Daniel Dennis' />

      {/* RSS feed */}
      <link
        rel='alternate'
        type='application/rss+xml'
        title='RSS Feed for katungi.vercel'
        href='/feed.xml'
      />

      {/* Favicons */}
      <link rel='manifest' href='/favicons/manifest.json' />
      <meta name='theme-color' content='#000000' />
      <link rel='mask-icon' href='/favicons/og.svg' color='#000000' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/favicons/apple-touch-icon-120x120.png'
      />
      {children}
    </NextHead>
  );
};

export default Head;
