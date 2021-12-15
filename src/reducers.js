
// reducers.js 작성 파일, 모듈화

const initialState = {
    number: 1,
  }
  
  const reducers = (state = initialState, action) => {
    switch (action.type) {
      case "INCREMENT":
      return {
        ...state,
        number: state.number+1
      };
      default:
        return state;
      }
  };
  
  export default reducers;