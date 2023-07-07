import React from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

const ContactList = () => {
  const { contactList, searchList} = useSelector((state) => state);
  const [displayData, setDisplayData] = useState([]);

  useEffect(()=>{
    if(searchList.length === 0) {
      setDisplayData(contactList)
    } else if(searchList.length > 0) {
      setDisplayData(searchList)
    }
  },[contactList.length, searchList.length])

  return (
    <div>
      <SearchBox />
      {/* {searchList.length > 0 && <h1>검색 연락처</h1>}
      {searchList && searchList.map((list) =>(
        <ContactItem list={list}/>
      ))} */}
      <h2>연락처</h2>
      {displayData.map((list) => (
        <ContactItem list={list}/>
      ))}
    </div>
  )
}

export default ContactList
