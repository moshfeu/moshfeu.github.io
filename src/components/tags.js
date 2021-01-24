import React from "react"
import { Badge, Styled } from "theme-ui"
import { Link } from "gatsby"

const Container = Styled.div

const Tags = ({ tags }) => {
  return (
    <Container>
      {tags?.map((tag, i) => (
        <Link key={tag} to={`/tag/${tag}`}>
          <Badge ml={Math.min(i, 1)}>{tag}</Badge>
        </Link>
      ))}
    </Container>
  )
}

export default Tags
