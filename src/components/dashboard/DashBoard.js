import React, { useState, useEffect } from "react";
import API from "../../apiconfig/Api";
import Card from "./Card";
import DashHead from "./DashHead";
import GroupList from "./GroupList";

const DashBoard = () => {
  // const user_Id = "5df90c4fc8e7ad1124e0b59c";

  const [groupData, setListOfGroups] = useState([]);
  useEffect(() => {
    API.get(`/groups/view/all`)
      .then(res => {
        const groupsData = res.data.data.map(a => {
          const dataObj = {
            groupId: a.groupId,
            groupName: a.groupName,
            groupDescription: a.groupDescription,
            createdBy: a.createdBy.firstName,
            noOfUsers: a.users.length
          };
          return dataObj;
        });
        console.log(groupsData);
        setListOfGroups(groupsData);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="bg-gray-400  h-screen">

      
      <div>
        <DashHead />
      </div>
      <div className="flex justify-between">
        <GroupList />
        <Card />
      </div>
    </div>
  );
};
export default DashBoard;
