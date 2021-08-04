import React from 'react';
import { useState, useEffect } from 'react';
import BlogList from './bloglist';

const Home = () => {

    // let name = "Shola"

    // const [name, setName] = useState("Shola")
    // const [age, setAge] = useState(103)

    // const handleClick = () => {
    //     // console.log('Hello my guy');
    //     setName("Timi");
    //     setAge(900);

    // }

    const [blogs, setBlogs] = useState(null)
    const [error, setError] = useState(null);
    // const [isPending, setIsPending] = useState(true);

    // useEffect to fetch data from json server
    // line 27 - 28 handles fetch error based on response object
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                if (!res.ok) {
                    throw Error('oops, could not find the data you requested for')
                }
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                // setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
            })
    }, []);

    return (
        <div className="home">
            {/* {isPending && <div>Just a sec...</div>} */}
            {/* using props -> key mapping  */}
            {error && <div> {error} </div>}
            {blogs && <BlogList blogs={blogs} type="Musings" onClick={blogs.body} />}

        </div>
    );
}

export default Home;