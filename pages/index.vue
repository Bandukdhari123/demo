<template>
    <div>
    <section>
        <v-container>
            <v-toolbar :elevation="8" title="The Naruto Ramen" class="bg-red" >
                <v-btn href="/" >Home</v-btn>
                <v-btn href="/about">About</v-btn>
                <v-btn href="/products">Products</v-btn>
            </v-toolbar>
        </v-container>
    </section>
    <section >
        <v-container>
            <v-row class="gap-5">
                <v-col>
                    <v-img height="400" src="https://cdn.pixabay.com/photo/2023/07/19/23/11/ai-generated-8138069_1280.png" ></v-img>
                </v-col>
                <v-col class="py-15">
                    <h1 class="text-h3">The Naruto Ramen</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ex quis error sed eos enim quas aliquam hic, modi libero iusto voluptas accusantium voluptate quos voluptatum iste in repellat. Consequatur, fugit harum itaque magni quae sunt cupiditate sit minima voluptate temporibus accusantium. Quibusdam eveniet impedit expedita illum corrupti quidem nesciunt repudiandae corporis, debitis atque. Quae tempore a reiciendis dolor cupiditate ipsam veritatis, molestias consectetur placeat provident eaque aut dolorem cum aliquam cumque aperiam perspiciatis. Maiores, esse laudantium! Odio ipsum ab in deserunt consequuntur voluptatem hic similique rerum temporibus suscipit numquam quisquam, quaerat porro nobis, saepe sunt officia aut consequatur magni!</p>
                </v-col>
            </v-row>
        </v-container>
    </section>
    <section>
        <v-container>
            <v-select
  label="Select"
  :items="categoryStore.categories.map((category)=>category.strCategory)"
  variant="outlined"
></v-select>
<v-row class="gap-20">
    <v-col cols="3" v-for="ill in categoryStore.meals" :key="ill">
       <v-card height="430" width="350">
        <v-img height="350" width="350" :src="ill.strMealThumb" ></v-img>
       <v-card-title>
        <h3>{{ ill.strCategory }}</h3>
        <p class="text-right">more.....</p>
       </v-card-title>
       </v-card> 

    </v-col>
   
</v-row>
        </v-container>
    </section>
    </div>
</template>

<script setup>
import {useCategoryStore} from "~/store/category"
const categoryStore=useCategoryStore();
await categoryStore.fetchCategories();
await categoryStore.fetchMeals();

</script>

<style lang="scss" scoped>

</style>