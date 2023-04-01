import React from 'react'
import '../pages/HomePage.css'

const BlogCard = ({heading,description,uploadTime}) => {
  return (
    <div className='blogCard' style={{marginTop: "3rem"}}>
      <h2 className=''>{heading}</h2>
      <h5 className='' style={{color:'gray'}}>{uploadTime}</h5>
      <p style={{fontSize:'20px'}}>{description}</p>
    </div>
  )
}

export default BlogCard