import { useParams, useHistory } from "react-router-dom";
import useFetch from "../../customize/fetch";

const DetailBlog = ()=>{
    let {id} = useParams()
    let history = useHistory()

    const {data:dataBlogDetail, isLoading, isError} = useFetch
  (`https://jsonplaceholder.typicode.com/posts/${id}`, false)

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
            <div className="blog-detail">
                {isLoading === false && isError===false && dataBlogDetail  && 
                  <>
                    <div className="title">
                        {dataBlogDetail.title}

                    </div>
                    <div className="content">
                        {dataBlogDetail.body}

                    </div>             
                  </>

                }
                {isLoading === true &&
                  <div>Loading data...</div>

                }
            </div>
        </div>
    )
}
export default DetailBlog;