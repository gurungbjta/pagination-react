import React from 'react'

// 'racf' tab for shortcut to arrow function
export const Posts = ({posts, loading}) => {
    if(loading){ // if loading is true just print "loading..."
        return <h2>loading...</h2>
    }
    return ( // else arraynge them in a list-group using bootstrap
        <ul className="list-group mb-4">
            {posts.map(post => (
                <li key={post.id} className="list-group-item">
                    {post.title}
                </li>
            ))}
        </ul>
    )
}
