import React, { useState, useEffect } from 'react';
import API from '../../apiconfig/Api'

const Card = () => {

    const user_Id = "5df90c4fc8e7ad1124e0b59c";

  const [userOutstandingLent, setOutstandingLent] = useState(0);
  const [userOutstandingSpent, setOutstandingSpent] = useState(0);
  const [userOutstandingAmount,setOutstandingAmount] =useState(0);

  useEffect(() => {
    API.get(
      `/expenses/${user_Id}/getUserOutstandingLent`
    )
      .then(res => {
     //   console.log(res)
        const  totalAmountLent  = res.data.data[0].totalAmountLent;
       // console.log(res.data)
        setOutstandingLent(totalAmountLent);
      }).catch(error =>{
        console.log(error)
      })

      API.get(
        `/expenses/${user_Id}/getUserOutstandingSpent`
      )
        .then(res => {
       //   console.log(res)
          const  totalAmountSpent  = res.data.data[0].totalAmountSpent;
         // console.log(res.data)
         setOutstandingSpent(totalAmountSpent);
         if(userOutstandingLent !=0 && userOutstandingSpent !=0)
        {
          const totalOutstandingAmount = Math.abs(userOutstandingLent - userOutstandingSpent);

          console.log("totalOutstandingAmount Rs:"+ totalOutstandingAmount )
          setOutstandingAmount(totalOutstandingAmount);
  
        }
        }).catch(error =>{
          console.log(error)
        })

        

    });

  return (
    <div className="flex-col-reverse flex-wrap justify-around">

      <div className=" m-4 bg-teal-900 w-64 h-32 rounded-lg">

            <div className="mt-4 text-center text-white text-xl capitalize font-serif p-4"> Outstanding Amount</div>
                <div className="text-center text-white text-lg mx-auto">
                  Rs {Math.round(userOutstandingAmount)}
            </div>

      </div>
      <div className=" m-4 bg-green-800 w-64 h-32 rounded-lg">
      <div className=" mt-4 text-center text-white text-xl capitalize font-serif p-4">Total Amount Lent</div>
                <div className="text-center text-white text-lg mx-auto">
                  Rs {Math.round(userOutstandingLent)}
            </div>
      </div>
      <div className=" m-4 bg-red-800 w-64 h-32 rounded-lg">
      <div className="mt-4 text-center text-white text-xl capitalize font-serif p-4">Total Amount Spent</div>
                <div className="text-center text-white text-lg mx-auto">
                  Rs {Math.round(userOutstandingSpent)}
            </div>
      </div>
    </div>
  );
};

export default Card;
