<template>
    
        <ul>
            
            <li style="cursor:pointer" @click="emitFunction(category)" v-for="category in categoryLists" :key="category" class="has-text-centered">
                <base-card class="m-3"><h1>{{ category }}</h1></base-card>
            </li>
            
        </ul>
    
</template>


<script>
import BaseCard from './BaseCard.vue';
export default {
  components: { BaseCard },
    data(){
      return{
          categoryLists:[],
      }
    },
    emits:['show-api'],
    methods:{
        // categoryClicked(cat){
        //     console.log(cat);
            
        // }
        emitFunction(category){
            this.$emit('show-api',category)
            console.log(category);
            
        }
    },
    created(){
        
            
            fetch('https://api.publicapis.org/categories').then((response)=>{
                if(response.ok){
                    return response.json();
                }
                
            }).then((data)=>{
                this.categoryLists=data
                console.log(this.categoryLists);
                
                
            })
            // this.categoryLists=JSON.parse( 'https://api.publicapis.org/categories');
            // console.log(this.categoryLists)
        
    }
    
}
</script>
