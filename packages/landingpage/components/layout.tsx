import Header from './header'
import Footer from './footer'
import Head from 'next/head'

export default function Layout (props: { children: import("react").ReactNode }) {
  return (
    <>
      <div>
        <Head>
          <link rel='icon' type='image/x-icon' href='favicon.ico' />
          <title>My New Website</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header />
        <main className='flex-1 w-full max-w-6xl p-1 mx-auto md:px-8 md:py-2'>
          {props.children}
        </main>
      </div>
      <Footer />
    </>
  )
}
