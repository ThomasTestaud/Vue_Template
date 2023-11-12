import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {

  const authToken = ref(null)

  const storedToken = computed(() => authToken.value ? authToken.value : sessionStorage.getItem('authToken'));

  return { count, storedToken }
})
