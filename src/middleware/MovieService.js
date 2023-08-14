import {setMovies} from '../redux/actions/Actions' 

export default function getMovieData(){
    return (dispatch)=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2U2YmNjMDM0YjAzNjE2NWMwMmEyMDMxNDNmMjE0MCIsInN1YiI6IjY0ZDlmMjkxMzcxMDk3MDBlMjI2YTQzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QVpii1xrVI4vmgh6sAFOgvOFNm1PEM_Ke-k29ssguTM'
            }
          };
          
          fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                dispatch(setMovies(response))
            })
            .catch(err => console.error(err));
    }
}
