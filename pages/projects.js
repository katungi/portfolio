import Page from '../components/page';
import Link from 'next/link';
import Entry from '../components/entry/index';

import { GitHub } from '../components/icons/index';

export default function Projects() {
  return (
    <Page description="Hi, I'm Katungi. Software developer and amazing human">
      <article>
        <h1>Projects</h1>

        <p>
          This page shows some of my projects.{' '}
          <Link underline href='/music'>
            Projects
          </Link>{' '}
        </p>

        <p>
          I am only highlighting some that I am proud of. You can view more on
          my{' '}
          <Link underline href='https://github.com/katungi' external>
            <a>
              <GitHub /> GitHub
            </a>
          </Link>
        </p>
      </article>
      <article>
        <Entry
          title='Terminex'
          description='A Cross-platform Terminal Emulator built using Electron'
          image='https://github.com/katungi/terminex/raw/main/images/terminex.png'
          href='https://github.com/katungi/terminex'
          position='top'
        />

        <Entry
          title='Eyero'
          description='Google Solution Semi-finalist. A machine learning app that detects eye diseases. Made using Tensorflow and Flutter'
          image='https://res.cloudinary.com/dankatdennis2758/image/upload/v1631775385/dtqydxupse0ghxd8tqhj.png'
          href='https://eyero.netlify.app/'
          position='top'
        />

        <Entry
          title='HostGuest'
          description='A full-stack app for booking experience. Made using Node.js, Next.js, Postgres, Prisma'
          image='https://res.cloudinary.com/dankatdennis2758/image/upload/v1631776160/ndd8xia6hsqrxenh6gq6.png'
          href='https://hostguest.app/'
          position='top'
        />

        <Entry
          title='Herzina'
          description='A full-stack art vending system made using flutter, Node.js, Next.js, Mongodb'
          image='https://res.cloudinary.com/dankatdennis2758/image/upload/v1631776120/pnirogzzaivf8xwmbkx5.png'
          href='https://play-lh.googleusercontent.com/iFQ7PLMRUE5W2X0lz9LUNIIkhaJ-wKoDJ2ZRzGJqZ-K5EEIJp0ZSJEW4tbvDTZ616tA=w1365-h667-rw'
          position='top'
        />

        <Entry
          title='Duka API'
          description='Easy to integrate E-commerce API for all your ecommerce needs'
          image=''
          href='https://github.com/katungi/Duka-API'
          position='top'
        />

        <Entry
          title='desktop weather app
'
          description='A demo project for an article about creating a desktop app using Electron and React'
          image='https://www.section.io/engineering-education/desktop-application-with-react/electron-demo-result.png'
          href='https://www.section.io/engineering-education/desktop-application-with-react/'
          position='top'
        />

        <p>Honorable Mentions 🤣 </p>

        <Entry
          title='Fupiza'
          description='First ever project I worked on. A link shortening website. Made using Ruby on Rails'
          image='https://res.cloudinary.com/dankatdennis2758/image/upload/v1631776880/wiewvnamyso2rxhnl6cp.png'
          href='https://fupiza.herokuapp.com/'
          position='top'
        />

        <Entry
          title='Stremo'
          description='A Ui clone of hulu made using Next.js and tailwind for practice'
          image='https://res.cloudinary.com/dankatdennis2758/image/upload/v1631776997/tnsa1jsx5y9nzl3ingis.png'
          href='https://stremo.vercel.app/'
          position='top'
        />
      </article>
    </Page>
  );
}
