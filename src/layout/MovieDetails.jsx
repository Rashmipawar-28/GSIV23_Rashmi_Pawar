import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function MovieDetails() {
  const {movieId} = useParams()
  const [moviedetails,setMovieDeatils] = useState({})

  useEffect(() => {
    console.log(movieId,"details page")
    getMovieDetails()
    console.log(moviedetails,"moviedetails")
}, []);

const getMovieDetails =()=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2U2YmNjMDM0YjAzNjE2NWMwMmEyMDMxNDNmMjE0MCIsInN1YiI6IjY0ZDlmMjkxMzcxMDk3MDBlMjI2YTQzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QVpii1xrVI4vmgh6sAFOgvOFNm1PEM_Ke-k29ssguTM'
    }
  };
  
  fetch(`https://api.themoviedb.org/3/movie/${movieId}?append_to_response=credits&language=en-US`, options)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      setMovieDeatils(response)
    })
    .catch(err => console.error(err));
}

const getMovieLength=(num)=>{
   var hours = Math.floor(num / 60);  
   var minutes = num % 60;
   return hours + ":" + minutes;         
}
  return (
    <div>
      <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={`https://image.tmdb.org/t/p/original${moviedetails.poster_path}`}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
        <Box sx={{ display: 'flex',alignItems:'center' }}>
            <Typography component="div" variant="h5">
              {moviedetails.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              ({moviedetails.vote_average})
            </Typography>
        </Box>
        <Box sx={{ display: 'flex',alignItems:'center' }}>
          <Typography component="div" >
            <span>{(new Date(moviedetails.release_date).getFullYear())}</span> |
            <span>{getMovieLength(moviedetails.runtime)}</span> |
          {
              moviedetails.credits.crew.length > 0 &&
              moviedetails.credits.crew.map((crew)=>(
                
                  crew.job === "Director" ?
                  <span>{crew.name}</span> : <></>
                
              ))
            }
          </Typography>
        </Box>
        <Box sx={{ display: 'flex',alignItems:'center' }}>
          <Typography component="div" >
          Cast :{
              moviedetails.credits.cast.length > 0 &&
              moviedetails.credits.cast.slice(0, 4).map((cast)=>(
                <span>{cast.name}</span>
              ))
            }...
            </Typography>
        </Box>
        <Box>
          Description : {moviedetails.overview}
        </Box>
        </CardContent>
      </Box>
    </Card>
    </div>
  )
}
