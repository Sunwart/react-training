import { useState } from 'react';

import { VideoList } from './VideoList';
import Player from './Player';
import videos from '../data/videos.json';

export default function Videos() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div style={{ padding: 24, textAlign: 'left' }}>
      <h1>Selected video: {selectedVideo}</h1>
      <VideoList videos={videos} onSelect={setSelectedVideo} />
      <Player url={selectedVideo} />
    </div>
  );
}
