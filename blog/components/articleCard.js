import React from 'react'
import Link from 'next/link'

const articleCard = ({item}) => {

const {title, location, slug, time, thumbnail } = item.fields;


  return (
   <div>
       <div>
           Image here
       </div>
       <div className='info'>
           <h2>{title}</h2>
           <h3>reading time {time}</h3>

       </div>
   \

       <div className="actions">
           {/* backtick not work why? */}
          <Link href={'/technology/' + slug}><a>Cook this</a></Link> 
        </div>
   </div>
  )
}

export default articleCard