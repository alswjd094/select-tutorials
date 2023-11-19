<template>
    <div>
        <drop-down
            :options="options"
            v-model="parentSelectedOption"
        />
        <br>
        <h1>Selected option: {{ parentSelectedOption }}</h1>
    
    
    </div>
</template>

<script>
import {ref} from "vue";
import DropDown from "../components/DropDown.vue";
export default{
  components: { 
    DropDown 
  },

    setup(){
        const options = ref([
          {
            name: "one",
            value: 1,
          },
          {
            name: "two",
            value: 2,
          },
          {
            name: "three",
            value: 3,
          },
        ]);

        const parentSelectedOption = ref(null);
    
    
    
    return {
      options,
      parentSelectedOption,
    };
    },
};
</script>