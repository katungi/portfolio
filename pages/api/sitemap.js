const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

export default async (req, res) => {
  const links = [
    { url: '/contact', changefreq: 'daily', priority: 0.3 },
    { url: '/projects', changefreq: 'daily', priority: 0.3 },
    { url: '/music', changefreq: 'daily', priority: 0.3 },
    { url: '/blog', changefreq: 'daily', priority: 0.3 },
  ];

  const stream = new SitemapStream({
    hostname: `https://${req.headers.host}`,
    cacheTime: 600000,
  });

  res.writeHead(200, {
    'Content-Type': 'application/xml',
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};
