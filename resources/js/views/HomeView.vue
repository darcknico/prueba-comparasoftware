<template>
    <div>
        <div class="row">
            <template v-for="note in laravelData.data" :key="note.id">
                <NoteComponent :note="note" ></NoteComponent>
            </template>
        </div>

        <Bootstrap5Pagination
            :data="laravelData"
            @pagination-change-page="getResults"
        />
    </div>
  </template>

  <script setup>
  import { ref } from 'vue';
  import { Bootstrap5Pagination } from 'laravel-vue-pagination';
  import NoteComponent from '../components/NoteComponent.vue';

  const laravelData = ref({});

  const getResults = async (page = 1) => {
      const response = await fetch(`api/notes?page=${page}`);
      laravelData.value = await response.json();
  }

  getResults();
  </script>
