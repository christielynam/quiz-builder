const quiz = (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUIZ':
      return [...action.data]

    default:
      return state;
  }
}

export default quiz;
