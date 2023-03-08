import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function ChannelInfo({id, title}) {
    const {youtube} = useYoutubeApi();
    const {data: url} = useQuery (
        [ 'channel', id ], () => youtube.channelImageURL(id), {staleTime:1000 * 60 * 5});
    return (
        <div className='flex items-center my-4 mb-8'>
            {url && <img className='w-10 h-10 rounded-full' src={url} alt={title}></img>}
            <p className='ml-4 text-lg font-medium'>{title}</p>
        </div>
    )
};
