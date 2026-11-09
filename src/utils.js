import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: import.meta.env.VITE_TMDB_API_KEY,
        language: "hu-HU",
        include_adult:false,
        sort_by: "popularity.desc"
    }
});

export const getMovies = async (page = 1) => {
    const response = await api.get("/discover/movie", {params: {page} });
    return response.data.results;
}

export const getTVShows = async (page = 1) => {
    const response = await api.get("/discover/tv", {params: {page} });
    return response.data.results;
}

export const getTrending = async () => {
    const response = await api.get("/trending/all/week");
    return response.data.results;
};
