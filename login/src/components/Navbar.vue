<template>
    <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <button class="navbar-toggle"
        type="button"
        data-toggle="collapse"
        data-target="#navbar1"
        aria-controls="navbar1"
        aria-expanded="Flase"
        aria-label="Toggle navigation">
        <span class="navbar-toggle-ion"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-md-center" id="navbar1">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                 <li class="nav-item" v-if="auth==''">
                    <router-link class="nav-link" to="/login">Login</router-link>
                </li>
                 <li class="nav-item" v-if="auth==''">
                    <router-link class="nav-link" to="/register">Register</router-link>
                </li>
                 <li class="nav-item" v-if="auth=='loggedin'">
                    <router-link class="nav-link" to="/profile">Profile</router-link>
                </li>
                 <li class="nav-item" v-if="auth=='loggedin'">
                    <a class="nav-link" @click="logout">Logout</a>
                </li>
            </ul>
        </div>
    </nav> -->
<div class="navbar-header">
  <div class="container">
    <div class="row">
      <div class="info-top col-md-6"> <i class="fa fa-phone"></i> 24/7 SUPPORT &nbsp; &nbsp; <a href="#">0800 123 4567</a> </div>
      <div class="info-top col-md-6 text-right">
        <ul>
          <li><a href="#"><i class="fa fa-user"></i> Accont</a></li>
          <li><a href="#"><i class="fa fa-heart"></i> Wishlist</a></li>
          <li><a href="#"><i class="fa fa-arrow-circle-right"></i> Checkout</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import EventBus from './EventBus'
import router from '../router';

EventBus.$on('logged-in', test =>{
    console.log(test)
})
export default {
    data(){
        return {
            auth:"",
            user:""
        }
    },
    methods:{
        logout(){
            localStorage.removeItem('usertoken')
            router.push(name,'Login')
            console.log('rrrr')
        }
    },
    mounted(){
        EventBus.$on('logged-in', status =>{
            this.auth = status
        })
    }
}
</script>

