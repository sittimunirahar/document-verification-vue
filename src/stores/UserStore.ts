import { defineStore } from 'pinia'
import { type UserData } from "@/models/userData.model";

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      isLoggedIn: false,
      userData: {} as UserData
    }
  }),
  getters: {
    isLoggedIn(state) {
      return state.user.isLoggedIn
    },
    getUserData(state) {
      return state.user.userData
    },
    isPersonal(state) {
      return state.user.userData?.current_organisation.is_personal
    }
  },
  actions: {
    setLoggedIn (value: boolean) {
      this.user.isLoggedIn = value;
    },
    setUserData (userData: UserData) {
      this.user.userData = userData;
    }
  }
})


