import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const articleCard = ({item}) => {

const {title, location, slug, time, thumbnail } = item.fields;


  return (
    <div className="card">
    <div className="featured">
      <Image 
        src={'https:' + thumbnail.fields.file.url}
        // width={thumbnail.fields.file.details.image.width}
        // height={thumbnail.fields.file.details.image.height}
           width={200}
        height={200}
      />
    </div>
    <div className="content">
      <div className="info">
        <h4>{ title }</h4>
        <p>Takes approx { time } mins to read</p>
      </div>
      <div className="actions">
        <Link href={'/technology/' + slug}><a>reading</a></Link>
      </div>
    </div>

    <style jsx>{`
       .card {
      }
      .content {
        background: #fff;
        box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
        margin: 0;
        position: relative;
     
      }
      
      .actions {
        margin-top: 20px;
        display: flex;
        justify-content: flex-end;
      }
      .actions a {
        color: #fff;
        background: #f01b29;
        padding: 16px 24px;
        text-decoration: none;
      }
    `}</style>
  </div>
  )
}

export default articleCard