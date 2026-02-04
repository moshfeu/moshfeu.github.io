import React from "react"
import { css, Flex } from "theme-ui"

const PostHeroCaption = ({ text, url }) => (
  <>
    {text && (
      <Flex>
        {url ? (
          <a
            css={css({ margin: `auto`, fontStyle: `italic` })}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {text}
          </a>
        ) : (
          <i css={css({ margin: `auto` })}>{text}</i>
        )}
      </Flex>
    )}
  </>
)

export default PostHeroCaption
