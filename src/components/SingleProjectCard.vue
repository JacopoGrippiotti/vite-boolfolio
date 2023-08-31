<template>

    <div class="card">
        <div class="img-wrapper">
            <img v-if=" image.startsWith('http') " :src="image" alt="">
            <img v-else :src=" 'http://127.0.0.1:8000/storage/'+ image" alt="">
        </div>
        
        <div class="card-title">
            {{ title }}
        </div>
        <div class="card-content">
            {{ content.substring(0,200) }}
        </div>
        <div class="card-type">
            {{ type }}
        </div>
    </div>

</template>

<script>
export default {
    name:'SingleProjectCard',
    data() {
        return {
            
        }
    },
    props:{
        image: String,
        title: String,
        type:String,
        content:String
    }
}
</script>
<style lang="scss" scoped>
    @use '../styles/partials/mixins' as*;
    @use '../styles/partials/variables' as*;

    
    div.card{
        width: calc((100% / 4) - 30px);
        background-color: green;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-content: space-between;
        height: 500px;
        text-align: justify;
        border-radius: 10px;
        padding: 10px 10px;
        

        div.card-title{
            color: white;
            padding: 10px 0px;
            font-size: 1.2rem;
            font-weight: 600;
            text-align: center;
        }

        div.card-type{
            margin: 10px 0px;
        }
        div.img-wrapper{
            width: 100%;
            border-radius: 10px;
            

            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: top;
                border-radius: 10px;
            }
        }
    }
</style>