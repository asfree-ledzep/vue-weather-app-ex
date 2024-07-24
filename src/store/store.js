import {createStore} from 'vuex';
//store 만들기, main.js에 등록
export default createStore({
    state:{//initial state
        count:0,
        weatherData:{
          icon:'icon',
          temp:0,
          text:'text',
          location:'location',
          city:'Seoul',
        },
        toggle:false, //true=> about 보여주기
    },
    mutations:{ 
        //mutations(데이터변경)-commit함수를 호출 상태변경함
        addCount(state, payload){
            state.count+=1+payload;
        },
        updateWeather(state, payload){
          state.weatherData.icon=payload.weather[0].icon;
          state.weatherData.temp=payload.main.temp;
          state.weatherData.text= payload.weather[0].description;
          state.weatherData.location= payload.sys.country;
          state.weatherData.city= payload.name;
          //업데이트 된 정보를 weatherInfo에서 사용함
        } ,
        //검색어 관련
        onSearchCity(state, payload){
          state.weatherData.city=payload;          
        },
        toggleButton(state){
          state.toggle=!state.toggle;
        }
    },
    // 비동기 작업을 구현할 부분=>이후 mutaitons 호출
    actions:{
         getWeather(context){ 
          //함수명만 작성 , context전역객체 state참조에 사용함
            //const API_URL=`https://api.openweathermap.org/data/2.5/weather?q=${context.state.weatherData.city}&appid=a86fd58921986176b99218ca53895f2d`;
            const API_KEY=import.meta.env.VITE_API_KEY;  //.env파일의 API_KEY
  
            const API_URL=`https://api.openweathermap.org/data/2.5/weather?q=${context.state.weatherData.city}&appid=${API_KEY}`;
            fetch(API_URL)
            .then(res=> res.json())
            .then(data=>{
              console.log("action >>", data);      
              //mutations함수로 날씨정보 업데이트   
              context.commit('updateWeather', data); //함수명,payload값
              })
              .catch(err=>{
                alert('에러가 발생했습니다. 잠시 후 다시 시도해 주세요');                
              }
              );
           }//end getData
    },
});