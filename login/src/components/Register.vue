<template>
    <div class="container">
        <div class="jumbotron mt-5">
            <div class="col-sm-8 mx-auto">
                <h1 class="text-center">Register</h1>
                <form v-on:submit.prevent="register">
                     <div class="form-group">
                    <label for="fname">First name</label>
                    <input type="text" v-model="fname" class="form-control" name="fname" placeholder="Please input name">
                    </div>
                        <div class="form-group">
                    <label for="lname">Last name</label>
                    <input type="text" v-model="lname" class="form-control" name="lname" placeholder="Please input last name">
                    </div>
                    <div class="form-group">
                    <label for="email"> email</label>
                    <input type="email" v-model="email" class="form-control" name="email" placeholder="Please input email">
                    </div>
                      <div class="form-group">
                    <label for="pws">Password</label>
                    <input type="Password" v-model="password" class="form-control" name="Password" placeholder="Please input Password">
                    </div>
                      <button class="btn btn-lg btn-primary btn-block" type="submit">Singin</button>
                      <button class="btn btn-lg btn-danger btn-block" type="reset">cancel</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import jwtDecode from 'jwt-decode'
    import axios from 'axios'
    import router from '../router'
    export default {
        data () {
            return {
                email: '',
                password: '',
                lname: '',
                fname: ''
            }
        },

        methods: {
            register () {
                axios.post('/users/register', {
                    lname: this.lname,
                    fname: this.fname,
                    email: this.email,
                    password: this.password
                }).then(res => {
                    // localStorage.setItem('usertoken', res.data)
                    // const token = localStorage.usertoken
                    // const decode = jwtDecode(token)
                    console.log(res.data)
                    this.lname = ''
                    this.fname = ''
                    this.email = ''
                    this.password = ''
                     
                    // router.push({name: 'Login'})
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }

</script>
