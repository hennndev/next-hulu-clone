const API_KEY = process.env.NEXT_PUBLIC_API_KEY

export default {
    trending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    top_rated: {
        title: 'Top Rated',
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    action_movies: {
        title: 'Action Movies',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    comedy_movies: {
        title: 'Comedy',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    horror_movies: {
        title: 'Horor',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    romance_movies: {
        title: 'Romance',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    mystery: {
        title: 'Mystery',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    sci_fi: {
        title: 'Sci-Fi',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878`
    },
    western: {
        title: 'Western',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=37`
    },
    animation: {
        title: 'Animation',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16`
    },
    tv: {
        title: 'TV',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`
    },
}