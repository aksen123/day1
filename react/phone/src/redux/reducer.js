import React from 'react'

let data = {
  contactList : [],
  searchList : []
}

const reducer = (state = data, action) => {
  const {type, payload} = action;
  console.log(payload)
  switch(type) {
    case 'ADD_CONTACT' : 
      return {
        ...state,
        contactList: [...state.contactList,{name:payload.name, phone:payload.phone}]
      }
    case 'SEARCH' : 
      // return {
      //   ...state,
      //   searchList: state.contactList.filter((list) => list.name === payload.searchName)
      // }
      return {
        ...state,
        searchList: state.contactList.filter((list) => list.name.includes(payload.searchName))
      }
    default : 
      return {...state}
  }
}

export default reducer
