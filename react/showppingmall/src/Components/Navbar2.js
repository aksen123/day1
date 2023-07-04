import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
const Navbar2 = () => {
  const menuList = [
    '여성',
    '남성',
    '신생아/유아',
    '아동',
    'H&M HOME',
    'Sale',
    '지속가능성'
  ]
  return (
    <div>
      <div className='nav-logo'>
        <img width={100} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/800px-H%26M-Logo.svg.png'/>
      </div>
      <div className='nav-menu-area'>
        <ul className='menu'>
          {menuList.map((menu, index) => (
          <li>
            <a href='#' key={index}>
              {menu}
            </a>
            </li>))}
        </ul>
      </div>
      <div className='search-box'>
        <FontAwesomeIcon icon={faSearch}/>
        <input type='text' placeholder='제품검색' />
      </div>
    </div>
  )
}

export default Navbar2
