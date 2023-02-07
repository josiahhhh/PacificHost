<template>
    <div class="faqQuestion" @click="toggle">
        {{ title }}
        <fontawesome icon="fa-solid fa-chevron-left" />
    </div>
    <div class="faqAnswer" v-show="isOpen">
        {{ content }}
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Accordion",
    data() {
        return {
            isOpen: false,
        };
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen;
        },
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
});
</script>