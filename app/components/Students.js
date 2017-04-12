import React from 'react';

export default function Students (props) {
  const students = props.students;

  return (
    <table className='table'>
      <thead>
        <tr>
          <th></th>
          <th>Student Num</th>
          <th>Name</th>
          <th>Campus</th>
        </tr>
      </thead>
      <tbody>
        {
          students && students.map(student => (
            <tr key={student.id}>
              <td>
                <button className="btn btn-default" >
                  <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                </button>
              </td>
              <td>{ student.id }</td>
              <td>{ student.firstName }</td>
              <td> { student.campusId }</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}
