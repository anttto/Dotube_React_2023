import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import VideoCard from '../components/VideoCard';

export default function RelatedVideos({id}) {
    const {youtube} = useYoutubeApi();
    const {data: videos} = useQuery (
        [ 'related', id ], () => {
            return youtube.relatedVideos(id);
        });
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
