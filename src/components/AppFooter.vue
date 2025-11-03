<template>
  <footer class="border-t border-white/10 pt-8 mt-12">
    <div class="text-center">
      <div class="flex items-center justify-center gap-2 mb-4">
        <div class="w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>
        <span class="text-xl font-bold text-white">Codex Astrorum</span>
      </div>
      
      <div class="flex flex-wrap justify-center gap-6 mb-6 text-sm text-purple-300">
        <a href="#" class="hover:text-white transition-colors">About</a>
        <a href="#" class="hover:text-white transition-colors">Support us!</a>
      </div>
      
      <div class="text-sm text-purple-400">
        <p>2025 Codex Astrorum.</p>
        <div class="flex justify-center gap-4 mt-2">
          <span>Made with 💜 in Lisbon</span>
          <span>
            By:
            <a href="https://github.com/lucas-fbastos" class="hover:text-purple-300 transition-colors">Lucas</a>       
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
};
</script>