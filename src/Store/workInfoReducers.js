
// reducers.js 작성 파일, 모듈화

const initialState = {
    info: {
      "name":"김은아",
      "department":"개발",
      "rank":"직급",
      "position":"매니저",
      "entryDate":"2022-01-01",
      "lateDay":"2021-01-04",
      "email":"eunah3693@naver.com",
      "phone":"010-9824-2104",
    },
    holidayInfo: {
      "name":"김은아",
       "duration":"2022-01-01~2022-12-31",
       "usable":0,
       "used":0,
       "paid":0,
       "unpaid":0
    },
}
  
const workInfoReducers = (state = initialState, action) => {
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
  
  export default workInfoReducers;