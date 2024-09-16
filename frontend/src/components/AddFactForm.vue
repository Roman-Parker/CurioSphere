<template>
    <div class="max-w-lg mx-auto bg-white p-6 shadow-md rounded-md">
      <h2 class="text-2xl font-bold mb-4">Add a New Fact</h2>
      <form @submit.prevent="submitForm" class="space-y-4">
        <!-- Fact Text -->
        <div>
          <label for="factText" class="block text-sm font-medium text-gray-700">Fact Text</label>
          <input
            type="text"
            id="factText"
            v-model="factText"
            required
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <!-- Author -->
        <div>
          <label for="author" class="block text-sm font-medium text-gray-700">Author</label>
          <input
            type="text"
            id="author"
            v-model="author"
            step="any"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
  
        <!-- Category -->
        <div>
          <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
          <input
            type="text"
            id="category"
            v-model="category"
            required
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
  
        <!-- Longitude -->
        <div>
          <label for="longitude" class="block text-sm font-medium text-gray-700">Longitude</label>
          <input
            type="number"
            id="longitude"
            v-model="longitude"
            step="any"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
  
        <!-- Latitude -->
        <div>
          <label for="latitude" class="block text-sm font-medium text-gray-700">Latitude</label>
          <input
            type="number"
            id="latitude"
            v-model="latitude"
            step="any"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <!-- Author -->
        <div>
          <label for="source" class="block text-sm font-medium text-gray-700">Source</label>
          <input
            type="text"
            id="spource"
            v-model="source"
            step="any"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
  
        <!-- Submit Button -->
        <div>
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Add Fact
          </button>
        </div>
      </form>
  
      <div v-if="successMessage" class="mt-4 text-green-600">
        {{ successMessage }}
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import axios from 'axios';
  
  export default {
    name: 'AddFactForm',
    setup() {
      // Form data
      const factText = ref('');
      const author = ref('')
      const category = ref('');
      const longitude = ref(null);
      const latitude = ref(null);
      const source = ref('');
  
      const successMessage = ref('');
  
      const submitForm = async () => {
        try {
          const newFact = {
            factText: factText.value,
            author: author.value,
            category: category.value,
            longitude: longitude.value,
            latitude: latitude.value,
            source: source.value
          };
  
          await axios.post('/facts', newFact);
  
          successMessage.value = 'Fact successfully added!';
  
          factText.value = '';
          category.value = '';
          longitude.value = null;
          latitude.value = null;
        } catch (error) {
          console.error('Error adding fact:', error);
          successMessage.value = 'Failed to add fact.';
        }
      };
  
      // Return form data and functions to the template
      return {
        factText,
        author,
        category,
        longitude,
        latitude,
        successMessage,
        submitForm,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any specific styles here, but Tailwind handles most of the styling */
  </style>
  