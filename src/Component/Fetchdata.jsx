
import React from 'react';
import useFetchdata from '../Utils/useFetchdata';
import '../All-css/Fetchdata.css'
export default function Fetchdata() {
    const fetchPost = useFetchdata('https://jsonplaceholder.typicode.com/posts')
    const fetchComment = useFetchdata('https://jsonplaceholder.typicode.com/comments')

    return (
        <>
            <h1 className='heading'> user post api</h1>
            <div className='contaner'>

                {
                    fetchPost.map((item, id) => (
                        <div key={id} className="card">
                            <h4> user id:{item.userId}</h4>
                            <p> title:{item.title}</p>
                        </div>
                    ))
                }

            </div>
            <h1 className='heading'> user comment api</h1>
            <div className="container-2">
                {
                    fetchComment.map((item2, id) => (
                        <div key={id} className="card2">
                            <h4> postId:{item2.postId}</h4>
                            <p> name:{item2.name}</p>
                        </div>
                    ))
                }

            </div>
        </>
    );
}

