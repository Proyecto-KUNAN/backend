import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { speakerState } from '../lib/atoms';

const useAudio = (url) => {
  const [audio, setAudio] = useState(null);
  const [playing, setPlaying] = useState(false);
  const speaker = useRecoilValue(speakerState);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    setAudio(new Audio(url));

    audio?.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio?.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  useEffect(() => {
    if (!audio) return;
    audio.currentTime = 0;
    playing ? audio?.play() : audio?.pause();
  }, [playing]);

  const createAttr = () => {
    return {
      onFocus: () => {
        if (speaker) setPlaying(true);
      },
      onBlur: () => {
        setPlaying(false);
      },
    };
  };

  return { playing, toggle, createAttr };
};

export default useAudio;
