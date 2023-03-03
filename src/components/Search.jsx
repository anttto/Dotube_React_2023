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
        <header>
            <Link to='/'>        
                <span><FaYoutube size="30"/></span>
                <span>Youtube</span>
            </Link>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Search...' value={text} onChange={(e)=>{setText(e.target.value)}}/>
                <button type='button' onClick={handleSubmit}><BsSearch/></button> 
            </form>
        </header>
    )
};
