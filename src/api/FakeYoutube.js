import axios from "axios";

export default class FakeYoutube {
    // constructor () {
    // }

    async search(keyword) {
        return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
    }

    async channelImageURL() {
        return axios
        .get(`/videos/channel.json`)
        .then((res)=>res.data.items[0].snippet.thumbnails.default.url);
    }

    async relatedVideos() {
        return axios
        .get(`/videos/related.json`)
        .then((res)=>res.data.items)
        .then((items)=>items.map((item)=>({...item, id:item.id.videoId})));
    }

    async #searchByKeyword() {
        return axios
        .get(`/videos/search.json`)
        .then((res)=>res.data.items)
        .then((items)=> items.filter((item)=>(item.id.videoId)))
        .then((items)=>items.map((item)=>({...item, id:item.id.videoId})));
    }

    async #mostPopular() {
        return axios
        .get(`/videos/popular.json`)
        .then((res)=>res.data.items);
    }
    
    async #channelThumbnail(channelId) {
        
    }
}