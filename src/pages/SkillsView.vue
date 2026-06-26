<script setup>
import { ref, computed } from "vue";
import SkillCard from "../components/SkillCard.vue";
import { skills } from "../data/skills.js";

const search = ref("");
const selectedSkill = ref("");

const filteredSkills = computed(() => {
  return skills.filter((skill) => {
    const matchesSearch = skill.name
      .toLowerCase()
      .includes(search.value.toLowerCase());

    const matchesCategory =
      selectedSkill.value === "" ||
      skill.category === selectedSkill.value;

    return matchesSearch && matchesCategory;
  });
});
</script>

<template>
  <div class="skills-page">
    <header class="hero">
      <h1>Skills</h1>
    </header>

    <section class="controls">
      <input
        v-model="search"
        type="text"
        placeholder="Search skill..."
      />

      <select v-model="selectedSkill">
        <option value="">All Categories</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Database">Database</option>
        <option value="DevOps">DevOps</option>
      </select>
    </section>

    <section class="skills-grid">
      <template v-if="filteredSkills.length > 0">
        <SkillCard
          v-for="skill in filteredSkills"
          :key="skill.id"
          :skill="skill"
        />
      </template>

      <p v-else class="no-results">
        No skills found.
      </p>
    </section>
  </div>
</template>