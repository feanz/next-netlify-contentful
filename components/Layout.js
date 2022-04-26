import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'

export const siteTitle = 'JamStack Example'

export default function Layout({ children, home }) {
    return (
        <div className="container">
            <Head>
                <title>JamStack Example</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Header />
                {children}
            </main>

            <Footer />

            <style jsx>{`
          .container {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .posts {
            display: flex;
          }
        `}</style>

            <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
              Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          }
          * {
            box-sizing: border-box;
          }
        `}</style>
        </div>
    )
}