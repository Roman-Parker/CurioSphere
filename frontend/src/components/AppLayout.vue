<!-- src/components/AppLayout.vue -->
<template>
    <div class="min-h-screen flex flex-col">
      <!-- Navbar (common for all pages) -->
      <nav class="bg-blue-600 p-4 text-white">
        <div class="container mx-auto flex justify-between items-center">
          <h1 class="text-xl font-bold">CurioSphere</h1>
          <ul class="flex space-x-4">
            <li><router-link to="/" class="hover:underline">Home</router-link></li>
            <li><router-link to="/about" class="hover:underline">About</router-link></li>
            <li><router-link to="/contact" class="hover:underline">Contact</router-link></li>
          </ul>
        </div>
      </nav>
  
      <!-- Main Content (page-specific content goes here) -->
      <main class="container mx-auto flex-grow p-6">
        <router-view />
      </main>
  
      <!-- Footer -->
      <footer class="bg-gray-800 text-white p-4">
        <div class="container mx-auto text-center">
          <p>&copy; 2024 CurioSphere. All rights reserved.</p>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppLayout',
  };
  </script>
  
  <style scoped>
  /* Tailwind CSS utility classes handle the styles */
  </style>
  