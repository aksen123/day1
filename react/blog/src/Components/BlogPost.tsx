import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  background-color : #fff;
  padding: 20px;
  margin : 20px;
  border-radius: 10px;
  box-shadow: 10px 10px 10xp #d9d9d9;
  width: calc(100% - 40px);

`
const Title = styled.div`
  font-weight : bold;
  margin-bottom: 10px;
`
const Body = styled.div`
  white-space : nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`
interface Props {
  readonly title : string;
  readonly body : string;
}

const BlogPost = ({title, body}: Props) => {
  return (
    <Container>
      <Title>
        {title}
      </Title>
      <Body>
        {body}
      </Body>
    </Container>
  )
}

export default BlogPost
