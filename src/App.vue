<template>
  <base-card class="m-0 p-0"><the-header></the-header></base-card>
  <div class="columns m-2 parent" style="margin:0">
    <list-view @show-api="showApi" class="column is-one-third left"></list-view>
    <api-view :entries-array='apiEntries' class="column right"></api-view>
  </div>
</template>

<script>
import BaseCard from './components/BaseCard.vue';
import ListView from './components/ListView.vue';
import TheHeader from './components/TheHeader.vue';
import ApiView from './components/ApiView.vue';
export default {
  components:{
    ListView,
    TheHeader,
    BaseCard,
    ApiView
  },
  data(){
    return{
      apiEntries:[],
      final:[]
    }
  },
  methods:{
    showApi(cat){
      console.log(cat);
      fetch("https://api.publicapis.org/entries?category="+cat).then((response)=>{
        if(response.ok){
          return response.json();
        }
      }).then((data)=>{
        console.log(data.entries);
        this.apiEntries=[];
        for(const id in data.entries){
          this.apiEntries.push({
            API:data.entries[id].API,
            Description:data.entries[id].Description,
            Auth:data.entries[id].Auth,
            HTTPs:data.entries[id].HTTPS,
            Cors:data.entries[id].Cors,
            Link:data.entries[id].Link,
            Category:data.entries[id].Category
          })
        }
        
      
      })
    }
  }
  
}
</script>


<style>
html{

  margin: 0;
  overflow: hidden;
}

.left {
  height: 88.1vh;
  overflow-y: scroll;
}
.right {
  overflow-y: scroll;
  height: 88.1vh;
  justify-content: center;
}
</style>