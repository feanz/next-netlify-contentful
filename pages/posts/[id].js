import Layout from '../components/layout'
import { fetchPostEntries } from '../../utils/postClient'

export default function Post({ post }) {
    return <Layout>
        <div className="post">
            <img alt={post.description} src={`https:${post.image.fields.file.url}`} />
            <div className="text">
                <h2>{post.title}</h2>
                <h3>{post.date.substring(0, 10)}</h3>
                <div className="description">{post.description}</div>
            </div>
        </div>

        <style jsx>{`
          .post {           
            margin: 10px;            
          }
          .description {
           
          }         
          .text {
          
          }        
          img {
            max-width: 300px;
          }
        `}</style>
    </Layout>
}


export async function getStaticPaths() {
    const entires = await fetchPostEntries()
    const paths = entires.map(e => {
        return { params: { id: e.fields.url } }
    })
    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const entires = await fetchPostEntries()
    const posts = entires.map(e => {
        return e.fields
    });

    const post = posts.filter(p => p.url === params.id)[0]

    return {
        props: {
            post
        }
    }
}