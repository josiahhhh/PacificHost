<template>
    <AuthLoader />

    <div id="registerModal" class="modal">
        <div class="modal-content loginModal">
            <div class="modal-header">
                <span @click="$emit('close-modal')" class="close">&times;</span>
                <h5>Sign Up</h5>
            </div>
            <div v-if="error" class="error-pop">
                {{ error }}
            </div>

            <div v-if="success" class="success-pop">
                {{ success }}
            </div>
            <div class="modal-body">
                <form @submit.prevent="register">
                    <div class="modalForm">
                        <label for="email">Email</label>
                        <input v-model="email" type="text" placeholder="Enter Email" name="email" required />

                        <label for="phone">Phone</label>
                        <input v-model="phone" type="text" placeholder="Enter Phone Number" name="phone" required />

                        <label for="uname">Username</label>
                        <input type="text" placeholder="Enter Username" name="uname" required />

                        <label for="psw">Password</label>
                        <input v-model="password" type="password" placeholder="Enter Password" name="psw"
                            style="margin-bottom: 10px" required />
                        <input v-model="confirm" type="password" placeholder="Confirm Password" name="confpsw"
                            required />

                        <button class="btn btn-primary" type="submit">Register</button>
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
            name: "",
            email: "",
            phone: "",
            password: "",
            confirm: "",
            error: "",
            success: "",
        };
    },
    methods: {
        register() {
            this.error = "";
            this.success = "";
            if (this.password !== this.confirm) {
                this.error = "Passwords do not match";
            } else {
                this.$store.dispatch("register", {
                    credentials: {
                        name: this.name,
                        email: this.email,
                        phone: this.phone,
                        password: this.password,
                        confirm: this.confirm,
                    },
                    callback: (error: any) => {
                        if (error) {
                            this.error = error;
                        } else {
                            this.success = "Register successful";
                            window.location.href = "/";
                        }
                    },
                });
            }
        },
    },
    components: { AuthLoader },
});
</script>
