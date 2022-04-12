import { createClient } from 'contentful'
import ArticleCard from '../components/articleCard'
export async function getStaticProps() {

  const client = createClient({
    //get them into .env -- after fixing the typeerror problem
    // space: process.env.CONTENTFUL_SPACE_ID,
    // accessToken: process.env.CONTENTFUL_ACCESS_KEY
    space: 'nyg8dvrb4de2',
    accessToken: 'gPNnpsd2vQuFso1KLfn7RXWuctgTngDpzJCvjksL_Xc'

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
    <div className="">
      {/* {technologies.map(item=>(
       <div key={item.sys.id}> {item.fields.title}</div>
      ))} */}
      {technologies.map(item=>{
        return (
          <ArticleCard key={item.sys.id} item={item} />
        )
      })}
     Techbology article-list
    </div>
  )
}