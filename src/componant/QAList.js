// QAList.js
import React from 'react';
import { Row, Accordion } from 'react-bootstrap';
import { question } from './../data';

const QAList = ({ data, deleteitem }) => {
const localData=JSON.parse(localStorage.getItem('items'))
  const deleteOne = (ID) => {
    const index = question.findIndex((item) => item.id === ID)
    question.splice(index,1)
    console.log(index)
    console.log(question)
    deleteitem(question)
  

  }
  return (
    <Row>
      <Accordion>
        {localStorage.getItem('items')!=null? (
          localData.map((item) => (

            <Accordion.Item key={item.id} eventKey={item.id}>
              <Accordion.Header><div className=''> {item.q}</div></Accordion.Header>
              <Accordion.Body className='text-center'> <div className=' p-4 d-inline' > {item.a}</div>
                <button onClick={() => deleteOne(item.id)} className=' btn-style'>Delete</button></Accordion.Body>
            </Accordion.Item>
          ))
        ) : (
          <h1 className='fs-2 p-4'>No questions yet</h1>
        )}
      </Accordion>
    </Row>
  );
};

export default QAList;
