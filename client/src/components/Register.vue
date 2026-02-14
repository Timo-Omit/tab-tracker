<template>
    <div>
        <h1>Register</h1>

        <input 
        type="email"
        name="email"
        v-model="email"
        placeholder="email">
        <br>
        <input 
        type="password"
        name="password"
        v-model="password"
        placeholder="password">
        <br>
        <button @click="register">Register</button>
    </div>
</template>

<script>
/* import AuthenticationService from '@/services/AuthenticationService'
 */export default {
  name: 'HelloWorld',
    data () {
        return {
         email: 'abc',
         password: '123'
        }
    },
  /*   methods: {
       async register () {
            const response = await AuthenticationService.register({
                email: this.email,
                password: this.password
            })  
            console.log(response.data);
        }
    
    } */


   /*  watch: {
        email (value) {
            console.log('email has changed!', value)
        }
    }, */
  /*   mounted () {
        setTimeout(() => {
            this.email = 'hello world'
        }, 3000)
    } */

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>


<!-- Failed to compile.

./node_modules/axios/lib/helpers/toURLEncodedForm.js
Module parse failed: Unexpected token (17:4)
You may need an appropriate loader to handle this file type.
|       return helpers.defaultVisitor.apply(this, arguments);
|     },
|     ...options
|   });
| }
 @ ./node_modules/axios/lib/defaults/index.js 7:0-62
 @ ./node_modules/axios/lib/axios.js
 @ ./node_modules/axios/index.js
 @ ./src/services/Api.js
 @ ./src/services/AuthenticationService.js
 @ ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Register.vue
 @ ./src/components/Register.vue
 @ ./src/router/index.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://localhost:8080 webpack/hot/dev-server ./src/main.js -->