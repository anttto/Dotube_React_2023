import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from "react-router-dom";
import VideoCard from '../components/VideoCard';
// import FakeYoutube from '../api/FakeYoutube';
// import Youtube from '../api/Youtube';
import { useYoutubeApi } from '../context/YoutubeApiContext';


export default function Videos() {
    const { keyword } = useParams();
    const { youtube } = useYoutubeApi();

    const {isLoading, error, data: videos} = useQuery(
        [ 'videos', keyword ], () => {
            // const youtube = new Youtube();
            return youtube.search(keyword);
        });
        
    return (
        <div id='container'>
            {isLoading && <p>Loading..</p>}
            {error && <p>Error..</p>}
            {
                videos && 
                <ul>
                    { videos.map((video)=>(<VideoCard key={video.id} video={video}/>)) }
                </ul>
            }
        </div>
    )
};
