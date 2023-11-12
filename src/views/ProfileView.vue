<template>
  <div>
    <div class="pt-8"></div>

    <UserData />
    <Logout />
    <ChangePassword />
    <DeleteAccount />

    <div class="p-8"></div>

  </div>
</template>

<script setup>
import UserData from '../components/profile/UserData.vue';
import ChangePassword from '../components/profile/ChangePassword.vue';
import DeleteAccount from '../components/profile/DeleteAccount.vue';
import Logout from '../components/profile/Logout.vue';
</script>
