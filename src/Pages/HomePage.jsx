import { useEffect, useState } from "react";
import BlogList from "../Components/BlogList";
import Layout from "../Layout/Layout";
import { postLatest } from "../APIRequest/APIRequest";
import Loader from "../Components/Loader";


const HomePage = () => {

    const [list, setList] = useState(null)

    useEffect(() => {
        ( async () => {
            let res = await postLatest()
            setList(res);
        })()
    },[])

    return (
        <Layout>
            <h1>Home Page</h1>
            {list === null ? <Loader></Loader> : <BlogList list={list}></BlogList>}
        </Layout>
    );
};

export default HomePage;