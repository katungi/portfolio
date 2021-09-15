import Page from '../components/page';

const Contact = () => {
  return (
    <Page title='Contact' footer={false} description='Get in touch.'>
      <article>
        <p>Get in touch.</p>

        <blockquote>
          <a
            href='mailto:dankatdennis@gmail.com?subject=Hello'
            className='reset'
          >
            dankatdennis@gmail.com
          </a>
        </blockquote>
      </article>
    </Page>
  );
};

export default Contact;
