import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';

export default function MovieCard( moviedata) {
    useEffect(() => {
        console.log(moviedata,"cards")
    }, []);
    
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="200"
        image={`https://image.tmdb.org/t/p/original${moviedata.moviedata.poster_path}`}
        alt="green iguana"
      />
      <CardContent>
      <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="h5" component="div">
                {moviedata.moviedata.title}
            </Typography>
            <div>
                Ratings {moviedata.moviedata.vote_average}
            </div>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {moviedata.moviedata.overview.length > 80 ?
                `${moviedata.moviedata.overview.substring(0, 80)}...` : moviedata.moviedata.overview
            }
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}
