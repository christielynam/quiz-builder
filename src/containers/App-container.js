import { addQuiz } from '../actions';
import { connect } from 'react-redux';
import App from '../components/App/App';

const mapStateToProps = (mall) => {
  return {
    quizzes: mall.quizzes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addQuiz: (data) => {
      dispatch(addQuiz(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps);
