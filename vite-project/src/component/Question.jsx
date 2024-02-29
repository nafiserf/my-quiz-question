import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { questions } from './quiz-data';

const Quest = () => {
    const[index,setIndex]=useState(0);
    const[add,setAdd]=useState(0);
    const [plus,setPlus]=useState(0);
    const [showAnswer, setShowAnswer] = useState(false);


    
    function MouseOver(event) {
        event.target.style.background = 'black';
        event.target.style.color = 'white';
      }
      function MouseOut(event){
        event.target.style.background="";
        event.target.style.color = "";
      }
    
    const handlePrev=()=>{
        setIndex(index - 1)
        if(index  - 1 <0){
            setIndex(questions.length-1)
        }
    }
    const handleNext=()=>{
        setIndex(index + 1)
        if(index + 1 >= questions.length){
           setIndex(0)
        }
       
        
    }
   
    const addOne=()=>{
        if(questions[index].options[add]===questions[index].correctAnswer){
            setPlus( plus + 1)
        }
    }
    const addTwo=()=>{
        if(questions[index].options[add]===questions[index].correctAnswer){
            setPlus( plus + 2)
        }
    }
    const addThree=()=>{
        if(questions[index].options[add]===questions[index].correctAnswer){
            setPlus( plus + 3)
        }
    }
    const addFour=()=>{
        if(questions[index].options[add]===questions[index].correctAnswer){
            setPlus( plus + 4)
        }
    }
    const handleClick=()=>{
        const correctAnswer = questions[index].correctAnswer;
        setShowAnswer({ questions: questions[index], correctAnswer });
      }
    
   
   
    return (
        <div style={{border:'3px solid black', height:'85vh',display:'flex', justifyContent:'center', alignItems:'center',}}>
            <div className='text-center mt-5'>
            <h2 >{questions[index].question}</h2>
           
        <div style={{margin:'60px'}}>
          
        <button  onMouseOver={MouseOver} onMouseOut={MouseOut}  onClick={addOne} style={{border:'2px solid black', backgroundColor:'gray',color:'black',boxShadow:'3px 3px 3px lightblue' , width:'150px',height:'60px',borderRadius:'15px',marginRight:'20px'}}>
      {questions[index].options[0]}
        </button>
        <button onMouseOver={MouseOver} onMouseOut={MouseOut}  onClick={addTwo} style={{border:'2px solid black', backgroundColor:'gray',color:'black',boxShadow:'3px 3px 3px lightblue' , width:'150px',height:'60px',borderRadius:'15px',marginRight:'20px'}}>
      {questions[index].options[1]}
        </button>
        <button onMouseOver={MouseOver} onMouseOut={MouseOut}  onClick={addThree} style={{border:'2px solid black',  backgroundColor:'gray',boxShadow:'3px 3px 3px lightblue' ,color:'black',width:'150px',height:'60px',borderRadius:'15px',marginRight:'20px'}}>
      {questions[index].options[2]}
        </button>
        <button onMouseOver={MouseOver} onMouseOut={MouseOut}  onClick={addFour} style={{border:'2px solid black', backgroundColor:'gray',color:'black',boxShadow:'3px 3px 3px lightblue' , width:'150px',height:'60px',borderRadius:'15px'}}>
      {questions[index].options[3]}
        </button>
        </div>
        <div>
  <button style={{borderRadius:'20px', padding:'15px'}} className='mb-3' onClick={handleClick}>you can see your answer</button>  
  {showAnswer && <p>The correct answer is: {showAnswer.correctAnswer}</p>}
</div>
       
        <button  onMouseOver={MouseOver} onMouseOut={MouseOut}  onClick={handlePrev} style={{marginTop:'30px', width:'100px', color:'black', backgroundColor:'red',
            height:'40px',borderRadius:'20px',padding:'auto',marginRight:'30px', marginLeft:'50px'}}>Prev</button>
            
        <button onMouseOver={MouseOver} onMouseOut={MouseOut}  onClick={handleNext} style={{width:'100px', color:'black', backgroundColor:'green',
            height:'40px',borderRadius:'20px',padding:'auto',marginRight:'30px'}}>Next</button>
        <h3 className='text-center mt-5' style={{opacity:'0.5', color:'black',letterSpacing:'5px',}}> your score is {plus}</h3>
        </div>
        </div>
        
    );
}

export default Quest;