
// reducers.js 작성 파일, 모듈화

const initialState = {
    list: [{
      "index":1,
      "type":"전체공지",
      "title":"title",
      "content":"content",
      "sFile":[{"file":"/img/pencil1.png"},{"file":"/img/pencil2.png"}],
      "writer":"writer",
      "date":"2021-09-01"
  },
  {
      "index":2,
      "type":"전체공지",
      "title":"title",
      "content":"content",
      "sFile":[],
      "writer":"writer",
      "date":"2021-09-01"
  }],
}
// function 기본 리듀서구조 (state="초기값", action){}
const noticeReducers = (state = initialState, action) => {
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
  
  export default noticeReducers;