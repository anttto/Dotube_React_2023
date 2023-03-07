import React from 'react';
import { useLocation } from 'react-router-dom';
import YouTube from 'react-youtube';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';

export default function VideosDetail() {
    const {state:{video}} = useLocation();
    const { title, publishedAt, description, channelTitle, channelId } = video.snippet;

    return (
        <section className='flex flex-col lg:flex-row'>
            <article className='basis-8/12'>
                <YouTube videoId={video.id} className='w-full max-w-screen-2xl px-2'
                    opts={{
                        width: "100%",
                        height: "720",
                        playerVars: {
                        autoplay: 1, //자동재생 O
                        rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
                        modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                        },
                }} 
                // onReady={(e)=>{e.target.pauseVideo()}}
                onEnd={(e)=>{e.target.stopVideo(0)}}
                />
                <div className='p-8'>
                    <h2 className='font-semibold text-2xl my-3'>{title}</h2>
                    <ChannelInfo id={channelId} title={channelTitle}/>
                    <pre className=' whitespace-pre-wrap'>
                        {description}
                    </pre>
                    <div className='mt-5'>{publishedAt}</div>
                </div>
            </article>
            <section className='basis-4/12'>
                <RelatedVideos id={video.id} />
            </section>
        </section>
    )
};
