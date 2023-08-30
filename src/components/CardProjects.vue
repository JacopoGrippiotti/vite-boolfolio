<template>
    <div class='container'>
        <SingleProjectCard v-for="project in projectsList"
            :image="project.image"
            :title="project.title"                      
            :type="project.type.name"
            :content="project.content" />
    </div>
</template>
<script>
import SingleProjectCard from './SingleProjectCard.vue';
export default {
    name:'CardProjects',
    components:{
        SingleProjectCard
    },
    props:{
        projectsList:Array
    },
    data(){
        return{
            
            
        }
    },
    
}
</script>
<style lang="scss" scoped>
    @use '../styles/partials/mixins' as*;
    @use '../styles/partials/variables' as*;

    div.container{
        @include flex(row,space-between,wrap);
        width: 90%;
        height: 100%;
        background-color: white;
        margin: 30px auto;
        padding-bottom: 30px;
    }
</style>