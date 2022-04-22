import Page from '../components/page';

const Contact = () => {
  return (
    <Page title='Contact' footer={false} description='Get in touch.'>
      <article>
        <p>
          If you are in Nairobi, and want to go for a walk/ get a beer/ work on
          something ...
        </p>

        <blockquote>
          <a
            href='mailto:dankatdennis@gmail.com?subject=Hello'
            className='reset'
          >
            dankatdennis@gmail.com
          </a>
        </blockquote>

        <p>
          Alternatively, you can call me ... But not at weird hours...My cat
          doesn't like that
        </p>
        <blockquote>
          <p href='tel:+2547113055307' className='reset'>
            tel: +2547113055307
          </p>
        </blockquote>
      </article>
    </Page>
  );
};

export default Contact;
