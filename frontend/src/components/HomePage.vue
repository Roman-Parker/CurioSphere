<template>
  <div class="min-h-screen flex flex-col">
    <!-- Main Content -->
    <main class="container mx-auto flex-grow p-6">
      <h1 class="text-3xl font-semibold mb-6">Home Page</h1>

      <AddFactForm></AddFactForm>

      <!-- Facts List -->
      <div class="space-y-4">
        <div v-if="facts.length === 0" class="text-gray-500">
          Loading facts...
        </div>
        <ul v-else>
          <li
            v-for="fact in facts"
            :key="fact.id"
            class="border border-gray-300 rounded-md p-4 shadow-sm"
          >
            <p class="text-lg font-medium">{{ fact.factText }}</p>
            <p class="text-sm text-gray-500">Category: {{ fact.category }}</p>
            <p class="text-sm text-gray-500">Location: {{ fact.latitude }}, {{ fact.longitude }}</p>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import AddFactForm from './AddFactForm.vue'

export default {
  name: 'HomePage',
  setup() {
    // Reactive state for storing facts
    const facts = ref([]);

    // Function to fetch facts from the backend
    const fetchFacts = async () => {
      try {
        const response = await axios.get('/facts');
        console.log(response.data);
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
  components: {
    AddFactForm, // Register the component for use in the template
  },
};
</script>

<style scoped>
/* Tailwind CSS styles are handled through utility classes */
</style>
