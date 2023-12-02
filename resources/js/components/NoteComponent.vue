<template lang="">
    <div class="col-4">
        <h2>{{ note.title }}</h2>
        <p>{{ note.body }}</p>
        <button class="btn btn-primary" @click="edit" >Editar</button>
        <button class="btn btn-danger" @click="destroy" >Eliminar</button>
    </div>
</template>
<script setup>
import router from '../router';

const props = defineProps(['note'])
const note = props.note

const edit = () => {
    router.push(`edit-note/${note.id}`)
}

const destroy = async () =>  {
    try {
        const response = await axios.delete(`/api/notes/${note.id}`);
        router.go();
    } catch (error) {
        console.error("Error submitting form:", error);
    }
}
</script>
