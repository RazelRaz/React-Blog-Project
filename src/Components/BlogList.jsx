import { Link } from "react-router-dom";


const BlogList = (props) => {
    return (
        <div>
            <div className="container mx-auto my-16 p-9">
                <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {
                        props.list.map((item, key) => {
                            return (
                                <div key={key.toString()} className="card w-100 glass">
                                    <figure><img src={item['img']} alt={item['title']} /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{item['title']}</h2>
                                        <p>{item['short']}</p>
                                        <div className="card-actions justify-end">
                                        <button className="btn btn-primary"><Link to={'/'}>See Details</Link></button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    


                </div>
            </div>
        </div>
    );
};

export default BlogList;