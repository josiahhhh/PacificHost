<template>
    <AuthLoader />

    <div id="loginModal" class="modal">
        <div class="modal-content loginModal">
            <div class="modal-header">
                <span @click="$emit('close-modal')" class="close">&times;</span>
                <h5>Login</h5>
            </div>
            <div v-if="error" class="error-pop">
                {{ error }}
            </div>

            <div v-if="success" class="success-pop">
                {{ success }}
            </div>
            <div class="modal-body">
                <form @submit.prevent="login">
                    <div class="modalForm">
                        <label for="uname">Username</label>
                        <input v-model="username" type="text" placeholder="Enter Username" name="uname" required />

                        <label for="psw">Password</label>
                        <input v-model="password" type="password" placeholder="Enter Password" name="psw"
                            style="margin-bottom: 10px" required />

                        <button class="btn btn-primary" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AuthLoader from "@/components/AuthLoader.vue";

export default defineComponent({
    name: "RegisterModal",
    data() {
        return {
            username: "",
            password: "",
            error: '',
            success: '',
        };
    },
    beforeCreate() {
        if (this.$store.state.user) {
            window.location.href = "/";
        }
    },
    methods: {
        async login() {
            this.error = '';
            this.success = '';

            this.$store.dispatch("login", {
                credentials: {
                    username: this.username,
                    password: this.password,
                },
                callback: (error: any) => {
                    if (error) {
                        this.error = error;
                    } else {
                        this.success = "Login successful";
                        window.location.href = "/";
                    }
                },
            });
        },
    },
    components: { AuthLoader },
});
</script>
