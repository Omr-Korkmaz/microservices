import { createClient } from 'contentful'
import ArticleCard from '../components/ArticleCard'
export async function getStaticProps() {

  const client = createClient({
    // get them into .env -- after fixing the typeerror problem
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
   

  })

  const res = await client.getEntries({ content_type: "technology" })

  return {
    props: {
      technologies: res.items,
    }
  }
}

export default function Techbology({ technologies }) {
  console.log(technologies)

  return (
    <div className="article-list">
      {technologies.map(item => (
        <ArticleCard key={item.sys.id} item={item} />
      ))}

      <style jsx>{`
        .article-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px 60px;
        }
      `}</style>
    </div>
  )
}
