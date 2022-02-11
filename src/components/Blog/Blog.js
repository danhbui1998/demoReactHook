import React from 'react';
import useFetch from '../../customize/fetch';
import {Link, useHistory} from 'react-router-dom'

import './Blog.scss';

const Blog = () => {

  let history = useHistory()

  const {data:dataBlog, isLoading, isError} = useFetch
  (`https://jsonplaceholder.typicode.com/posts`, false)

  let newDataBlog =[]

  if(dataBlog && dataBlog.length > 0) {
     newDataBlog =dataBlog.slice(0, 10)

  }
  const handleAddNewBlog = ()=>{
    history.push('/add-new-blog')

  }
  return (
    <>
      <div >
        <button className="btn-add-new-blog" onClick ={handleAddNewBlog}>
            + Add new Blog
        </button>
      </div>
      <div className="blog-container">
        { isLoading === false && isError === false &&newDataBlog && newDataBlog.length>0 && 
        newDataBlog.map(item =>(
            <div key={item.id} className="single-blog">
                 <p className="title">{item.title}</p>
                 <p className="body">{item.body}</p>
                   <Link to={`/blog/${item.id}`} exact="true">
                      View details
                   </Link>
            </div>
        ))}
        { isLoading === true && 
          <div>Loading data...</div>
        }
      </div>
    </>
    )
};

export default Blog;
