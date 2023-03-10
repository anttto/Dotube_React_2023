# Youtube made with React! ๐
  
[GO WebSite ๐๐](https://splendid-tarsier-37ff7f.netlify.app/) 
  

![qrcode_51231404_edead2888cb5e7f8ca3fd6989724d77e (3)](https://user-images.githubusercontent.com/57241573/223919219-302de622-70f1-4adb-85bd-04f7211fa4a9.png)

    
[๊ฐ์ธ ์คํฐ๋ ๊ธฐ๋ก]โ

## (1) React Web

### CRA : Create-React-App

##### #NodeJS, #NPM, #Git, #Tailwind, #VScode, #MacbookAir #M1 #ํผ #๋ #๋๋ฌผ #JYP...

์ค์  Youtube Api๋ฅผ ์ด์ฉํ์ฌ React Web ๊ตฌ์ถ.

## (2) Tools

1. react-icons : https://react-icons.github.io/react-icons
2. tailwind (css) : https://tailwindcss.com/
3. postman : https://web.postman.co/
4. netlify : https://www.netlify.com/

## (3) Reference

- https://velog.io/@qkr135qkr/react-router-dom-v6%EC%97%90%EC%84%9C-%EC%9E%90%EC%8B%9D-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%97%90%EA%B2%8C-props%EB%A5%BC-%EC%A0%84%EB%8B%AC%ED%95%B4%EB%B3%B4%EC%9E%90

<hr/>

### ๊ตฌํ ๋ฆฌ์คํธ...

1. ๋ก๊ณ  , ๊ฒ์(ํค์๋ ๋จ์ ๊ฒ์) => NAV BAR
2. ๋น๋์ค ๋ชฉ๋ก
3. ๋น๋์ค
4. ์ ๋ชฉ, ๋ด์ฉ, ์๋ก๋ ์๊ฐ
5. ์์ ๋ง๋ค ์์ ID ๊ฐ์ผ๋ก ๋ผ์ฐํ
6. ์์ ์์ธํ์ด์ง, url ๋ณ๊ฒฝ
7. ์์ ์ฌ์ ๊ฐ๋ฅ
8. ์์ธํ์ด์ง - ์ ๋ชฉ, ์ฌ์ฉ์, ์์์ ๋ณด
9. ์์ธํ์ด์ง - ์ฐ๊ด๋ ๋น๋์ค ๋ชฉ๋ก ๋ธ์ถ
10. ๋ค๋ก๊ฐ๊ธฐ ๊ตฌํ (๋ผ์ฐํ ๊ธฐ๋ฅ ์ด์ฉ)
11. ๋ฐ์ํ ๊ตฌ์กฐ

<hr/>

### ์์ ๊ตฌ์ถ ์์

1. ๋ผ์ฐํฐ ์ค์ 
2. NAV BAR ๊ตฌํ (๊ฒ์ ํค๋ ๋ง๋ค๊ธฐ)
3. ๋น๋์ค ๋ชฉ๋ก ๋ง๋ค๊ธฐ (๊ฒ์ ๋ฐ์ดํฐ ์์ฒญ, ์๋ต๋ ๊ตฌํ)
4. ์์ธํ์ด์ง ๋ง๋ค๊ธฐ (ํด๋น ๋น๋์ค ์ ๋ณด ๋ธ์ถ ๋ฐ ๋น๋์ค ์ปจํธ๋กค ๊ตฌํ)
5. ์คํ์ผ๋ง (postCss or TailwindCss)
6. ๋ฐฐํฌ (Netlify ์ด์ฉํ ๋ฏ? - Front๋จ๋ง ํ์ํ ํ๋ก์ ํธ์ ์ต์ !)

<hr/>    
    
## (4) ์์ ์์ฝ

1. index.js์ ๋ผ์ฐํ ์ค์ 

- createBrowserRouter ์ RouterProvider ๋ฅผ ์ด์ฉ

```
const router = createBrowserRouter([
  {
    path : '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {index:true, element:<Videos />},
      {path:'videos', element:<Videos />},
      {path:'videos/:keyword', element:<Videos />},
      {path:'videos/watch/:videoId', element:<VideoDetail />},
    ],
  }
]);

<RouterProvider router={router}></RouterProvider>
```

2. App.js ์ ์๋จ ๋ค๋น๊ฒ์ด์ ๋ฐ (NavBar) ์ ๋ณ๊ฒฝ๋  ์ปจํ์ธ  ์์ญ ๋ถ๋ฆฌ

```
<Outlet />
```

```
import { Outlet } from 'react-router-dom';
return (
    <>
      <Navbar/>
      <Outlet />
    </>
  )
```

3. NavBar ๊ตฌ์ถ

- ํด๋น ์ปดํฌ๋ํธ๋ ํญ์ ๋์ผํ๊ฒ ๊ณ ์ ๋๋ ๋ถ๋ถ์ผ๋ก ์ค์ 
- ๋ก๊ณ ๋ ํ์ผ๋ก ๋ณด๋ด๊ธฐ ์ํด react-router-dom ๋ฅผ ์ด์ฉํ์ฌ Link ํ๊ทธ ์ฌ์ฉ (navigate ๊ธฐ๋ฅ ์ฌ์ฉ)
- Search Bar ๋ ๋ค๋ฅธ๊ณณ์์ ์ฌ์ฉํ ์๋ ์๋ค๋ ๊ฐ์ ํ์ ์ปดํฌ๋ํธ๋ก ๋ถ๋ฆฌ

4. Search ์ปดํฌ๋ํธ ๊ตฌ์ถ

```
Hook : [ useEffect, useState , useNavigate ,useParams ]
```

6. input ์ onChange ์ด๋ฒคํธ๋ฅผ ์ด์ฉ, {handleChange} ํจ์๋ฅผ ํตํด state (์ํ)๋ฅผ ๋ณ๊ฒฝ
7. ๊ทธ ์ํ๋ฅผ form ์ onSubmit ์ด๋ฒคํธ๋ฅผ ์ด์ฉํ์ฌ {handleSubmit} ํจ์๋ฅผ ๋ง๋ค์ด ์ ์ก
8. {handleSubmit} ํจ์๋ก ๊ฐ์ ์ ์กํ  ๋, react-router-dom ์ navigate ํ์ ์ด์ฉํ์ฌ url ์ ํ๋ผ๋ฏธํฐ๊ฐ ์ ๋ฌ (url์ ๊ฒ์ ํค์๋ ๋๊น)
9. index.js ์์ ์ค์ ํ Route ์ค์ ๊ฐ ๋๋ก ํ์ด์ง๋ ๋์ด๊ฐ ๊ฒ์ด๊ณ  (path:'videos/:keyword', element:<Videos />โฆ..)
10. ๊ทธ๋ ๋ธ์ถ๋๋ Video ์ปดํฌ๋ํธ์์๋ url ์ params ๊ฐ์ ๋ฐ์ ๋ด์ฉ์ ๊ต์ฒด -> ( ์ญ์๋ ์ฌ๊ธฐ์๋ useParams ํ์ ์ฌ์ฉํจ)
11. ๋ง์ง๋ง์ผ๋ก ๊ฒ์์ด๋ฅผ ์๋ ฅํ ์ธํ์ฐฝ์ placeHolder ์ํ๋ฅผ โ๊ฒ์์ดโ ๋ก ๊ทธ๋๋ก ๋๊ธฐ ์ํ ์์์ ์งํ
12. ๊ฒ์๋ฒํผ์ ๋๋ ์๋, ํ์ด์ง๋ ์ํ๊ฐ(useState)์ ๋ณ๊ฒฝ์ผ๋ก ๋ฌด์กฐ๊ฑด์  React ํน์ฑ์ DOM์ ์ฌ์กฐ๋ฆฝ์ด ์งํ๋๊ธฐ์, ์ด๊ฒ์ ๋ง๊ธฐ ์ํ useEffect ํ์ ์ฌ์ฉ.

```
useEffect(()=>{
        setText(keyword || '');
    },[keyword]);
```

์์ ์ฝ๋์ฒ๋ผ ๊ฒ์์ด(keyword)๊ฐ ๋ณ๊ฒฝ๋  ๊ฒฝ์ฐ์๋ง setText์ useState ํ์ ์คํํ์ฌ input ์ value ๊ฐ์ ์ง์ ํจ.

5. Mock Data

- ์ค์  Youtube api ๋ก ํ๋ก์ ํธ ๋ง๋ค๋ค๋ณด๋ฉด ํ๋ฃจ์ ํธ์ถํ  ์ ์๋ ํ์๊ฐ ์ ํด์ ธ์๊ธฐ ๋๋ฌธ์ ๋ก์ปฌ์ mock-data ๋ฅผ ๋ง๋ค์ด ๊ฐ๋ฐ์ ์งํํ๋ค.
- [POSTMAN](https://web.postman.co/) ์ ์ด์ฉํ์ฌ api๋ฅผ ์ฌ์ ์ ์์๋ก ํธ์ถํ๊ณ  ์๋ต๋ฐ์ ๋ฐ์ดํฐ๋ฅผ ๋ณต์ฌํ์ฌ mockdata๋ฅผ ๋ง๋ค๊ณ  ์ ์ฅํ์ฌ ์ฌ์ฉ.
  <img width="328" alt="image" src="https://user-images.githubusercontent.com/57241573/220261282-62584adb-10f0-4da8-bab4-81a1081394e6.png">
  ๊ฒฝ๋ก๋ public ์์ ๋๋๊ฒ์ ์ถ์ฒ! (์ ์  ๋ฐ์ดํฐ)

6. Video ๋ฆฌ์คํธ ์ถ๋ ฅ ๋ฐ ํค์๋ ๊ฒ์

(1) ๋ฆฌ์กํธ ์ฟผ๋ฆฌ ๋ผ์ด๋ธ๋ผ๋ฆฌ TanStack Query๋ฅผ ์ด์ฉ
(2) [TanStack-Query์ ๋ํ์ฌ](https://www.dgmunit1.com/blog/setting/next-tanstack-query#-server-state-%EA%B4%80%EB%A6%AC%EC%9D%98-%EC%96%B4%EB%A0%A4%EC%9B%80)
(3) QueryClient ๋ก ์๋ก์ด ์ฟผ๋ฆฌํด๋ผ์ด์ธํธ๋ฅผ ์์ฑํด์ฃผ๊ณ  ์ฌ์ฉํ  ๋ถ๋ชจ ์ปดํฌ๋ํธ์ QueryClientProvider๋ก ๋ฌถ์ด ์ค๋ค. (์ฐ์ฐ์ ์์์ฃผ๋ ๊ฐ๋... Provider..)

```
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <Navbar/>
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </>
  )
}
```

(4) ๋น๋์ค ๋ฆฌ์คํธ๋ฅผ ๋ธ์ถํ๋ Videos ์ปดํฌ๋ํธ์ ์ง์  TanStack Query ํจ์๋ฅผ ์ง์ ํด์ค๋ค.

```
import { useQuery } from '@tanstack/react-query';

export default function Videos() {
    const { keyword : searchResult } = useParams();

    const { isLoading, error, data:videos } = useQuery(
        ['videos', searchResult], async () =>
        {
            return fetch(`/videos/${searchResult ? 'search' : 'popular'}.json`)
            .then(res => res.json())
            .then(data => data.items);
        }
    );
```

- TanStack Query ์์ ์ ๊ณตํ๋ isLoading, error, data ๊ฐ์ฒด๋ฅผ ์ฌ์ฉ (data ๊ฐ์ฒด์๋ video๋ผ๋ ์์์ ๋ช์นญ์ ๋์)
- TanStack Query ์ ์ฒซ๋ฒ์จฐ ์ธ์์๋ ์ค์  ์ฐ๋ฆฌ๊ฐ ์ฌ์ฉํ  ๋ฐ์ดํฐ ๋ญ์น์ key ๋ค์ ์ค์ ํด์ค ['videos', searchResult] -> searchResult ๋ ๊ฒ์ ํค์๋๊ฐ ๋ค์ด์จ ๊ฐ
- ๋น๋๊ธฐ ํธ์ถ์ ์ํด async & fetch ์ฌ์ฉ (searchResult ํค์๋ ์ฌ๋ถ์ ๋ฐ๋ผ mock-data ๋ถ๊ธฐ ์์ฒญ
- ํธ์ถ๋ ๋ฐ์ดํฐ์ items ๋ฅผ ๋ฆฌํด (์ค์  ์์ ๋ฐ์ดํฐ์ ๋ฐฐ์ด).

```
return (
    <>
        <div>Videos {(searchResult) ? `๐ ${searchResult}` : `๐ฅ`}</div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Something is wrong...</p>}
        {
            videos &&
            <ul>
                {
                    videos.map((video) => (<VideoCard key={video.id} video={video}/>))
                }
            </ul>
        }
    </>
);
```

- videos ๋ฐ์ดํฐ์ ์กด์ฌ ์ ๋ฌด๋ก ๋ฆฌ์คํธ ์ถ๋ ฅํจ
- <VideoCard /> ์ปดํฌ๋ํธ๋ฅผ ๋ถ๋ฆฌํ์ฌ video ๋ฐ์ดํฐ๋ฅผ props๋ก ์ ๋ฌ
- ์ฌ๋ฌ๊ฐ์ง ๋ง์ ์ ๋ณด๋ฅผ ๋ง์๊ป ์ถ๋ ฅํ์ฌ ๊ฐ๊ณต~

```
import React from 'react';

export default function VideoCard({video}) {
    return (
        <>
            <h2 className='text-3xl'>{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
        </>
    );
}
```

7. Video ๋ฆฌ์คํธ ํธ์ถ ๊ฐ์  ์์ ... (6๋ฒ fetch์ ๋ฌธ์ ์  feat. Axios ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ฌ์ฉ).

```
import axios from 'axios';

return axios.get(`/videos/${searchResult ? 'search' : 'popular'}.json`)
.then((res) => {
    console.log(res);
    return res.data.items;
});
```
