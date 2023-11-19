<template>
    <div>
        <div class="form-group">
            <div class="col-sm-10">
                <label for="status">Select Class *</label>
                <select class="form-control" required v-model="selectedClass">
                    <option value="">Select a Class</option>
                    <option v-for="item in classes" :key="item.id" :value="item.id">{{ item.name }}</option>
                </select>
            </div>
        </div>

        <div class="form-group">
            <div class="col-sm-10">
                <label for="status">Select Section *</label>
                <select name="section_id" id="sections" class="form-control" required>
                    <option value="">Select a Section</option>
                    <option v-for="section in sections" :key="section.id" :value="section.id">{{ section.name }}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { defineComponent, ref, onMounted, watch } from "vue";

export default defineComponent({
    setup() {
        const classes = ref({});
        const sections = ref({});
        const selectedClass = ref('');

        const fetchData = () => {
            axios.get('/api/classes').then(response => (classes.value = response.data));
        };

        const fetchSections = async (classId) => {
            axios.get(`/api/sections?class_id=${classId}`).then(response => (sections.value = response.data));
        };

        onMounted(() => {
            fetchData();
        });

        watch(selectedClass, async (newValue) => {
            if (newValue) {
                await fetchSections(newValue);
            };
        });
        return {
            classes,
            sections,
            selectedClass,

        }
    },
})
</script>
