<template>
    <div class="dropdown-wrapper" ref="dropDown">
        <div class="dropdown-selected-option" @click="isDropDownVisible = true">
            {{ mappedSelectedOption }}
        </div>
        <div class="options-wrapper" v-if="isDropDownVisible">
            <div class="option" v-for="(option, index) in options" :key="index" @click="toggleOptionSelect(option)">
                {{ option.name || option }}
            </div>
        </div>
    </div>
</template>

<script>
import { computed, defineComponent, ref, onMounted, onBeforeUnmount } from "vue";
export default defineComponent({
    props: {
        options: {
            type: Array,
            required: true,
        },
        modelValue: {
            default: null,
        }
    },
    setup(props, { emit }) {
        const selectedOption = ref(null);
        const isDropDownVisible = ref(false);
        const dropDown = ref(null);
        const mappedSelectedOption = computed(() => (selectedOption.value?.name || selectedOption.value) || "please select something.");

        const toggleOptionSelect = (option) => {
            selectedOption.value = option;
            emit('update:modelValue', option);
            isDropDownVisible.value = false;
        };
        const closeDropDown = (element) => {
            if (!dropDown.value.contains(element.target)) {
                isDropDownVisible.value = false;
            }
        }
        onMounted(() => {
            window.addEventListener('click', closeDropDown);
        });
        onBeforeUnmount(() => {
            window.removeEventListener('click', closeDropDown);
        })

        return {
            selectedOption,
            toggleOptionSelect,
            mappedSelectedOption,
            isDropDownVisible,
            dropDown,
        }
    },

});
</script>
