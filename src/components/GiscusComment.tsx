import React from 'react'
import { useColorMode } from '@docusaurus/theme-common'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Giscus, { Theme } from '@giscus/react'

import { DocusaurusConfigCustomFields } from '../interfaces/config'

export function GiscusComponent(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  const { colorMode } = useColorMode()
  const { repoId, category, categoryId }: DocusaurusConfigCustomFields =
    siteConfig.customFields

  const theme: Theme =
    colorMode === 'dark' ? 'dark_tritanopia' : 'light_tritanopia'

  return (
    <Giscus
      repo={`${siteConfig.organizationName}/${siteConfig.projectName}`}
      repoId={repoId}
      category={category}
      categoryId={categoryId}
      mapping="url"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={theme}
      lang="en"
      loading="lazy"
    />
  )
}
