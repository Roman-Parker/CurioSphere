<template>
    <div>
      <h1>Home Page</h1>
    </div>
  </template>
  
<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'HomePage',
  setup() {
    // Reactive state for storing facts
    const facts = ref([]);

    // Function to fetch facts from the backend
    const fetchFacts = async () => {
      try {
        const response = await axios.get('/facts');
        console.log(response.data)
        facts.value = response.data;
      } catch (error) {
        console.error('Error fetching facts:', error);
      }
    };

    // Fetch facts when the component is mounted
    onMounted(() => {
      fetchFacts();
    });

    // Return reactive state and methods to the template
    return {
      facts,
    };
  },
};
</script>
  
  <style scoped>
  /* Component styles here */
  </style>