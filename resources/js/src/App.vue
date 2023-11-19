<template>
    <div>
      <create-student></create-student>
    
    
    </div>
</template>

<script>
import {ref} from "vue";
import CreateStudent from "../components/CreateStudent.vue";
export default{
  components: { 
    CreateStudent 
  },

    setup(){
    
    
    
    return {
    };
    },
};
</script>