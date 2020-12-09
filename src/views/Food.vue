<template>
    <v-container class="d-flex flex-column justify-space-between">
        <h1 class="text-h4 text-center mt-5">Alimentos</h1>
        <span class="text-caption text-center font-italic mb-5">Que foram consumidos na refeição informada!</span>
        <div  class="ma-2" v-for="alimento of alimentos" :key="alimento.id"> 
             <span><v-icon left>mdi-plus</v-icon> {{ alimento.description}}</span>
        </div>
    </v-container>
    
</template>

<script>
export default {
    name: 'Food',
    data () {
        return {
            alimentos: [],
        }
    },
    created () {
        fetch('https://taco-food-api.herokuapp.com/api/v1/food').then((resultado) => resultado.json()).then(json => {
            this.alimentos = json;
        })
    },
    
}
</script>

<style scoped>

</style>