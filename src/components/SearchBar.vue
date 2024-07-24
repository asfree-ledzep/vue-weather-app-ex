<template >
 <div class="search-bar">
    <form action="" @submit.prevent> <!--폼제출시 초기화(새로고침) 방지-->
        <div class="form-group">
            <input @input="inputText=$event.target.value" type="search" placeholder="지역을 입력하세요">
            <!--<button @click="emits('onSearchCity', inputText)"> -->            
            <button @click="$store.commit('onSearchCity', inputText);
              $store.dispatch('getWeather');
            ">
              <!-- 이벤트명, 전달할 데이터  mutations에 작성 -->
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
            </button>
        </div>
    </form>   
 </div>
 <p>{{ inputText }}</p>
</template>
<script setup>
  import {ref} from 'vue';
  const inputText= ref('');
  //emits함수의 등록
  const emits= defineEmits(['onSearchCity']);// 이벤트명 정의하고 함수 반환
</script>
<style  scoped lang="scss">
    .search-bar {
    padding: 8px 20px;
    border-radius: 40px;
    background: #fff;
    border: 1px solid #ccc;
    padding: 0 20px;
  
    form {
      .form-group {
        display: flex;
        input {
          width: 100%;
          border: none;
          padding: 1em 0;
          font-size: 18px;
          outline: none;
        }
        button {
          background: transparent;
          border: none;
          &:hover { cursor: pointer; }
          .icon { font-size: 24px; }
        }
      }
    }
  }
</style>