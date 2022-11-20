<template>
    <div class="register-main">
        <h2>Register</h2>
        <input type="email" placeholder="Email address..." v-model="this.email" />
        <input type="password" placeholder="password..." v-model="this.password" />
        <button type="button" @click="this.register()">Register</button>
    </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },

    methods: {
        register() {
            const auth = getAuth();
            const router = this.$router;
            createUserWithEmailAndPassword(auth, this.email, this.password)
                .then(function() {
                    alert("Successfully registered! Please login.");
                    router.push("/login");
                }).catch((error) => {
                    alert(error.message);
                });
        },
    },
};

</script>
