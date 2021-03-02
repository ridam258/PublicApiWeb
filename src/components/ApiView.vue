<template>
    
        
            <div>
                <ul>
            
            <li v-for="api in entriesArray" :key="api" class="has-text-centered">
                <a :href="api['Link']">
                <base-card class="m-3">
                    <div class="is-flex is-justify-content-space-between is-align-items-center">
                        <h1 style="margin:0">{{api["API"]}}</h1>
                        <h4 style="margin:0">{{api["Auth"]}}</h4>
                    </div>
                    <div>
                        <p style="text-align:left">{{api["Description"]}}</p>
                        
                        <a href="http://">{{api["Link"]}}</a>
                        
                    </div>
                </base-card>
                </a>
            </li>
            
        </ul>
            </div>
        
    
</template>

<script>
import BaseCard from './BaseCard.vue';
export default {
  components: { BaseCard },
    props:["entriesArray"],
    data(){
        return{
            apiLists:[],
        }
    },
    created(){
        console.log(this.entriesArray);
        
        console.log('hi');    
    }
    }
</script>