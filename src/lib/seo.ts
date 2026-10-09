import { useEffect } from 'react'

interface PageMetadata {
  title: string
  description: string
  ogTitle?: string
  ogDescription?: string
}

export function setPageMetadata({
  title,
  description,
  ogTitle,
  ogDescription,
}: PageMetadata): void {
  document.title = title

  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', description)
  } else {
    const newMeta = document.createElement('meta')
    newMeta.setAttribute('name', 'description')
    newMeta.setAttribute('content', description)
    document.head.appendChild(newMeta)
  }

  const ogTitleMeta = document.querySelector('meta[property="og:title"]')
  if (ogTitleMeta) {
    ogTitleMeta.setAttribute('content', ogTitle ?? title)
  } else {
    const meta = document.createElement('meta')
    meta.setAttribute('property', 'og:title')
    meta.setAttribute('content', ogTitle ?? title)
    document.head.appendChild(meta)
  }

  const ogDescriptionMeta = document.querySelector('meta[property="og:description"]')
  if (ogDescriptionMeta) {
    ogDescriptionMeta.setAttribute('content', ogDescription ?? description)
  } else {
    const meta = document.createElement('meta')
    meta.setAttribute('property', 'og:description')
    meta.setAttribute('content', ogDescription ?? description)
    document.head.appendChild(meta)
  }

  const metaUrl = document.querySelector('meta[property="og:url"]')
  if (!metaUrl) {
    const meta = document.createElement('meta')
    meta.setAttribute('property', 'og:url')
    meta.setAttribute('content', window.location.href)
    document.head.appendChild(meta)
  }
}

export function usePageMetadata(metadata: PageMetadata): void {
  useEffect(() => {
    setPageMetadata(metadata)
  }, [metadata])
}
