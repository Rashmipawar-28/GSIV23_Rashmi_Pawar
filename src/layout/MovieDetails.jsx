import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

export default function MovieDetails() {
  const {movie} = useLocation();
  useEffect(() => {
    console.log(movie,"details page")
}, []);
  return (
    <div>
      <h1>Movie details</h1>
    </div>
  )
}
