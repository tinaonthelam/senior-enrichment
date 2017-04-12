import { connect } from 'react-redux';
import Students from '../components/Students';

const mapStateToProps = (state) => {
  
  return {
    students: state.students
  };
};

const StudentsContainer = connect(
  mapStateToProps
)(Students);

export default StudentsContainer;
