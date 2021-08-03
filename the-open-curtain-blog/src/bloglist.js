import React from "react";

// using/creating props 

const BlogList = ({ blogs, title, type, handleDelete }) => {


    return (
        <div className="blog-list">
            <h2>{type}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2> {blog.title} </h2>
                    <p>Written by {blog.author} </p>
                    <button onClick={() => handleDelete(blog.id)}>Delete</button>
                </div>
            ))}
        </div>


    );
}

export default BlogList;