import { defineStore } from 'pinia';
import { axios } from axios

export const curioSphereStore = defineStore('fact', {
    state: () => ({
      facts: [],
      loading: false,
      error: null,
    }),
    actions: {
      async fetchFacts() {
        this.loading = true;
        this.error = null;
  
        try {
          const response = await axios.get('/facts');
          this.facts = response.data;
        } catch (error) {
          this.error = 'Failed to load facts';
          console.error(error);
        } finally {
          this.loading = false;
        }
      },
    },
  });