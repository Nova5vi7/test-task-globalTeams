import {useState, useEffect} from 'react'
import Post from '../components/Post.js'
import getData from "../services/get-posts";
import '../styles/posts-container.scss';

const PostsContainer = () => {
    const [postData, setPostData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPost = async () => {
        const data = await getData()
        setLoading(false)
        setPostData(data)
    }

    useEffect(() => {
        getPost()
    }, [])

    if(loading) {
        return "Loading"
    }

    return (
        <div className="posts-container">
            {postData.map((post) => (
                <Post postData={post} key={post.id}/>
            ))}
        </div>
    );
}

export default PostsContainer;
