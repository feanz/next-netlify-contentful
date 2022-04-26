import Head from 'next/head'
import Post from '@components/post'
import Layout, { siteTitle } from '@components/layout'
import { fetchPostEntries } from '../utils/postClient'

export default function Home({ posts }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="posts">
        {posts.map((p) => {
          return <Post key={p.date} date={p.date} image={p.image.fields} title={p.title} slug={p.url} />
        })}
      </div>

      <style jsx>{`          
          .posts {
            display: flex;
          }
        `}</style>
    </Layout>
  )
}

export async function getStaticProps() {
  const entires = await fetchPostEntries()
  const posts = entires.map(e => {
    return e.fields
  });

  posts.sort((a, b) => (a.date > b.date) ? 1 : -1);

  return {
    props: {
      posts
    }
  }
}