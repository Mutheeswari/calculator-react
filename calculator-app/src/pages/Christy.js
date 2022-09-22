
function Christy (props) {
    const myObj={
        "name":"christy",
        "age":25
    }
    const personname = "chris";
    return (
        <>
            <h1>Welcome to Christy</h1>
            <button onClick={event =>props.handleValue(personname)}>Increment</button>
        </>
    );
  };
  
  export default Christy;