<script lang="ts">
	import './layout.css';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	const { children } = $props();
	
</script>
<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">
<div class="min-h-screen justify-center flex flex-col bg-gray-800 text-white">
	{@render children()}
</div>
