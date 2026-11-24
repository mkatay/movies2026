import axios from "axios";

export const img_300='https://image.tmdb.org/t/p/w300';
export const img_500='https://image.tmdb.org/t/p/w500'

const  baseURL= "https://api.themoviedb.org/3"

const api = axios.create({
    baseURL: baseURL,
    params: {
        api_key: import.meta.env.VITE_TMDB_API_KEY,
        language: "hu-HU",
        include_adult:false,
        sort_by:"popularity.desc"/*"primary_release_date.desc"||"first_air_date.desc"*/
    }
});

export const getMovies = async (page = 1) => {
    const response = await api.get("/discover/movie", {params: {page} });
    return response.data.results;
}
/*
export const getTVShows = async (page = 1) => {
    const response = await api.get("/discover/tv", {params: {page} });
    return response.data.results;
}*/
export const getTrending = async (page=1) => {
    const response = await api.get("/trending/all/week", {params: {page} });
    return response.data.results;
};
export const getTV=async ()=>{
    const response=await api.get("/discover/tv",{params: {page} })
    return response.data.results
}
export const getCategories=async (type)=>{
        const url=`${baseURL}/genre/${type.trim()}/list?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
        console.log(url);    
       const response=await axios.get(url)
    return response.data.genres
}
export const getSelectedMediaByCateg = async (type,selected_ctg,page = 1) => {
    const response = await api.get(`/discover/${type}?with_genres=${selected_ctg}`, {params: {page} });
    return response.data.results;
}

///search/${type}?query=${searchText}&page=${page}

export const getMedia=async (type,searchText,page)=>{
    const response=await api.get(`/search/${type}?query=${searchText}`,{params:{page}})
    return response.data
}
//trailer:
//const urlVideos=`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${import.meta.env.VITE_API_KEY}`;
export const getTrailer=async (type,id)=>{
    const response=await api.get(`/${type}/${id}/videos`)
    return response.data.results
}

//színészek:
//    const urlCredits=`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${import.meta.env.VITE_API_KEY}`;
export const getCredits=async (type,id)=>{
    console.log(type,id);
    
    const response=await api.get(`/${type}/${id}/credits`)
    return response.data.cast
}

////////////////////////////////////////////
export const getVote=(nr)=>{
  const nrInt=Math.round(nr)
  return '⭐'.repeat(nrInt)
}


const pageTitle=[
      {type:'trending',title:'Popular This Week'},
      {type:'movie',title:'Movies'},
      {type:'tv',title:'TV Series'}
    ]
export const getTitle=(type)=>{
    const selected=pageTitle.find(obj=>obj.type==type)
    return selected.title
}