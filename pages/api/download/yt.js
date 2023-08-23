import ytdl from "ytdl-core"

// Helper function to send SSE data
const sendSSE = (res, data) => {
  res.write(`data: ${JSON.stringify(data)}\n\n`);
};
const progressStore = {};

export default async function handle(req, res) {
  if (req.method === 'POST') {
    try {
      const videoURL = req.body.url;

      // This starts the video download and streams it to the client
      const video = ytdl(videoURL, { format: 'mp4' });
      video.pipe(res)
      video.on('progress', (chunkLength, downloaded, total) => {
        const percent = downloaded / total * 100;

        // Update the global progress store
        progressStore[videoURL] = `${percent.toFixed(2)}%`;
        // console.log(progressStore[videoURL])
      })

    } catch (error) {
      console.error('Error:', error);
      res.status(500).send("Error occurred while processing the video.");
    }

  } else if (req.method === 'GET') {
    // This is where you handle progress updates via SSE
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // Example data you'd send (replace with your progress tracking)

    sendSSE(res, { progress: progressStore[req.query.url] || '0%' });

  } else {
    res.status(405).send("Method Not Allowed");
  }
}


export const config = {
  api: {
    responseLimit: false
  }
}