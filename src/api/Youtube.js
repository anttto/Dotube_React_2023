import axios from "axios";

export default class Youtube {
    constructor () {
        this.httpClient = axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3/',
            params: { key: process.env.REACT_APP_YT_KEY }
        })
    }

    async search(keyword) {
        return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
    }

    async channelImageURL(id) {
        return this.httpClient.get('channels', 
        {params:{part:'snippet', id}})
        .then((res)=>res.data.items[0].snippet.thumbnails.default.url);
    }

    async relatedVideos(id) {
        return this.httpClient
        .get('search', {params:{
            part: 'snippet',
            relatedToVideoId: id,
            type: 'video',
            maxResults: 25,
        }})
        .then((res)=>res.data.items)
        .then((items)=>items.map((item)=>({...item, id:item.id.videoId})));
    }

    async #searchByKeyword(keyword) {
        return this.httpClient
        .get('search', { params:{
            part: 'snippet',
            maxResults: 25,
            type:'video',
            q: keyword,
        }})
        .then((res)=>res.data.items)
        .then((items)=> items.filter((item)=>(item.id.videoId)))
        .then((items)=>items.map((item)=>({...item, id:item.id.videoId})));
        // .then((items)=>items.map((item)=>({...item, id: (item.id.videoId) || (item.id.playlistId) || (item.id.channelId)})));
    }

    async #mostPopular() {
        return this.httpClient
        .get('videos', { params:{
            part: 'snippet',
            maxResults : 25,
            chart: 'mostPopular',
            regionCode: 'KR', 
        }})
        .catch(error => {
            console.log(error.response)
        })
        .then((res)=>res.data.items);
    }
}