import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  pageProps['test'] = 'chuchu' // this prop will be passed to all pages
  console.log(pageProps)

  return <Component { ...pageProps} bum={4} />
}