import React from 'react';
// import StudentsContainer from '../containers/StudentsContainer';

export default function Campus (props) {

  const campus = props.selectedCampus;

  return (
    <div className="album">
      <div>
        <h3>{ campus.name }</h3>
        <img src={ campus.image } className="img-thumbnail" />
      </div>
    </div>
  );
}

      // <SongsContainer songs={album.songs} />
