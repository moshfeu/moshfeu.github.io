# Blog Post Writing Style Guidelines

## Tone and Voice
- Straightforward and technical, but accessible
- Informal and amateur without being overly casual
- No clickbait phrases or overly conversational tone
- Avoid phrases like "Yeah, me too", "let's be honest", "here's a neat trick"
- Keep personality minimal - focus on clear information delivery

## Structure
All blog posts should follow this structure:

### Frontmatter
```yaml
---
title: Clear, descriptive title (no clickbait)
tags: ["relevant", "tags", "3-5 tags"]
slug: kebab-case-url-slug
date: YYYY-MM-DD
---
```

### Content Sections
1. **Background** (optional) - Brief context if needed
2. **The Problem** - Clearly state what issue is being addressed
3. **The Solution** - Provide the fix/approach with code examples
4. **Additional sections** as needed (e.g., "A More Flexible Approach")

## Code Examples
- Include complete, working code snippets
- Explain what the code does in plain language after showing it
- Use inline technical terms with backticks when appropriate

## Language
- Write in present tense
- Be direct and concise
- Technical explanations should be clear without being condescending
- Assume reader has some technical background but explain key concepts

## What to Avoid
- Rhetorical questions in headings
- Excessive use of "you" or addressing the reader directly
- Emojis or exclamation points
- Marketing/sales language
- Overly enthusiastic tone ("Working like a charm :)", "Pretty handy!")
- Section titles like "The Quick Fix" or "The Better Way" - use descriptive titles

## Examples of Good vs Bad

❌ Bad: "Ever switched between IDEs and gotten frustrated? Yeah, me too!"
✅ Good: "When using multiple IDEs, shell aliases can become inconvenient."

❌ Bad: "Here's a neat trick that will blow your mind!"
✅ Good: "We can create a dynamic alias that detects which IDE launched the terminal."

❌ Bad: "Drop this in your config:"
✅ Good: "Add the following to your configuration file:"
