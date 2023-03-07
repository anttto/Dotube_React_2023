import React, { useEffect, useState } from 'react';
import { FaYoutube } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Search() {
    const [text, setText] = useState('');
    const navigate = useNavigate();
    const { keyword } = useParams();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/videos/${text}`);
    }
    useEffect(()=>{
        setText(keyword || '');
    }, [keyword]);

    return (
        <header className='w-full flex items-center justify-center p-4 text-2xl border-b border-zinc-600 mb-4'>
            <Link to='/' className='flex items-center'>
                <FaYoutube size="30" className='text-brand'/>
                <h1 className=' font-bold ml-2 text-2xl'>Dotube</h1>
            </Link>
            <form className='flex justify-center w-full' onSubmit={handleSubmit}>
                <input className=' w-7/12 px-5 outline-none bg-black text-base text-gray-50' type="text" placeholder='Search...' value={text} onChange={(e)=>{setText(e.target.value)}}/>
                <button className='bg-zinc-500 p-3' type='button' onClick={handleSubmit}><BsSearch size='15' /></button> 
            </form>
        </header>
    )
};
