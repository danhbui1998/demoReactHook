import {useState} from 'react'
import './Blog.scss'

const AddNewBlog = ()=>{

    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');

    const handleSumbitBtn = ()=>{
        if(!title){
            alert('Please enter a title')
            return
        }
        if(!content){
            alert('Please enter a content')
            return
        }
        alert('title: ' + title + ' content: ' + content)
    }

    return (
        <div className="add-new-blog">
                <span className="add-new-title">--Add new blog</span>
                <div className="input-data">
                    <label htmlFor="">Title:</label>
                    <input type="text" 
                        value={title} 
                        onChange={(e)=>{setTitle(e.target.value)}}
                    />
                </div>
                <div className="input-data">
                    <label htmlFor="">Content:</label>
                    <input type="text" 
                        value={content} 
                        onChange={(e)=>{setContent(e.target.value)}}
                    /> 
                </div>
                <button onClick={handleSumbitBtn}>Submit</button>
        </div>
    )
}
export default AddNewBlog