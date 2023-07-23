import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useEffect, useState } from "react";
import { postDetails } from "../APIRequest/APIRequest";
import Loader from "../Components/Loader";
import BlogDetails from "../Components/BlogDetails";


const DetailsPage = () => {

    let {postID} = useParams();

    const [list, setList] = useState(null)

    useEffect(() => {
        ( async () => {
            let res = await postDetails(postID)
            setList(res);
        })()
    },[postID])


    return (
        <Layout>
            {list === null ? <Loader></Loader> : <BlogDetails list={list}></BlogDetails>}
        </Layout>
            
    );
};

export default DetailsPage;