import React from "react";
import { useParams } from "react-router";
import useJSON from "./useJSON";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error } = useJSON('http://localhost:8000/blogs/' + id)

    return (
        <div className="blog-details">
            {error && <div>{error}</div>}
            {blog && (<article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>
            </article>
            )}
        </div>
    );
}

export default BlogDetails;