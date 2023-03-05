import React, { createContext, useContext } from 'react';
import FakeYoutube from '../api/FakeYoutube';
import Youtube from '../api/Youtube';

const youtube = new FakeYoutube();

export const YoutubeApiContext = createContext();

export function YoutubeApiProvider ({children}) {
    return <YoutubeApiContext.Provider value={{youtube}}>{children}</YoutubeApiContext.Provider>
}

export function useYoutubeApi() {
    return useContext(YoutubeApiContext);
}