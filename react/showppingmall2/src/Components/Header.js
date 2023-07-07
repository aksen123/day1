import React from 'react'
import logo from '../jordan.svg'
import logo2 from '../converse.svg'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux'
const TopNav = styled.div`
  background-color: #eee;
  padding: 0 20px; 
  display: flex;
  justify-content: space-between;
  align-items: center;
    img:Hover {
    opacity : 0.7;
    cursor: pointer;
  }
    a {
    margin-left: 20px;
    text-decoration: none;
    color: #000;
    position: relative;
    font-size: 0.6rem;
    font-weight: bold;
  }
    a::before {
    content: '';
    display: inline-block;
    height: 15px;
    width: 1px;
    background-color: #444;
  
    position: absolute;
    left: -10px;
    top: 0;
  }
    .first::before {
    content: none !important;
  }
  
`
const Nav = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
    img:Hover {
      opacity : 0.7;
      cursor: pointer;
    }
`
const NavMenu = styled.div`
  margin-left: 150px;
`
const NavRight = styled.div`
display: flex;
gap: 10px

`
const SearchBox = styled.div`
  padding: 10px;
  border-radius: 50px;
  background-color: #eee;
  &:Hover {
    background-color: #ccc;
  }
  input{
    width: 120px;
    border: none;
    background-color: inherit;
    outline: none;
    font-size: 1rem;
    margin-left: 5px;
  }
  
`
const Background = styled.div`
  background-color: #eee;
  height: 50px;
`
const Header = () => {
  const {loginId, loginCheck} = useSelector(state => state);
  let user = loginCheck ? loginId.split('@')[0] : ''
  const dispatch = useDispatch()
  const navMenu = [
    'New Releases',
    'Men',
    'Women',
    'Kids',
    'Sale',
    'SNKRS',
    '나이키 앱'
  ]
  const navigate = useNavigate();
  const logout = () => {
    dispatch({ type: 'LOGOUT', payload: {check: false} })
  }
  return (
    <div>
      <TopNav className='top-nav'>
        <div className='logo'>
          <img width={30} src={logo} />
          <img width={50} src={logo2} />
        </div>
        <div>
          <span><a className='first' href='#'>매장 찾기</a></span>
          <span><a href='#'>고객 센터</a></span>
          {
          loginCheck ? 
          <span><a href='#' onClick={logout}>로그아웃</a></span> : 
          <span><a href='#'>가입하기</a></span>
          }
          {
          loginCheck ? 
          <span><a href='#'>{user}님 반갑습니다</a></span> : 
          <span><a href='#' onClick={()=>navigate('/login')}>로그인</a></span>
          }
        </div>
      </TopNav>
      <Nav>
        <img onClick={()=>navigate('/')} width={100} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyjVfjIrPRFPKE6-4xtCSm4cIqF9PTQQXJqw&usqp=CAU'/>
        <NavMenu className='nav-menu-wrap'>
          {navMenu.map((item) => (<span><a href='#'>{item}</a></span>))}
        </NavMenu>
        <NavRight>
          <SearchBox className='search-box'>
            <FontAwesomeIcon icon={faSearch} />
            <input type='text' placeholder='검색'/>
          </SearchBox>
          <div className='wishList'>
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
        </NavRight>
      </Nav>
      <Background />
    </div>
  )
}

export default Header
