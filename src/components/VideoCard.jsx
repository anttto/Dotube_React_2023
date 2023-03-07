import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatAgo } from '../util/date';


export default function VideoCard({video, type}) {
    const navigate = useNavigate();
    const { title, publishedAt, thumbnails, channelTitle } = video.snippet;
    const isList = type === 'list';

    return (
        <li 
            className={ isList ? 'flex gap-1 m-2' : '' }
            onClick={()=>{navigate(`/videos/watch/${video.id}`, {state:{video}})}}>
            <img className={ isList ? 'w-60 mr-2' : 'w-full' } src={thumbnails.medium.url} alt={title} />
            <div>
                <p className='font-bold my-2 text-base text-zinc-200 line-clamp-2'>{title}</p>
                <p className=' text-channel font-bold opacity-100'>{channelTitle}</p>
                <p className=' text-zinc-400 opacity-70'>{formatAgo(publishedAt, 'ko')}</p>
            </div>
        </li>
    )
};
