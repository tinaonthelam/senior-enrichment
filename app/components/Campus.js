import React from 'react';
import StudentsContainer from '../containers/StudentsContainer';

export default function Campus (props) {

  const campus = props.selectedCampus;
  console.log('campus', campus)

  return (
    <div className="album">
      <div>
        <h3>{ campus.name }</h3>
        <img src={ campus.image } className="img-thumbnail" />
      </div>
      <StudentsContainer students={campus.students} />
    </div>
  );
}

      // <SongsContainer songs={album.songs} />
