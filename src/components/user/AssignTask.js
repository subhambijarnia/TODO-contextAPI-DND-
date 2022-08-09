import React from 'react'
import { useParams } from 'react-router-dom';

function AssignTask() {
  let { userId } = useParams();
  console.log('userId = ', userId);
  return (
    <h1>AssignTask</h1>
  )
}

export default AssignTask