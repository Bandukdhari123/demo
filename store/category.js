import {defineStore} from "pinia";
import{axiosApi} from "~/config/axios";

export const useCategoryStore= defineStore('category',{
    state:()=>({
        categories:[],
        loading:false,
        meals:null,
    }),

    actions:{
       async fetchCategories(){
            try{
                this.loading=true;
                const response=await axiosApi.get("categories.php");
                if(response.status==200){
                    this.categories=response.data.categories;
                }
            }catch(e){
                console.warn(e);
            }finally{
                this.loading=false;
            }
        },
        async fetchMeals(){
            try{
                this.loading=true;
                const response=await axiosApi.get("filter.php?c=Beef");
                if(response.status==200){
                    this.meals=response.data.meals;
                }
            }catch(e){
                console.warn(e);
            }finally{
                this.loading=false;
            }
        }
    }
});