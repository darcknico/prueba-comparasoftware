<template lang="">
    <div>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="title">Titulo</label>
                <input type="text" class="form-control" id="title" v-model="formData.title" required autocomplete="off">
            </div>
            <div class="form-group">
                <label for="body">Text</label>
                <textarea class="form-control" id="body" v-model="formData.body" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary mb-2">
                {{ props.id>0 ? "Editar nota" : "Nueva nota" }}
            </button>
        </form>
    </div>
</template>
<script setup>
import { reactive, defineProps, onMounted } from "vue";
import { useRouter } from "vue-router";

import router from "../router";

const formData = reactive({});

const props = defineProps( {
      id: {
        type: Number,
        required: true,
      }
})
onMounted( () => {
    if(props.id>0){
        axios.get(`/api/notes/${props.id}`).then((response)=>{
            const note = response.data.data;
            formData.title = note.title;
            formData.body = note.body;
        });
    }
} )


const handleSubmit = async () =>  {
    try {
        let response;
        if(props.id>0){
            response = await axios.put(`/api/notes/${props.id}`, formData);
        } else {
            response = await axios.post('/api/notes', formData);
        }
        router.push('/');
    } catch (error) {
        console.error("Error submitting form:", error);
    }
}

</script>
