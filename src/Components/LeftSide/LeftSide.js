import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LeftSide.css'

const LeftSide = () => {
    const [coursesList, setCoursesList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCoursesList(data));
    }, [])
    return (
        <div>
             <div>
            <h2>All Courses :{coursesList.length}</h2>
            <div>
                {
                    coursesList.map(category => <p
                        key={category.id}>
                        <Link className='links' to={`/courses/${category.id}`}><button className='btn btn-success'>{category.name}</button></Link>
                    </p>)
                }
            </div>
        </div>
        </div>
    );
};

export default LeftSide;