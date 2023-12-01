// En src/components/MoviePage.tsx
import React, { useState } from 'react';
import { Button, Card } from 'antd';
import classNames from 'classnames';
import './MoviePage.css'; // Asegúrate de tener un archivo CSS para tus estilos

interface Movie {
  title: string;
  videoUrl: string;
}

interface MoviePageProps {
  movies: Movie[];
}

const MoviePage: React.FC<MoviePageProps> = ({ movies }) => {
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  const playVideo = (videoUrl: string) => {
    setCurrentVideo(videoUrl);
  };

  return (
    <div className="movie-page">
      <h1 className="movie-page-title">Películas</h1>
      <div className="movie-list">
        {movies.map((movie, index) => (
          <Card
            key={index}
            className={classNames('movie-card', { 'last-card': index === movies.length - 1 })}
          >
            <h2 className="movie-title">{movie.title}</h2>
            <Button
              type="primary"
              className="play-button"
              onClick={() => playVideo(movie.videoUrl)}
            >
              Reproducir
            </Button>
          </Card>
        ))}
      </div>
      {currentVideo && (
        <div className="video-container">
          <video controls autoPlay src={currentVideo} className="current-video" />
          <Button className="back-button" onClick={() => setCurrentVideo(null)}>
            Volver
          </Button>
        </div>
      )}
    </div>
  );
};

export default MoviePage;
