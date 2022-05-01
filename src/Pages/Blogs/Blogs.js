import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-4 rounded'>
            
            <div> 
                <h2>What is the difference between javascript and nodejs?</h2>
                <h6>- Javascript is a programming language that is used for writing scripts on the website whereas NodeJS is a Javascript runtime environment. Javascript is used in frontend development but Nodejs is used in server-side development. Javascript is capable enough to add HTML and play with the DOM unlike Nodejs which does not have the capability to add HTML tags. Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. V8 is the Javascript engine inside of node.js that parses and runs Javascript. Some of the javascript frameworks are RamdaJS, TypedJS, etc. Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. Javascript is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++ however Nodejs is written in C, C++ and Javascript. </h6>
            </div>

            <div> 
                <h2> What are some differences between sql and nosql databases?</h2>
                <h6>- SQL databases defines and manipulates data based structured query language (SQL). A NoSQL database has dynamic schema (unlikea SQL database) for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. SQL databases are not suited for hierarchical data storage but NoSQL databases are. NoSQL databases are horizontally scalable whereas SQL databases are vertically scalable. SQL databases follow ACID properties (Atomicity, Consistency, Isolation and Durability) whereas the NoSQL database follows the Brewers CAP theorem (Consistency, Availability and Partition tolerance). SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure. </h6>
            </div>

            <div> 
                <h2>What is the purpose of jwt and how does it work?</h2>
                <h6>- A JSON web token(JWT) is a JSON Object which is used to securely transfer information over the web (between two parties). It can be used for an authentication system and can also be used for information exchange. The token is mainly composed of header, payload, signature. These three parts are separated by dots(.). JWT defines the structure of information we are sending from one party to the another, and it comes in two forms – Serialized, Deserialized. The Serialized approach is mainly used to transfer the data through the network with each request and response. While the deserialized approach is used to read and write data to the web token. Authorization is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used across different domains.</h6>
            </div>
        </div>
        
    );
};

export default Blogs;