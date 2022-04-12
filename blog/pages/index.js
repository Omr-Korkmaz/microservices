import { createClient } from 'contentful'

export async function getStaticProps() {

  const client = createClient({
    //get them into .env -- after fixing the typeerror problem
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
    <div className="">
     Techbology article-list
    </div>
  )
}