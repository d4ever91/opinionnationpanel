import Head from 'next/head'

export const Seo = ({
  title,
  currentUrl = 'https://Opinion Nation.com/',
  description = 'Earn points by completing surveys',
  imagePreviewUrl = 'https://Opinion Nation.com/',
}: {
  title: string
  description?: string
  currentUrl?: string
  imagePreviewUrl?: string
}) => {
  const formattedTitle = `${title} | Opinion Nation`
  return (
    <Head>
      <title>{formattedTitle}</title>
      <meta name="title" content={title} />
      <meta property="og:title" content={title} />
      <meta property="twitter:title" content={title} />

      <meta property="twitter:url" content={currentUrl} />
      <meta property="og:url" content={currentUrl} />

      <meta name="description" content={description} />
      <meta property="twitter:description" content={description} />
      <meta property="og:description" content={description} />

      <meta property="og:image" content={imagePreviewUrl} />
      <meta property="twitter:image" content={imagePreviewUrl} />

      <meta property="og:type" content="website" />
      <meta property="twitter:card" content="summary_large_image" />
    </Head>
  )
}
