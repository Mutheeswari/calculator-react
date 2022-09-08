import Mutheeswari from "./Mutheeswari";
// import {useState} from  "react";
// import {Button, Alert} from "react-bootstrap";
// const name1="shobana"
// const val="Hello"
const Home = () => {
    // const [cnt, setCnt]=useState(0);
    const handleName =(candname)=>{
      // setCnt(cnt + 1)
      alert(candname)
    }

    return (
      <>
    {/* <Mutheeswari handleValue={handleName}/> */}
    {/* <Alert variant='primary'>This is text alert</Alert>
    <Button variant="primary">Increment</Button>
    <Button variant="primary">Decrement</Button> */}
    <button type="button" class="btn btn-success">Success</button>
    {/* <div>
    {cnt}
    </div> */}
    </>
    );
  };
  
  export default Home;