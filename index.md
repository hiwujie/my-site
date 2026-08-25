---
title: hiwujie.top
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

# hiwujie.top

正在跳转到适合你的语言版本...