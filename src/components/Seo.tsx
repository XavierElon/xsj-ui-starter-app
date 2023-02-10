import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

const defaultMeta = {
  title: 'Versus App',
  siteName: 'Versus App',
  description: 'Never Miss A Chance When Your Game Is At Its Peak',
  url: 'https://versusapp.io',
  type: 'website',
  robots: 'follow, index',
  image: ''
}

type SeoProps = {
  date?: string
  templateTitle?: string
} & Partial<typeof defaultMeta>

export default function Seo(props: SeoProps) {
  const router = useRouter()
  const meta = {
    ...defaultMeta,
    ...props
  }
  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title
  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${meta.url}${router.asPath}`} />
      <link rel="canonical" href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="image" property="og:image" content={meta.image} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && (
        <>
          <meta property="article:published_time" content={meta.date} />
          <meta
            name="publish_date"
            property="og:publish_date"
            content={meta.date}
          />
          <meta name="author" property="article:author" content="Versus App" />
        </>
      )}

      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name="theme-color" content="#ffffff" />
    </Head>
  )
}

const favicons: Array<React.ComponentPropsWithoutRef<'link'>> = [
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon.ico'
  }
  // {
  //   rel: 'icon',
  //   type: 'image/png',
  //   sizes: '32x32',
  //   href: '/favicon/favicon-32x32.png'
  // },
  // {
  //   rel: 'icon',
  //   type: 'image/png',
  //   sizes: '16x16',
  //   href: '/favicon/favicon-16x16.png'
  // },
  // {
  //   rel: 'mask-icon',
  //   href: '/favicon/safari-pinned-tab.svg',
  //   color: '#00e887'
  // },
  // { rel: 'shortcut icon', href: '/favicon/favicon.ico' }
]
