import { useParams } from "react-router-dom";

const DetailBlog = ()=>{
    let {id} = useParams()
    return(
        <div>
             <h1>Detail blog with id= {id}</h1>
        </div>
    )
}
export default DetailBlog;