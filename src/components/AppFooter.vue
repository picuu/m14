<template>
  <footer>
    <div class="footer-content credits">
      <span>Made by <a href="https://carloscapo.com" target="_blank" rel="noopener noreferrer">carloscapo</a></span>
      |
      <a href="https://github.com/picuu/m14/tree/pr03-provide-inject" target="_blank" rel="noopener noreferrer">
        GitHub repo
      </a>
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding-block: 1rem;
  margin-top: 4rem;
  background-color: #202124;
  color: #ababab;
  border-top: 1px solid rgba(0 0 0 / 0.1);
}

.footer-content {
  width: min(100% - 4rem, 1200px);
  margin-inline: auto;
}

footer a {
  color: rgb(248, 137, 137);
}

.credits {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  padding-top: 0.5rem;
  font-size: 0.85rem;
}
</style>
