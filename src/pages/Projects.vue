<template>
    <section class="projects-wrapper">
        <h1 class="main-title">
            Latest Posts:
        </h1>
        <nav class="pagination">
            <li class="prev" @click="prevPage" v-if="prevPageUrl">
                Previous
            </li>
            <li class="next" @click="nextPage" v-if="nextPageUrl">
                Next
            </li>
        </nav>
        <div class="projects">
            <SingleProjectCard class="single-project w-50" v-for="project in projectsList" 
            :image="project.image"
            :title="project.title"                      
            :type="project.type.name"
            :content="project.content"
                @click="$router.push({ name: 'projects.show', params: { slug: project.slug} })" />
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import SingleProjectCard from '../components/SingleProjectCard.vue';

export default {
    name: 'Projects',
    components: {
        SingleProjectCard
    },
    data() {
        return {
            projectsList:[],
            nextPageUrl : '',
            currentPageNo: '',
            prevPageUrl : '',
            apiUrl : 'http://127.0.0.1:8000/api/projects'
        }
    },

    methods: {
        getProjects(apiUrl = this.apiUrl){
            // recuper i miei post e popolo la variabile posts
            axios.get(apiUrl)
            .then((response) => {
                console.log(response)
                this.projectsList = response.data.results.data;
                this.nextPageUrl = response.data.results.next_page_url;
                this.prevPageUrl = response.data.results.prev_page_url;
            })
            .catch(function (error) {
                console.log(error);
            })
        },

        nextPage(){
            // alert('next page');
            this.getProjects(this.nextPageUrl);
        },

        prevPage(){
            // alert('prev page');
            this.getProjects(this.prevPageUrl);
        },

    },

    created(){
        this.getProjects();
    }
}

</script>
<style lang="scss" scoped>

    h1.main-title{
        margin-bottom: 3rem;
    }
    div.projects{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        padding-bottom: 60px;
    }

    nav.pagination{
        width: 100%;
        padding: 1rem;
        display: flex;
        // justify-content: space-between;
        align-items: center;
        background-color: black;
        list-style-type: none;

        li{
            padding: 1rem;
            background-color: blue;
            color: white;

            &.next{
                margin-left: auto;
            }
        }
    }
</style>