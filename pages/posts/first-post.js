import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Layout from '../../components/layout'
import Alert from '../../components/alert'

export default function FirstPost({test, bum}) {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>

        <h1>First Post -{test}-{bum}</h1>
        <Alert type="success">This is a success alert</Alert>
        <Alert type="error">This is an error alert</Alert>

        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </Layout>
    </>
  )
}
