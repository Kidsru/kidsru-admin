import { useState, useRef, useEffect, useCallback } from "react";
import { ReactComponent as PlayIcon } from "../../../../../../assets/icon/play.svg";
import { ReactComponent as PauseIcon } from "../../../../../../assets/icon/pause.svg";
import { ReactComponent as VolumeIcon } from "../../../../../../assets/icon/volume.svg";
import { ReactComponent as VolumeXIcon } from "../../../../../../assets/icon/volume_x.svg";
import { ReactComponent as RestartIcon } from "../../../../../../assets/icon/restart.svg";

import styles from "./VideoPlayer.module.css";
import loadingPoster from "../../../../../../assets/icon/loading.svg";

function VideoPlayer({ src, poster = null }) {
  const videoRef = useRef(null);
  const volumeSliderRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [lastVolume, setLastVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [ended, setEnded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const updateVolumeSliderBackground = useCallback((value) => {
    const percent = value * 100;
    if (volumeSliderRef.current) {
      volumeSliderRef.current.style.background = `linear-gradient(to right, #396aff ${percent}%, rgba(255,255,255,0.3) ${percent}%)`;
    }
  }, []);

  const togglePlay = () => {
    if (!isLoaded) return;

    const video = videoRef.current;
    if (!video) return;

    if (ended) {
      video.currentTime = 0;
      video.play();
      setEnded(false);
      setPlaying(true);
    } else if (playing) {
      video.pause();
      setPlaying(false);
    } else {
      video.play();
      setPlaying(true);
    }
  };

  const toggleMute = () => {
    if (volume > 0) {
      setLastVolume(volume);
      setVolume(0);
    } else {
      setVolume(lastVolume || 0.3);
    }
  };

  const handleVolumeChange = (e) => {
    const value = parseFloat(e.target.value);
    setVolume(value);
    if (value > 0) setLastVolume(value);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    const current = video.currentTime;
    const duration = video.duration;
    setProgress((current / duration) * 100);
  };

  const handleEnded = () => {
    setEnded(true);
    setPlaying(false);
  };

  const handleSeek = (e) => {
    const video = videoRef.current;
    if (!video || !isLoaded) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * video.duration;
    video.currentTime = newTime;
    setProgress((newTime / video.duration) * 100);
  };

  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (isLoaded && volumeSliderRef.current) {
      updateVolumeSliderBackground(volume);
    }
  }, [isLoaded, volume, updateVolumeSliderBackground]);

  return (
    <div className={styles.container}>
      <video
        ref={videoRef}
        src={src}
        poster={poster !== null ? (isLoaded ? poster : loadingPoster) : undefined}
        className={styles.video}
        onTimeUpdate={handleTimeUpdate}
        onClick={togglePlay}
        onEnded={handleEnded}
        onLoadedData={handleLoadedData}
      />

      {isLoaded && (
        <div className={styles.controls}>
          <button className={ended ? styles.rest_btn : styles.play_btn} onClick={togglePlay}>
            {ended ? (
              <RestartIcon className={styles.play_icon} />
            ) : playing ? (
              <PauseIcon className={styles.play_icon} />
            ) : (
              <PlayIcon className={styles.play_icon} />
            )}
          </button>

          <button className={styles.volume_btn} tabIndex={0}>
            <div className={styles.volume_icon_wrapper} onClick={toggleMute}>
              {volume === 0 ? (
                <VolumeXIcon className={styles.volume_icon} />
              ) : (
                <VolumeIcon className={styles.volume_icon} />
              )}
            </div>
            <label className={styles.volume_slider_wrapper}>
              <input
                ref={volumeSliderRef}
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className={styles.volume_slider}
              />
            </label>
          </button>

          <div className={styles.progress_bar} onClick={handleSeek}>
            <div className={styles.progress} style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
