
function Mutheeswari (props) {
    const myObj={
        "name":"christy",
        "age":25
    }
    const personname = "muthu";
    return (
        <>
            <h1>Welcome to Mutheeswari</h1>
            <button onClick={event =>props.handleValue(personname)}>Increment</button>
        </>
    );
  };
  
  export default Mutheeswari;