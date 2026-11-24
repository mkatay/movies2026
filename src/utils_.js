import axios from "axios";

export const img_300='https://image.tmdb.org/t/p/w300';
export const img_500='https://image.tmdb.org/t/p/w500'

const baseURL="https://api.themoviedb.org/3"

const api=axios.create({
  baseURL:baseURL,  
  params:{
    api_key:import.meta.env.VITE_TMDB_API_KEY,
    language:"hu-HU",
    include_adult:false,
    sort_by:"popularity.desc"
  }  
})

export const getTrendings=async (page=1)=>{
    const response=await api.get("/trending/all/week",{params:{page}})
    return response.data.results
}
/*
export const getMovies=async ()=>{
    const response=await api.get("/discover/movie")
    return response.data.results
}*/
export const getTV=async ()=>{
    const response=await api.get("/discover/tv")
    return response.data.results
}

export const getMedia=async (type,searchText,page)=>{
    const response=await api.get(`/search/${type}?query=${searchText}`,{params:{page}})
    return response.data
}
export const getCategories=async (type)=>{
    const url=`${baseURL}/genre/${type}/list?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
    //console.log(url);  
    const response=await axios.get(url)
    return response.data.genres
}

export const getSelectedMediaByCateg=async (type,selectedCtgString,page=1)=>{
    const response=await api.get(`/discover/${type}?with_genres=${selectedCtgString}`,{params:{page}} )
    return response.data.results
}

//const urlVideos=`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
export const getTrailer=async (type,id)=>{
  console.log(type,id); 
  const response=await api.get(`/${type}/${id}/videos`)
  //const response=a await axios.get(urlVideos)
  return response.data.results
}

//színészek:
export const getCredits=async (type,id)=>{
  console.log(type,id); 
  const response=await api.get(`/${type}/${id}/credits`)
  return response.data.cast
}

////////////////////////////////////////
/*export const getVote=(nr)=>{
  const nrInt=Math.round(nr)
  return '⭐'.repeat(nrInt)
}*/

const pageTitle=[
  {type:'trending', title:'Popular This Week'},
  {type:'movie', title:'Movies'},
  {type:'tv', title:'TV Series'},
  {type:'search', title:'Search Media'},
]

export const getTitle=(type)=>{
  const selected=pageTitle.find(obj=>obj.type==type)
  return selected.title
}