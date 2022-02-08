import { useParams, useHistory } from "react-router-dom";

const DetailBlog = ()=>{
    let {id} = useParams()
    let history = useHistory()
    const handleBackBlogData =()=>{
        history.push('/blog')
    }
    return(
        <div>
            <div>
                <span onClick={handleBackBlogData}>
                    &lt;-- Back
                </span>
            </div> 
            <h1>Detail blog with id= {id}</h1>
        </div>
    )
}
export default DetailBlog;