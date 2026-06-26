<script setup>
defineProps(
    {
        skill: Object
    }
);

</script>

<template>
    <div class="tech-card">
        <h3>{{ skill.name }}</h3>
        <p>{{ skill.category }}</p>
        <span>{{ skill.level }}</span>
    </div>
</template>
