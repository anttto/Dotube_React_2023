import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import VideoCard from '../components/VideoCard';

export default function RelatedVideos({id}) {
    const {youtube} = useYoutubeApi();
    const {data: videos} = useQuery (
        [ 'related', id ], () => youtube.relatedVideos(id), {staleTime:1000 * 60 * 5});
    return (
        <>
            {
                videos && 
                <ul>
                    { videos.map((video)=>(<VideoCard key={video.id} video={video} type='list'/>)) }
                </ul>
            }
        </>
    )
};
