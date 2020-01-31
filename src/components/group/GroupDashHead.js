import React from 'react';
import {  
    Link 
  } from 'react-router-dom';
  import UserContext from '../../UserContext'

const GroupDashHead = () => {
    const user = React.useContext(UserContext);
    return (
        <header className="bg-blue-900 w-full  flex justify-center rounded-b-lg  border-b-4 border-dotted px-4 py-3 ">
        <div className="max-w-4xl w-full h-1/3"> 
            <div className="my-4">
                <h1 className="text-4xl text-blue-400 font-extrabold font-serif">  Welcome, {user.userName}! </h1>
                <p className=" text-lg text-blue-200">Start Creating Group and Add Users</p>
                <div className="relative mt-4 flex justify-between">
                    <div className="">
                    <Link to="/creategroup"><span className="bg-red-500 text-indigo-100 font-bold mt-6 px-4 py-2 rounded-full text-lg uppercase">Create New Group</span></Link>
                     
                    </div>
                    
                </div>
            </div>
        </div>
    </header>
    );
};

export default GroupDashHead;