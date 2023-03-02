import React from 'react';

export default function VideoCard({video}) {
    const { title, publishedAt, thumbnails } = video.snippet;
    return (
        <li>
            <img src={thumbnails.medium.url} alt="" />
            <p>{title}</p>
            <p>{publishedAt}</p>
        </li>
    )
};
