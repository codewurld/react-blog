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
        { title: "Note From Inspiration", body: "don’t be<br>like the girl<br>for whatever reason<br>who rejects the hands<br>of her heart’s desire<br>when I reach for you<br>waste no time<br>flirting with man’s<br>two most seductive temptresses:<br>distraction and procrastination;<br>reach back immediately<br>and embrace me fully<br>like this moment<br>is the only one<br>that will ever exist<br>just like you<br>I am curious too<br>to discover<br>what we’ll create", author: "September Child", id: 1 },
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

    return (
        <div className="home">
            {/* using props -> key mapping  */}
            <BlogList blogs={blogs} type="Musings" />

        </div>
    );
}

export default Home;