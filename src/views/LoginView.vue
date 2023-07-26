<script setup lang="ts">
import AuthService from "@/services/AuthService";
import { useUserStore } from "@/stores/UserStore";
import { reactive } from "vue";

const user = reactive({
  email: "",
  password: "",
});
const store = useUserStore();

const login = async () => {
  try {
    const response = await AuthService.login(user);

    store.setLoggedIn(true);
    store.setUserData(response.user);
    console.log("Login successful");
    
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <h2>Accredify Dashboard</h2>
  <div class="loginForm">
    <h3>Login to Your Account</h3>
    <input v-model="user.email" placeholder="Email" type="text">
    
    <input v-model="user.password" placeholder="Password" type="password">
    <button class="loginButton" @click="login">
      Login
    </button>
  </div>
  <div class="info">
    <div>
      <h3>Personal user </h3>
      <p>email: anisa@example.com</p>
      <p>password: 123</p>
    </div>
    <div>
      <h3>Managed user</h3>
      <p>email: john.smith@example.com</p>
      <p>password: 456</p>
    </div>
  </div>
</template>

<style>
.loginForm {
  margin: auto;
  width: 100%;
  padding: 0px;
}

input[type="text"], input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.loginButton {
  width: 100%;
  background-color: #493df5;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.info{
  font-size: 12px;
  padding: 20px;
  margin-bottom: 15px;
}
</style>
