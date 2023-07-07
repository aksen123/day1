let initialState = {
  count: 0,
  id: '',
  pw: ''
}

function reducer(state = initialState, action) {
  console.log(action)
  // if(action.type === 'INCREASE') {
  //   return {...state, count : state.count + 1}
  // }
  switch (action.type) {
    case 'INCREASE' : 
      return {...state, count: state.count + action.payload.num}
    case 'LOGIN' : 
      return {...state,
              id: action.payload.id,
              pw: action.payload.pw
            }
    case 'DECREASE' : 
      return {...state, count: state.count - 1}
    default : 
      return {...state}
  }
}

export default reducer