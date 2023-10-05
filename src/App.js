
import { Container, Row, Col } from 'react-bootstrap';
import FormInput from './componant/FormInput'
import QAList from './componant/QAList'
import { question } from './data'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [data, setData] = useState(question)

  const addItem = () => {
    localStorage.setItem('items',JSON.stringify( [...question]))
    setData([...question])
    notify('Done Add 👌','success')
  }
  const deleteOne = (items) => {
    localStorage.setItem('items',JSON.stringify([...items]))
    setData([...items])
    if(items.length<=0){
      deleteAll()
    }
    notify('Delete Question 👌','success')

  }
  const deleteAll = () => {
    localStorage.removeItem('items')
   question.splice(0,question.length)
    setData([])
    notify('Delete All 👌','success')

  }
  const notify = (massage,type) =>{ 
    if(type==='success'){
    toast.success(massage)}
  else if(type==='Error'){
    toast.error(massage)};
  }
  return (
    <div className="color-body font text-center">
      <Container className='p-5'>
        <Row className='justify-content-center'>
          <Col sm='4'>
            <div className=' fs-2  text-center'>Popular Questions</div>
          </Col>
          <Col sm='8'>
            <FormInput onAdd={addItem}notify={notify} />
            <QAList data={data} deleteitem={deleteOne} />
            {
              localStorage.getItem('items')!=null ? (<button onClick={()=>deleteAll()} className='btn-style w-100 m-3'>Delete All</button>) : null


            }

          </Col>
        </Row>
        <ToastContainer />
      </Container>

    </div>
  );
}

export default App;
