import React from 'react';

const Item = (props) => {
    const {groupName,createdBy,noOfUsers} =props.item;
    return (
        <>
            <div className="md:flex bg-blue-900 justify-between rounded-lg border-gray-700 p-6 mb-4">

              <h1 className="text-blue-400 text-2xl  font-sans font-bold ">{groupName}</h1>
              <div className="flex-col flex-wrap">
                <p className="text-blue-400 text-lg font-medium font-sans text-right ">createdBy: </p>
                <p className="text-blue-400 text-lg font-medium font-sans text-center">{createdBy}</p>
                </div>
            </div>
        </>
    );
};

export default Item;