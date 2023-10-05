import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {question} from '../data'
const FormInput = ({onAdd,notify}) => {
  const [qu,setQu]=useState('')
  const [an,setAn]=useState('')
  const onNewAdd=()=>{
    if(qu===''|| an===''){
      notify('Please complete the information 🧐','Error')
      return;
    }else{
    question.push({id:Math.random(),q:qu,a:an})
    setQu('')
    setAn('')
    onAdd()

  }}
  return (
    
    <Row className="my-3">
      <Col sm='5'>
     
        <Form.Control value={qu} onChange={(e)=>{setQu(e.target.value)}} type="text" placeholder="Enter Questions" />
      </Col>

      <Col sm='5'>
        <Form.Control value={an} onChange={(e)=>{setAn(e.target.value)}} type="text" placeholder="Enter Answer" />
        </Col>
        <Col sm='2'>
        <button onClick={onNewAdd} className="btn-style w-100" type="submit">
          Add
        </button>
      </Col>
    </Row>
  );
};

export default FormInput;
