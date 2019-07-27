<template>
    <div class="container">
        <div class="jumbotron mt-5">
            <div class="col-sm-8 mx-auto">
                <h1 class="text-center">Login</h1>
                <form v-on:submit.prevent="login">
                    <div class="form-group">
                    <label for="email"> email</label>
                    <input type="email" v-model="email" class="form-control" name="email" placeholder="Please input email">
                    </div>
                      <div class="form-group">
                    <label for="pws">Password</label>
                    <input type="Password" v-model="password" class="form-control" name="Password" placeholder="Please input Password">

                   
                    </div>
                      <button class="btn btn-lg btn-primary btn-block" type="submit">Singin</button>
                       {{password}}
                       {{email}}
                      <button class="btn btn-lg btn-danger btn-block" type="reset">cancel</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import eventBus from './EventBus.vue'
import router from '../router'
export default {
    data(){
        return {
            email: "" ,
            password: ""
        }
    },

    methods:{
        login() {
            console.log("ddddd")
            axios.post('/users/login', {
                email:this.email,
                password:this.password
            }).then( res => {
            console.log(res.data+"ddddd")
                localStorage.setItem('usertoken',res.data)
                this.email = ''
                this.password = ''
               // console.log(res.data+"rrreews445")

                this.emitmethods()
                router.push({name: 'Profile'})
            }).catch(err => {
                console.log(err)
            })

        },
        emitmethods() {
            eventBus.$emit('logged-in', 'loggedin')
        }
    }
}
</script>
