---
title: 睿思奇想
---

<script setup>
import { useRouter } from 'vitepress'
const router = useRouter()
if (typeof window !== 'undefined') {
  const preferredLang = navigator.language.startsWith('zh') ? '/zh/' :
    navigator.language.startsWith('ja') ? '/ja/' : '/en/'
  router.go(preferredLang)
}
</script>

# 睿思奇想

正在跳转到适合你的语言版本...