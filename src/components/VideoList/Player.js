import { useState, useEffect } from 'react';
import { PlayerWrapper, StyledPlayer } from './VideoList.styled';

export default function Player({ url }) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    setIsVideoLoaded(false);
  }, [url]);

  const showLoade = url && !isVideoLoaded;
  const playerSize = isVideoLoaded ? '100%' : 0;

  return (
    <>
      {showLoade && <h2>LOADING... ... ...</h2>}
      {url && (
        <PlayerWrapper>
          <StyledPlayer
            url={url}
            width={playerSize}
            height={playerSize}
            onReady={() => setIsVideoLoaded(true)}
            controls
          />
        </PlayerWrapper>
      )}
    </>
  );
}
