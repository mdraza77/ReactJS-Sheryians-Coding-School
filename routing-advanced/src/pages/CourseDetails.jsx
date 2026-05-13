import React from "react";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const params = useParams();
  console.log(params);

  return <div>{params.id} Course Details Page</div>;
};

export default CourseDetails;
