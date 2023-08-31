<template>
    <footer>
        <nav>
            <ul>
                <li v-for="link in links">
                    <router-link :to="{ name: link.route }">
                        {{ link.name }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </footer>
</template>
<script>
export default {
    name: 'AppFooter',
    data() {
        return {
            links : [
                {
                    route: 'homepage',
                    name: 'Homepage'
                },
                {
                    route: 'about',
                    name: 'About Us'
                },
                {
                    route: 'projects.index',
                    name: 'Projects'
                },
            ]
        }
    },
}
</script>
<style lang="scss" scoped>
footer{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    

    nav{
        width: 100%;
        padding: .5rem 4rem;
        background-color: rgb(0, 0, 0);
        color: rgb(255, 255, 255);

        ul{
            width: 100%;
            display: flex;
            justify-content: center;
            font-size: 1rem;
            list-style-type: none;

            li{
                margin-right: 3rem;
                a {
                    text-decoration: none;
                    color: rgb(255, 255, 255);
                }
            }
        }
    }
}

</style>