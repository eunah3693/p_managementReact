
// reducers.js 작성 파일, 모듈화

const initialState = 
  [{
      'title': '김은아휴가',
      'start': new Date("2022-03-01"),
      'end': new Date("2022-03-02")
  }];

  
const calendarReducers = (state = initialState, action) => {
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
  
  export default calendarReducers;