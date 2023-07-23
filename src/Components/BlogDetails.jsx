


const BlogDetails = (props) => {
    

    return (
        <div>
            <div className="container mx-auto my-16 p-9">
                <div className="grid grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-1">
                    <div className="card w-100 glass">
                        <figure><img src={props.list['postDetails']['img']} alt="image" /></figure>
                        <h2 className="card-title">{props.list['postDetails']['title']}</h2>
                        <p>{props.list['postDetails']['content']}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;