import Page from '../components/page';
import headerStyles from '../components/header/header.module.css';
import axios from 'axios';

export default function Videos() {

  async function downloadFromURL() {
    const url = document.getElementById('url').value;
    const quality = '360p';
    const payload = { url, quality };

    // Establish SSE connection first to get progress updates
    const sse = new EventSource('/api/download/yt');
    console.log(sse)
    sse.onopen = () => console.log('SSE connection opened.');
    sse.onerror = () => console.log('Error occurred on SSE connection.');
    // sse.onmessage = (event) => {
    //   console.log("receiving data:::", event.data)
    //   // const data = JSON.parse(event.data);
    //   // console.log(data.progress)
    //   // window.document.getElementById('progress').innerHTML = data.progress;
    // };

    sse.addEventListener('progress', (event) => {
      console.log("receiving data:::", event)
    }, { once: false, capture: false });

    // Then, initiate the video download
    const response = await axios.post('/api/download/yt', payload, { responseType: 'blob' });

    const blob = new Blob([response.data], { type: 'video/mp4' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'video.mp4';
    link.click();
  }


  return (
    <Page description="Hi, I'm Katungi. Software developer and amazing human">
      <article>
        <h1>Videos</h1>
        <form onSubmit={downloadFromURL}>
          <label htmlFor="name">Download YT Shorts here:</label>
          <br />
          <input className='video-input' type="text" id="url" name="url" placeholder='Paste your Short URL' />
        </form>
        <button className={headerStyles.command} style={{
          marginTop: '10px',
          border: '1px solid grey',
          marginLeft: '0px',
          width: '100px',
        }}
          onClick={downloadFromURL}
          type='none'
        >Download</button>
      </article>
      <div id=''>
        <h3 id='progress'></h3>
      </div>
    </Page >
  );
}
