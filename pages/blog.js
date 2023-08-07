// import { useEffect } from 'react';
import Page from '../components/page';
// import Entry from '../components/entry';
// import { RoughNotation } from 'react-rough-notation';
// import axios from 'axios';

export default function Blog() {
  return (
    <Page description="Hi, I'm Katungi. Software developer and amazing human">
      <article>Blog</article>
    </Page>
  )
}
// export default function Blog({ data }) {
//   return (
//     <Page description="Hi, I'm Katungi. Software developer and amazing human">
//       <article>
//         <h1>Blog</h1>

//         <p>
//           This is a curated list of Blog articles 📓{' '}
//           <RoughNotation color='#5dfdcb' type='underline' show='true'>
//             I have written{' '}
//           </RoughNotation>
//           here and there 💬
//         </p>
//         {/* {data.map((entry) => {
//           return (
//             <Entry
//               key={entry.id}
//               title={entry.title}
//               image={entry.image[0]}
//               href={entry.link[0]}
//               description={entry.description[0]}
//             />
//           );
//         })} */}
//       </article>
//     </Page>
//   );
// }

// export async function getStaticProps(context) {
//   const result = await axios.get(
//     'https://section-author-feeds.louisefindlay.com/feed/author/daniel-katungi'
//   );

//   return {
//     props: {
//       data: result.data,
//     }, // will be passed to the page component as props
//   };
// }
