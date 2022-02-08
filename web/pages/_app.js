import '../styles/globals.scss'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
//      Meta tags for Social Media
        <!--  Essential META Tags -->
        <meta property="og:title" content="Okie Design - CSS components">
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon/apple-touch-icon.png">
        <meta property="og:url" content="https://www.okie.design">
        <meta name="twitter:card" content="summary_large_image">

        <!--  Non-Essential, But Recommended -->
        <meta property="og:description" content="Responsive CSS components made with TailwindCSS and Love.">
        <meta property="og:site_name" content="Okie Design.">
        <meta name="twitter:image:alt" content="Okie Deisng - CSS Components">

        <!--  Non-Essential, But Required for Analytics -->
//         <meta property="fb:app_id" content="your_app_id" />
//         <meta name="twitter:site" content="@website-username">
    
//      Meta tags for SEO
        <meta name="title" content="Okie Design">
        <meta name="description" content="Responsive CSS components made with TailwindCSS and Love.">
        <meta name="keywords" content="tailwind,css,framework,UI,UX,design,web design,websites,css components,components,ui-library,tailwindcss,design-system">
        <meta name="robots" content="index, follow">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="language" content="English">
        <meta name="revisit-after" content="7 days">
        <meta name="author" content="Kenneth Bass">
    
        <title>
          Okie.Design
        </title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
