# Youtube made with React

📒[개인 스터디 기록]📒 ✅

## (1) React Web

### CRA : Create-React-App

##### #NodeJS, #NPM, #Git, #Tailwind, #VScode, #MacbookAir #M1 #피 #땀 #눈물 #JYP...

실제 Youtube Api를 이용하여 React Web 구축.

## (2) Tools

1. react-icons : https://react-icons.github.io/react-icons
2. tailwind (css) : https://tailwindcss.com/
3. postman : https://web.postman.co/
4. netlify : https://www.netlify.com/

## (3) Reference

- https://velog.io/@qkr135qkr/react-router-dom-v6%EC%97%90%EC%84%9C-%EC%9E%90%EC%8B%9D-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%97%90%EA%B2%8C-props%EB%A5%BC-%EC%A0%84%EB%8B%AC%ED%95%B4%EB%B3%B4%EC%9E%90

<hr/>

### 구현 리스트...

1. 로고 , 검색(키워드 단위 검색) => NAV BAR
2. 비디오 목록
3. 비디오
4. 제목, 내용, 업로드 시간
5. 영상 마다 영상 ID 값으로 라우팅
6. 영상 상세페이지, url 변경
7. 영상 재생 가능
8. 상세페이지 - 제목, 사용자, 영상정보
9. 상세페이지 - 연관된 비디오 목록 노출
10. 뒤로가기 구현 (라우팅 기능 이용)
11. 반응형 구조

<hr/>

### 예상 구축 순서

1. 라우터 설정
2. NAV BAR 구현 (검색 헤더 만들기)
3. 비디오 목록 만들기 (검색 데이터 요청, 응답도 구현)
4. 상세페이지 만들기 (해당 비디오 정보 노출 및 비디오 컨트롤 구현)
5. 스타일링 (postCss or TailwindCss)
6. 배포 (Netlify 이용할듯? - Front단만 필요한 프로젝트에 최적!)

<hr/>    
    
## (4) 작업 요약

1. index.js에 라우팅 설정

- createBrowserRouter 와 RouterProvider 를 이용

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

2. App.js 에 상단 네비게이션 바 (NavBar) 와 변경될 컨텐츠 영역 분리

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

3. NavBar 구축

- 해당 컴포넌트는 항상 동일하게 고정되는 부분으로 설정
- 로고는 홈으로 보내기 위해 react-router-dom 를 이용하여 Link 태그 사용 (navigate 기능 사용)
- Search Bar 는 다른곳에서 사용할수도 있다는 가정하에 컴포넌트로 분리

4. Search 컴포넌트 구축

```
Hook : [ useEffect, useState , useNavigate ,useParams ]
```

6. input 에 onChange 이벤트를 이용, {handleChange} 함수를 통해 state (상태)를 변경
7. 그 상태를 form 에 onSubmit 이벤트를 이용하여 {handleSubmit} 함수를 만들어 전송
8. {handleSubmit} 함수로 값을 전송할 때, react-router-dom 의 navigate 훅을 이용하여 url 에 파라미터값 전달 (url에 검색 키워드 넘김)
9. index.js 에서 설정한 Route 설정값 대로 페이지는 넘어갈 것이고 (path:'videos/:keyword', element:<Videos />…..)
10. 그때 노출되는 Video 컴포넌트에서도 url 의 params 값을 받아 내용을 교체 -> ( 역시나 여기서도 useParams 훅을 사용함)
11. 마지막으로 검색어를 입력후 인풋창의 placeHolder 상태를 ‘검색어’ 로 그대로 두기 위한 작업을 진행
12. 검색버튼을 눌렀을때, 페이지는 상태값(useState)의 변경으로 무조건적 React 특성의 DOM의 재조립이 진행되기에, 이것을 막기 위한 useEffect 훅을 사용.

```
useEffect(()=>{
        setText(keyword || '');
    },[keyword]);
```

위의 코드처럼 검색어(keyword)가 변경될 경우에만 setText의 useState 훅을 실행하여 input 의 value 값을 지정함.

5. Mock Data

- 실제 Youtube api 로 프로젝트 만들다보면 하루에 호출할 수 있는 횟수가 정해져있기 때문에 로컬에 mock-data 를 만들어 개발을 진행한다.
- [POSTMAN](https://web.postman.co/) 을 이용하여 api를 사전에 임의로 호출하고 응답받은 데이터를 복사하여 mockdata를 만들고 저장하여 사용.
  <img width="328" alt="image" src="https://user-images.githubusercontent.com/57241573/220261282-62584adb-10f0-4da8-bab4-81a1081394e6.png">
  경로는 public 안에 두는것을 추천! (정적 데이터)

6. Video 리스트 출력 및 키워드 검색

(1) 리액트 쿼리 라이브라리 TanStack Query를 이용
(2) [TanStack-Query에 대하여](https://www.dgmunit1.com/blog/setting/next-tanstack-query#-server-state-%EA%B4%80%EB%A6%AC%EC%9D%98-%EC%96%B4%EB%A0%A4%EC%9B%80)
(3) QueryClient 로 새로운 쿼리클라이언트를 생성해주고 사용할 부모 컴포넌트에 QueryClientProvider로 묶어 준다. (우산을 씌워주는 개념... Provider..)

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

(4) 비디오 리스트를 노출하는 Videos 컴포넌트에 직접 TanStack Query 함수를 지정해준다.

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

- TanStack Query 에서 제공하는 isLoading, error, data 객체를 사용 (data 객체에는 video라는 임의의 명칭을 대입)
- TanStack Query 의 첫번쨰 인자에는 실제 우리가 사용할 데이터 뭉치의 key 들을 설정해줌 ['videos', searchResult] -> searchResult 는 검색 키워드가 들어온 값
- 비동기 호출을 위해 async & fetch 사용 (searchResult 키워드 여부에 따라 mock-data 분기 요청
- 호출된 데이터의 items 를 리턴 (실제 영상 데이터의 배열).

```
return (
    <>
        <div>Videos {(searchResult) ? `🔍 ${searchResult}` : `🔥`}</div>
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

- videos 데이터의 존재 유무로 리스트 출력함
- <VideoCard /> 컴포넌트를 분리하여 video 데이터를 props로 전달
- 여러가지 많은 정보를 마음껏 출력하여 가공~

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

7. Video 리스트 호출 개선 작업 ... (6번 fetch의 문제점 feat. Axios 라이브러리 사용).

```
import axios from 'axios';

return axios.get(`/videos/${searchResult ? 'search' : 'popular'}.json`)
.then((res) => {
    console.log(res);
    return res.data.items;
});
```
