import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Diary from './Pages/Diary';
import New from './Pages/New';
import Edit from './Pages/Edit';
import { getEmotionImgById } from './Component/Util';
import {Routes, Route, Link} from 'react-router-dom'
// Routes : 부모 /  Route : 자식
import { useReducer, useRef } from 'react';

export const DiaryStateContext = React.createContext(null);
export const DiaryDispatchContext = React.createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE' : { 
      return [action.data, ...state]
    }
    case 'UPDATE' : {
      return state.map((it: any) => 
      String(it.id) === String(action.data.id) ? {...action.data} : it)
    }
    case 'DELETE' : {
      return state.filter((it :any) => String(it.id) !== String(action.targetId))
      }
    case 'INIT' : {
      return action.data;
    }

    default : {
      return state;
    }
  }
}
const mockData = [
  {
    id : 'mock1',
    date : new Date().getTime(),
    content : 'mock1',
    emotionId : 1
  },
  {
    id : 'mock2',
    date : new Date().getTime(),
    content : 'mock2',
    emotionId : 2
  },
  {
    id : 'mock3',
    date : new Date().getTime(),
    content : 'mock3',
    emotionId : 3
  },
]
function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false)
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);
  useEffect(()=>{
    dispatch({
      type : 'INIT',
      data : mockData
    })
    setIsDataLoaded(true)
  },[])
  const onCreate = (date, content, emotionId) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current,
        date: new Date(date).getTime(),
        content,
        emotionId
      }
    })
    idRef.current += 1
  };
  const onUpdate = (targetId ,date, content, emotionId) => {
    dispatch({
      type : 'UPDATE',
      data : {
        id : targetId,
        date : new Date(date).getTime(),
        content,
        emotionId
      }
    })
  }
  const onDelete = (targetId) => {
    dispatch({
      type: 'DELETE',
      targetId
    })
  }
  if(!isDataLoaded) {
    return <div>데이터를 불러오는 중입니다</div>
  } else {
    return (
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{
          onCreate,
          onUpdate,
          onDelete
        }}>

      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/New' element={<New />}/>
          <Route path='/Diary/:id' element={<Diary />}/>
          {/*  */}
          <Route path='/Edit' element={<Edit />}/>
        </Routes>
      </div>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    );
  }
}

export default App;
