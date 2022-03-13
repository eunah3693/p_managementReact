
// reducers.js 작성 파일, 모듈화

const initialState = {
  type:"취업규칙",
  title:"title",
  content:"content",
  writer:"writer",
  sFile:""
}
  
const noticeDetailReducers = (state = initialState, action) => {
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
  
  export default noticeDetailReducers;