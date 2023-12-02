<template lang="">
    <div class="col-6 col-md-4 mb-2">
        <div class="card">
            <div class="card-body">
                <h2 class="card-title">{{ note.title }}</h2>
                <p class="card-text text-body">{{ note.body }}</p>
                <button type="button" class="btn btn-primary" @click="edit" :disabled="isLoading" >
                    <font-awesome-icon icon="fa-solid fa-edit" />
                </button>
                <button type="button" class="btn btn-danger" @click="destroy" :disabled="isLoading" >
                    <font-awesome-icon icon="fa-solid fa-trash" />
            </button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
import router from '../router';

const isLoading = ref(false)

const props = defineProps(['note'])
const note = props.note

const edit = () => {
    router.push(`edit-note/${note.id}`)
}

const destroy = async () =>  {
    try {
        isLoading.value = true;
        const response = await axios.delete(`/api/notes/${note.id}`);
        router.go();
    } catch (error) {
        console.error("Error submitting form:", error);
    }
    isLoading.value = false;
}
</script>
<style>
.text-body {
    white-space: pre-line;
    height: 75px;
    overflow: hidden;
}
</style>
