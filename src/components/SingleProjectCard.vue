<template>
    <div class="card">
        <div class="img-wrapper">
            <img :src="image" alt="">
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
        text-align: center;
        border-radius: 10px;
        padding: 0px 10px;

        div.card-title{
            color: white;
            padding: 10px 0px;
            font-size: 1rem;
            font-weight: 600;
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