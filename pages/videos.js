import Page from '../components/page';
import headerStyles from '../components/header/header.module.css';
import axios from 'axios';
import { useState } from 'react';

export default function Videos() {
  const [executing, setExecuting] = useState(false)

  async function downloadFromURL() {
    setExecuting(true)
    const url = document.getElementById('url').value;
    const quality = '360p';
    const payload = { url, quality };

    // Establish SSE connection first to get progress updates
    const sse = new EventSource('/api/download/yt');
    console.log(sse)
    sse.onopen = () => console.log('SSE connection opened.');
    sse.onerror = () => console.log('Error occurred on SSE connection.');
    sse.addEventListener('progress', (event) => {
      console.log("receiving data:::", event)
      const data = JSON.parse(event.data);
      window.document.getElementById('progress').innerHTML = data.progress;
    }, { once: false, capture: false });

    // Then, initiate the video download
    const response = await axios.post('/api/download/yt', payload, { responseType: 'blob' });

    const blob = new Blob([response.data], { type: 'video/mp4' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'video.mp4';
    link.click();
    setExecuting(false)
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
        {executing && <p>Downloading ...</p>}
      </div>
    </Page >
  );
}
