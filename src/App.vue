<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
	<header>
		<div class="border border-solid shadow-md backdrop-blur-2xl rounded-b-xl mx-4 bg-white/40 flex justify-center items-center">
			<nav class="m-4">
				<RouterLink to="/" class="mr-4">主页</RouterLink>
				<RouterLink to="/chq">小小蔡</RouterLink>
			</nav>
		</div>
	</header>

	<RouterView class="m-4 min-h-screen" />

	<footer class="bottom-0 w-full py-4 bg-slate-300">
		<div class="flex justify-center items-center flex-col">
			<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">沪ICP备2022026478号-3</a>
		</div>
	</footer>
</template>
