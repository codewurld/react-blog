import React from 'react';
import BlogList from './bloglist';
import useJSON from './useJSON';

const Home = () => {

    const { data: blogs, error } = useJSON('http://localhost:8000/blogs')
    return (
        <div className="home">
            {/* using props -> key mapping  */}
            {error && <div> {error} </div>}
            {blogs && <BlogList blogs={blogs} type="Musings" onClick={blogs.body} />}

        </div>
    );
}

export default Home;