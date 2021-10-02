import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    useEffect(()=>{
        console.log('use effect ran ')
        fetch('http://localhost:8000/blogs')
            .then(res =>{
                return res.json()
            })
            .then(data => {
                console.log(data)
                setBlogs(data)
            })
        
    },[])
    return ( 
        <div className="home">
           {blogs && <BlogList blogs={blogs} title={'All Blogs!'} /> }
           
        </div>
     );
}
 
export default Home;
<div className="home">
    <h2>Homepage</h2>
</div>