import React from 'react';
import useFetch from '../../customize/fetch';
import {Link} from 'react-router-dom'

import './Blog.scss';

const Blog = () => {

  const {data:dataBlog, isLoading, isError} = useFetch
  (`https://jsonplaceholder.typicode.com/posts`, false)

  let newDataBlog =[]

  if(dataBlog && dataBlog.length > 0) {
     newDataBlog =dataBlog.slice(0, 10)

  }
  return (
      <div className="blog-container">
        { isLoading === false && isError === false &&newDataBlog && newDataBlog.length>0 && 
        newDataBlog.map(item =>(
            <div key={item.id} className="single-blog">
                 <p className="title">{item.title}</p>
                 <p className="body">{item.body}</p>
                   <Link to={`/blog/${item.id}`}>
                      View details
                   </Link>
            </div>
        ))}
        { isLoading === true && 
          <div>Loading data...</div>
        }
      </div>
    )
};

export default Blog;
