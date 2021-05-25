import React from "react";
import "./index.css";
import { Button, Container, Form } from "react-bootstrap";
function CityInput({city,setCity,fetchCityWeather}) {
  
  const [error,setError] = React.useState("");
  const handleInputChange=(event)=>{
    setCity(event.target.value);
  };
  const handleSubmit=()=>{
    if(!city){
      
      setError("City field is Empty");
    }
    else{
      setError("");
      fetchCityWeather();
    }
  };
  //console.log("City is ",city);
  return (
    <Container>
      <Form>
        <Form.Group controlId="formBasicText">
          <Form.Label>
            <h1 className="text_success">Enter Your City Here</h1>
          </Form.Label>
          
          <Form.Control
          value={city}
          type="text"
           placeholder="Enter city" 
          onChange={handleInputChange}
          />
          <p className="text-danger">{error}</p>
        </Form.Group>
        <Button variant="info"onClick={handleSubmit}>Submit</Button>
      </Form>
    </Container>
  );
}

export default CityInput;
