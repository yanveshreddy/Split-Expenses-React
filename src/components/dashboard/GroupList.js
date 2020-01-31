import React ,{useState,useEffect,useContext} from 'react';
import API from "../../apiconfig/Api";
import UserContext from '../../UserContext'
import Item from './Item'
import {  
    Link 
  } from 'react-router-dom';

const GroupList = () => {

    const [groupData,setListOfGroups] = useState([]);
    const user = React.useContext(UserContext);
    
    useEffect(() => {

        API.get(
            `/groups/${user.user_Id}/getAllGroupsForaUser`
          )
          .then(res =>{
            const groupsData=res.data.data.map(a =>{
              const dataObj={
                "groupId":a.groupId,
                "groupName": a.groupName,
                "groupDescription":a.groupDescription,
                "createdBy":a.createdBy.firstName,
                "noOfUsers":a.users.length
              }
            return dataObj
            }
          )
            console.log(groupsData)
            setListOfGroups(groupsData);
  
  
          }).catch(error =>{
            console.log(error)
          })
    },[]);



    return (
        <div className="bg-gray-300 w-3/4">   
            <h1 className="text-blue-900 font-extrabold mx-40 my-4 text-xl font-sans">Your Groups:</h1>

            <div className="mx-40">
            {groupData.map((item, index) => (

                    <Link to={`/${item.groupId}/groupdashboard`}>
                    <Item key={index} item={item} />
                    </Link>

            ))}
            </div>

        </div>
    );
};

export default GroupList;