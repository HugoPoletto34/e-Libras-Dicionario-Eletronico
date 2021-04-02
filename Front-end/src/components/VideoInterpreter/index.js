import styled from 'styled-components';

export default function VideoInterpreter({ src, width, height, controls, loop }) {
  return(
    <video
     width={width}
     height={height}
     controls={controls}
     loop={loop}
    >
      <source
        src={src}
        type={"video/mp4"}
      />
    </video>
  );
}
