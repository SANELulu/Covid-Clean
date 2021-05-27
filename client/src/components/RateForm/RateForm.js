import React, { Component, useState } from "react";
import StarRating from "./StarRating";
import Checkboxes from "./Checkbox";
import './rate-form.css'
// import axios from "axios";

const Form = ({id}) => {
  

  const [comment, setComment]= useState()
  const [maskRating, setMaskRating]= useState()
  const [socialDistancingRating, setsocialDistancingRating]= useState()
  const [cleanlinessRating, setcleanlinessRating]= useState()
  const [finalRating, setfinalRating]= useState()


   // Grab currentUser and currentBusiness from the user db
  //     // Add the below fields to the user db to store that info

  const commentUpd = (event)=>
    setComment(event.target.value)

    const maskRatingUpd = (event)=>
    setMaskRating(event.target.checked)

    const distancingUpd = (event)=>
    setsocialDistancingRating(event.target.checked)

    const cleanlinessUpd = (event)=>
    setcleanlinessRating(event.target.checked)

    const finalRatUpd = (event)=>
    setfinalRating(event.target.value)



  
  // Once the form is submited this function will post to the backend

  const handleSubmit = (event) => {
    event.preventDefault;
    console.log("handleSubmit hittin");
    console.log(maskRatingUpd)
    
  };

  

 
    return (
      <div>
            <div className='rateForm'>
            <form onSubmit={handleSubmit}>
                
                <label className='title'>Hi {id} <br></br>Please rate your experience on: {id}</label>
                <br></br>

                {/* Rate if the employees are wearing masks and Gloves */}
                
                    

                <label> Employees Wear Masks and Gloves</label>
                <Checkboxes 
                className='checkbox'
                onChange={maskRatingUpd}
                />
                
               
    
                
                {/* Rate Social Distancing  */}
                
                <label>Social Distancing</label>
                <Checkboxes 
                className='checkbox'
                onChange={distancingUpd}
                />
               
                
            
    
                {/* Rate Cleanliness */}
                
                <label>Cleanliness</label>
                <Checkboxes 
                className='checkbox'
                onChange={cleanlinessUpd}
                />
                

                

                <label>Please feel free to provide more details about your experience in {id}</label>
                <br></br>
                <textarea value={comment} 
                onChange={commentUpd}>Comment
                </textarea>
                
                <br></br>

                <label>Please provide your final Rating on {id}</label>
                <StarRating
                className='star-rating'
                onChange={finalRatUpd}/>
    
    
                <button className='buttonPost' type="submit">Post Rating</button>
    
            </form>
            </div>
        </div>
    
      // <div>
      //   <form onSubmit={handleSubmit}>
      //     <label>
      //       Hi  Please rate your experience on{"{id}"}
            
      //     </label>

      //     {/* Rate if the employees are wearing masks and Gloves */}
      //     <label>Employees wear Masks and Gloves</label>
      //     <Checkboxes onChange={maskRatingUpd} />

      //     {/* Rate Social Distancing  */}
      //     <label>Social Distancing</label>
      //     <Checkboxes onChange={distancingUpd} />

      //     {/* Rate Cleanliness */}
      //     <label>Cleanliness</label>
      //     <Checkboxes onChange={cleanlinessUpd} />

      //     <label>
      //       Please feel free to provide more details about your experience in 
      //       {id}
      //     </label>
      //     <textarea
      //       value={comment}
      //       onChange={commentUpd}
      //     >
      //       Comment
      //     </textarea>

      //     <label>
      //       Please provide your final Rating on {id}
      //     </label>
      //     <StarRating onChange={finalRatUpd} />

      //     <button type="submit">Post Rating</button>
      //   </form>
      // </div>
    );
  
}
export default Form;
