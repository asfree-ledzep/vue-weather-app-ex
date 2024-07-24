<script setup>
  import Navbar from './components/Navbar.vue';
  import MainComp from './components/MainComp.vue';
  import {ref, onMounted} from 'vue';////////////
  import {useStore} from 'vuex';/////////////////////
  import About from './components/About.vue';
const store= useStore();///////////
  //날씨데이터 상태변수=>store.js로 이동
 // const weatherData= ref({
 //   icon:'icon',
 //   temp:0,
//    text:'text',
 //   location:'location',
 //   city:'Seoul',//사용자가 입력하는 도시명
 // });
 //앱이 실행되면 날씨데이터 가져오기
//getWeather함수 store.js로 이동
// const getWeather=()=>{
//   //fetch(주소).then((res)=> res.json())
//   //.then(처리내용);  //비동기 실행, json():json데이터로 변환
//   const API_URL=`https://api.openweathermap.org/data/2.5/weather?q=${weatherData.value.city}&appid=a86fd58921986176b99218ca53895f2d`;
//   fetch(API_URL)
//   .then(res=> res.json())
//   .then(data=>{
//     console.log(data);
//     weatherData.value.icon= data.weather[0].icon;
//     weatherData.value.temp=data.main.temp;
//     weatherData.value.text= data.weather[0].description;
//     weatherData.value.location= data.sys.country;
//     weatherData.value.city= data.name;
//     console.log(weatherData.value);
//     })
//     .catch(err=>{
//       alert('에러가 발생했습니다. 잠시 후 다시 시도해 주세요');
//     }
//     );
//  };//end getData
 onMounted(()=>{
  console.log("mounted");
 // getWeather();
   store.dispatch('getWeather');
  }
);


 const onSearchCity=(city)=>{
  console.log('App :', city);
  weatherData.value.city= city;
 // getWeather();
 }
</script>

<template> 
<button @click="$store.dispatch('getWeather')">getWeather</button>
  <Navbar></Navbar>
  <div v-if="!$store.state.toggle">
    <MainComp />
  </div>
  <div v-else>
   <About/>   
  </div>
  <!--<MainComp :weatherData="weatherData" @onSearchCity="onSearchCity"/>--> 
</template>

<style scoped lang="scss">

</style>
