import React, { ComponentProps } from 'react'
import { useBlogPost } from '@docusaurus/theme-common/internal'
import BlogPostItem from '@theme-original/BlogPostItem'
import { GiscusComponent } from '../components/GiscusComment'

export default function BlogPostItemWrapper(
  props: ComponentProps<any>
): React.ReactElement {
  const { metadata, isBlogPostPage } = useBlogPost()
  const { enableComments } = metadata.frontMatter
  return (
    <>
      <BlogPostItem {...props} />
      {enableComments && isBlogPostPage && (
        <>
          <div style={{ paddingBottom: '1.5rem' }}></div>
          <GiscusComponent />
        </>
      )}
    </>
  )
}
