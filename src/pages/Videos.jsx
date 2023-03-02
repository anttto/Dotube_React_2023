import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from "react-router-dom";
import VideoCard from '../components/VideoCard';
// import axios from 'axios';
import { search } from '../api/youtubeApi';

export default function Videos() {
    const { keyword } = useParams();

    const {isLoading, error, data:videos} = useQuery(
        [ 'videos', keyword ], () => search(keyword));
    return (
        <div>
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
