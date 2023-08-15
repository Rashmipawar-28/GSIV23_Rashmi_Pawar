import React, { useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MovieCard from '../components/MovieCard'
import getMovieData from '../middleware/MovieService';
export default function MovieList() {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies);
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getMovieData())
    }, [dispatch]);
    useEffect(() => {
        console.log(movies,"list")
    }, [movies]);
    
    const gotoMovieDetails=(movie)=>{
        console.log("clicked")
        navigate(`/movie/${movie}`);
    }
    return (
        <div>
            {
                 movies === undefined?
                (
                    <div>loading Movies</div>
                    
                ):(
                    movies.results.map((movie)=>(
                        <div onClick={()=>gotoMovieDetails(movie.id)}>
                            <MovieCard key={movie.id} moviedata={movie} ></MovieCard>
                         </div>
                      ))
                   
                  )
            }
            
            
        </div>
    )
}
