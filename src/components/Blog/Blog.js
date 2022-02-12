import React from 'react';
import {Link} from 'react-router-dom'
import {useState} from 'react'


import useFetch from '../../customize/fetch';
import AddNewBlog from './AddNewBlog';
import './Blog.scss';

const Blog = () => {

  const [show, setShow] = useState(false);


  const {data:dataBlog, isLoading, isError} = useFetch
  (`https://jsonplaceholder.typicode.com/posts`, false)

  let newDataBlog =[]

  if(dataBlog && dataBlog.length > 0) {
     newDataBlog =dataBlog.slice(0, 10)

  }
  const handleAddNewBlog = ()=>{
       setShow(true)
  }
  const handleCloseModal = () => {
    setShow(false)
  }
  return (
    <>
        <div >
          <button className="btn-add-new-blog" onClick ={handleAddNewBlog}>
              + Add new Blog
          </button>
        </div>
        {
          show && 
          <div className="modal-add-new-blog" onClick={handleCloseModal}>
            <div className="modal-container" onClick = {(e)=>e.stopPropagation()}>
              <div className="modal-header">

              </div>
              <div className="modal-body">
                <AddNewBlog/>

              </div>
              <button class="btn-modal-close" onClick={handleCloseModal}>Close</button>

            </div>
          </div>
        }
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
