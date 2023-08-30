<template >
    <div>
        <CardProjects
         :projectsList="projectsList"/>
    </div>
</template>
<script>
import axios from 'axios';
import CardProjects from './CardProjects.vue';
export default {
    name:'AppMain',
    components:{
        CardProjects
    },
    data() {
        return {
            apiUrl:'http://127.0.0.1:8000/api/projects',
            projectsList:[],
        }
    },

    methods: {
        apiCall(){
            axios.get(this.apiUrl).then((response) =>{
                this.projectsList = response.data.results.data;
                
            })
        }
    },
    created(){
       this.apiCall()
    }
}
</script>
<style lang="scss" scoped>
     @use '../styles/partials/mixins.scss' as*;
     @use '../styles/partials/variables.scss' as*; 

     main{
        background-color: orange;
        display: flex;
        flex-direction: column;
    }
</style>