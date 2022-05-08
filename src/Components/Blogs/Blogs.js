import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h4>Difference between javascript and nodejs?</h4>
            <p>JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a
                 JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.</p>
            <h4>When should you use nodejs and when should you use mongodb?</h4>
            <p>MongoDB represents the data as a collection of documents rather than tables related by foreign keys.
                 This makes it possible for the varied types of data dealt over the internet to be stored decently and accessed in the web applications using Node. js.</p>
            <h4>Differences between sql and nosql databases?</h4>
            <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                 SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</p>
        </div>
    );
};

export default Blogs;