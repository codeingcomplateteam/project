<template>
    <div class="container">
        <div class="jumbotron mt-5">
            <div class="col-sm-8 mx-auto">
                <h1 class="text-center">Profile</h1>
            </div>
        </div>
        <table class="table col-md-6 mx-auto">
            <tbody>
                <tr>
                    <td>First name</td>
                    <td>{{fname}}</td>
                </tr>
                <tr>
                    <td>last name</td>
                    <td>{{lname}}</td>
                </tr>
                <tr>
                    <td>email</td>
                    <td>{{lname}}</td>
                </tr>
            </tbody>
        </table>
        <button @click="c">5555555</button>
    </div>
</template>

<script>

    import jwtDecode from 'jwt-decode'
import { decode } from 'punycode';

    export default {
        data () {
            const token = localStorage.usertoken
            const decode = jwtDecode(token)
            return {
            fname: decode.fname,
            lname: decode.lname,
            email: decode.email,
            token: token
            }
        },
        methods:{
            c() {
                console.log(this.token)
            }
        }
    }

</script>
