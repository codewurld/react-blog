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

    const [blogs, setBlogs] = useState([
        { title: "Chocko", body: "lorem ipsum...", author: "Jojo", id: 1 },
        { title: "Dracko", body: "lorem ipsum...", author: "Siri", id: 2 },
        { title: "Top gun shotta", body: "lorem ipsum...", author: "Pana", id: 3 },
    ])

    const [name, setName] = useState('mario')

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);

    }

    useEffect(() => {
        console.log("print out use effect");
    }, [name]);

    // const handleClickAgain = (name) => {
    //     console.log('hello ' + name);
    // }

    return (
        <div className="home">
            {/* <h2>Homepage</h2> */}
            {/* <p>{name} has {age} thousand balance</p> */}
            {/* <button onClick={handleClick}>Click Me</button> */}
            {/* <button onClick={() => handleClickAgain('mario')
            }>Click Me Again</button> */}

            {/* OUtputting list in React */}
            {/* {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2> {blog.title} </h2>
                    <p>Written by {blog.author} </p>
                </div> */}
            {/* ))}
        </div> */}

            {/* using props -> key mapping  */}
            <BlogList blogs={blogs} type="Musings" handleDelete={handleDelete} />
            <button onClick={() => setName('luigi')}>change name</button>
            <p>{name}</p>
        </div>
    );
}

export default Home;