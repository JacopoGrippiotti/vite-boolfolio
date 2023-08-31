<template>
    <SingleProjectCard v-if="project" class="single-project w-100" 
            :image="project.image"
            :title="project.title"                      
            :type="project.type.name"
            :content="project.content"/>
</template>

<script>
import axios from 'axios';
import SingleProjectCard from '../components/SingleProjectCard.vue'

export default {
    name: 'ProjectShow',
    components: {
        SingleProjectCard
    },
    data() {
        return {
            apiUrl : 'http://127.0.0.1:8000',
            project : false
        }
    },
    methods: {
        getSingleProject(){
            console.log(this.$route.params.slug);
            axios.get(`${this.apiUrl}/api/projects/${this.$route.params.slug}`).then((response) => {
                console.log(response);
                this.project = response.data.results;
            }).catch(function (error) {
                // handle error
                console.log(error);
            });
        }
    },

    created() {
        this.getSingleProject();
    },
}
</script>
<style lang="scss" scoped>
    article.single-project{
        padding-top: 2rem;
        width: 100%;
        border-radius: 1rem;
        padding: 1rem;
        margin-right: 1rem;
        background-color: rgb(221, 221, 221);
        color: black;
        margin-bottom: 2rem;

        *{
            margin-bottom: 1rem;
        }

        img{
            width: 100%;
            height: 10rem;
            object-fit: cover;
        }

        h6 span{
            margin-right: 1rem;
        }

        &:hover{
            background-color: white;
        }
    }

</style>