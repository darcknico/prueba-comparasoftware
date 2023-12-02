<template lang="">
    <div class="mt-5">
        <h2>{{ isEdit ? "Editar nota" : "Nueva nota" }}</h2>
        <form class="row g-3" @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="title">Titulo</label>
                <input type="text" class="form-control" id="title" v-model="formData.title" required maxlength="190" autocomplete="off">
            </div>
            <div class="form-group">
                <label for="body">Text</label>
                <textarea class="form-control" id="body" v-model="formData.body" maxlength="5000" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary mb-2" :disabled="isLoading">
                {{ isEdit ? "Editar" : "Nuevo" }}
            </button>
        </form>
    </div>
</template>
<script setup>
import { ref, reactive, defineProps, onMounted, watch } from "vue";
import { useRoute, useRouter } from 'vue-router'

const formData = reactive({});
const isLoading = ref(false)
const isEdit = ref(false)

const route = useRoute()
const router = useRouter()

const props = defineProps( {
      id: {
        type: Number,
        required: true,
      }
})

const fetchData = (id) => {
    isEdit.value = id > 0;
    if(id>0){
        axios.get(`/api/notes/${id}`).then((response)=>{
            const note = response.data.data;
            formData.title = note.title;
            formData.body = note.body;
        });
    } else {
        formData.title = "";
        formData.body = "";
    }
}

watch(
    () => route.params.id,
    (newId, oldId) => {
        fetchData(+route.params.id)
    }
)

onMounted( () => {
    fetchData(+route.params.id)
} )

const handleSubmit = async () =>  {
    try {
        let response;
        isLoading.value = true;
        if(route.params.id>0){
            response = await axios.put(`/api/notes/${route.params.id}`, formData);
        } else {
            response = await axios.post('/api/notes', formData);
        }
        router.push('/');
    } catch (error) {
        console.error("Error submitting form:", error);
    }
    isLoading.value = false;
}

</script>
