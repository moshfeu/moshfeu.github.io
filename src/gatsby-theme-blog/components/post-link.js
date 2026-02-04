/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Tags from "../../components/tags"

const PostLink = ({ title, slug, date, excerpt, tags }) => (
  <>
    <article>
      <header>
        <h2
          sx={{
            mb: 1,
          }}
        >
          <Link
            sx={{
              textDecoration: `none`,
              color: 'var(--theme-ui-colors-primary,#007acc)',
            }}
            to={slug}
          >
            {title || slug}
          </Link>
        </h2>
        <small>{date}</small>
        {tags && <Tags tags={tags} />}
      </header>
      <section>
        <p>{excerpt}</p>
      </section>
    </article>
    <hr sx={{ my: 4, border: '1px solid', borderColor: 'muted' }} />
  </>
)

export default PostLink
