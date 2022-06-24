import type { GetStaticProps, NextPage } from 'next'
import Bio from '../components/Bio'
import Layout from '../components/Layout'
import Post from '../components/Post'

interface PageProp {
  Posts: PostType[]
}

const Home: NextPage<PageProp> = ({ Posts }) => {
  return (
    <Layout>
      <Bio />
      <div className="mt-5">
        {Posts.map(post => (
          <Post id={post.id} datail='July 7, 2021 • ☕️☕️☕️ 14 min read' headline={post.title} description={post.body} key={post.id} />
        ))}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const posts: PostType[] = await response.json();
  return {
    props: {
      Posts: posts || null
    }
  }
}

export default Home
