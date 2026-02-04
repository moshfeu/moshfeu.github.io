import React from "react"
import { Badge, Box } from "theme-ui"
import { Link } from "gatsby"

const Tags = ({ tags }) => {
  return (
    <Box>
      {tags?.map((tag, i) => (
        <Link key={tag} to={`/tag/${tag}`}>
          <Badge ml={Math.min(i, 1)}>{tag}</Badge>
        </Link>
      ))}
    </Box>
  )
}

export default Tags
