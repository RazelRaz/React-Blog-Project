import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useEffect, useState } from "react";
import { postByCategory } from "../APIRequest/APIRequest";
import Loader from "../Components/Loader";
import BlogList from "../Components/BlogList";


const Category = () => {

    let {categoryID} = useParams();
    

    const [list, setList] = useState(null)

    useEffect(() => {
        ( async () => {
            let res = await postByCategory(categoryID)
            setList(res);
        })()
    },[])


    return (
        <Layout>
            {list === null ? <Loader></Loader> : <BlogList list={list}></BlogList>}
        </Layout>
    );
};

export default Category;