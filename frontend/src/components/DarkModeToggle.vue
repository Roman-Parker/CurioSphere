<template>
    <button @click="toggleDarkMode" class="bg-white dark:bg-gray-700 text-black dark:text-white p-2 rounded">
      {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
    </button>
</template>
  
<script>
import { ref, onMounted } from 'vue';

export default {
    name: 'DarkModeToggle',
    setup() {
        const isDarkMode = ref(false);

        // Check localStorage for dark mode preference on component mount
        onMounted(() => {
            const savedDarkMode = localStorage.getItem('darkMode');
            if (savedDarkMode === 'true') {
                isDarkMode.value = true;
                document.documentElement.classList.add('dark');
            } else {
                isDarkMode.value = false;
                document.documentElement.classList.remove('dark');
            }
        });

        // Toggle the dark mode and save the preference in localStorage
        const toggleDarkMode = () => {
            isDarkMode.value = !isDarkMode.value;
            document.documentElement.classList.toggle('dark', isDarkMode.value);
            localStorage.setItem('darkMode', isDarkMode.value);
        };

        return {
            isDarkMode,
            toggleDarkMode,
        };
    },
};
</script>
