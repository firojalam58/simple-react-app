import React, { useState } from 'react';
import { useEffect } from 'react';

const RightSide = () => {
    const [coursesList,setCoursesList] = useState([])
    useEffect( ()=>{
        fetch('http://localhost:5000/courses')
        .then (res => res.json())
        .then (data => setCoursesList(data))
    },[])
    
    return (
            <div>
               {
                coursesList.map(course => <p key={course.id}></p>)
               }
            </div>
    );
};

export default RightSide;

