import {useState} from  "react";
import {Button, Alert} from "react-bootstrap";
// const name1="shobana"
// const val="Hello"
const Home = () => {
    const [cnt, setCnt] = useState(0);
    const increment =() => {
      setCnt(cnt + 1)
    }
    const decrement =() => {
      setCnt(cnt - 1)
    }

    return (
      <>
    {/* <Mutheeswari handleValue={handleName}/> */}
    <Alert variant='primary'>This is text alert</Alert>
    <Button onClick={increment} variant="primary">Increment</Button> &nbsp;&nbsp; 
    <Button onClick={decrement} variant="primary">Decrement</Button>

    {<div>
    {cnt}
    </div>}
    </>
    );
  };
  
  export default Home;