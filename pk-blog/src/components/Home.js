import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isPending,setIsPending] = useState(true)
    const [error,setError] = useState(null)

    useEffect(()=>{
        console.log('use effect ran ')
        fetch('http://localhost:8000/blogs')
            .then(res =>{
                if(!res.ok) {
                    throw Error('could not fetch the data for that resource')
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                setBlogs(data)
                setIsPending(false)
                setError(null)
            })
            .catch((err) => {
                setIsPending(false)
                setError(err.message)
            })
        
    },[])
    return ( 
        <div className="home">
            {error && <div> {error}</div>}
            {isPending && <div>loading...</div>}
           {blogs && <BlogList blogs={blogs} title={'All Blogs!'} /> }           
        </div>
     );
}
 
export default Home;
<div className="home">
    <h2>Homepage</h2>
</div>