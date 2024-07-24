<template >
  <div class="container">
    <!--<SearchBar @onSearchCity="onSearchCity"/>-->
    <SearchBar/>
    <!-- 전달받은 이벤트명='실행함수' --> 
     <!--<Weatherinfo :weatherData="props.weatherData"/>-->
    <Weatherinfo />
  </div>
</template>
<script setup>
import SearchBar from './SearchBar.vue';
import Weatherinfo from './Weatherinfo.vue';
//날씨데이터 상태변수
//const props=defineProps({
//  weatherData:Object,
//});
//console.log("mainComp: ", props.weatherData);
//검색어 이벤트 실행함수
//const emits=defineEmits(['onSearchCity']); //이벤트 정의 후 함수 반환
//const onSearchCity= (city)=>{
 // console.log('MainComp:', city);
  //부모 App.vue에 데이터 전달
 // emits('onSearchCity',city);
//};
</script>
<style lang="scss" scoped>
    .container{
      padding: 20px;
    }
</style>