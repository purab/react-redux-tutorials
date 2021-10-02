const Home = () => {
    const handleClick = (e) => {
        console.log('hello ninjas'+e)
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;
<div className="home">
    <h2>Homepage</h2>
</div>