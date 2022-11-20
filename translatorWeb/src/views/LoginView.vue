<template>
    <div class="login-main">
        <h2>Login</h2>
        <input type="email" placeholder="Email address..." v-model="this.email" />
        <input type="password" placeholder="password..." v-model="this.password" />
        <p v-if="errMsg">{{ errMsg }}</p>
        <button type="button" @click="this.login()">Login</button>
    </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default {
    data() {
        return {
            email: "",
            password: "",
            errMsg: ""
        }
    },

    methods: {
        login() {
            const auth = getAuth();
            const router = this.$router;
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then(function() {
                    alert('Successfully logged in');
                    router.push('/');
                })
                .catch(error => {
                    switch (error.code) {
                        case 'auth/invalid-email':
                            this.errMsg = 'Invalid email';
                            break
                        case 'auth/user-not-found':
                            this.errMsg = 'No account with that email was found';
                            break
                        case 'auth/wrong-password':
                            this.errMsg = 'Incorrect password';
                            break
                        default:
                            this.errMsg = 'Email or password was incorrect';
                            console.log(error);
                            break
                    }
                });
        },
    },
}
</script>