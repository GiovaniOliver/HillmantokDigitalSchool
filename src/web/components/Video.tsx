import React from 'react';
import ReactPlayer from 'react-player';

interface VideoProps {
  url: string;
  thumbnail?: string;
  className?: string;
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
}

export const Video = ({
  url,
  thumbnail,
  className = '',
  onPlay,
  onPause,
  onEnded
}: VideoProps) => {
  return (
    <div className={`relative aspect-video rounded-lg overflow-hidden ${className}`}>
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        light={thumbnail}
        playing={false}
        controls
        onPlay={onPlay}
        onPause={onPause}
        onEnded={onEnded}
        config={{
          file: {
            attributes: {
              style: {
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }
            }
          }
        }}
      />
    </div>
  );
}; 