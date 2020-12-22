<template>
  <div id="login">
    <section>
      <div class="col1">
        <h1>Controle de Classe</h1>
        <p>Bem-vindo(a) ao <a href="" target="_blank">Controle de Classe</a>! Onde você pode organizar todas as notas e atividades dos seus alunos.</p>
      </div>
      <div :class="{ 'signup-form': !showLoginForm }" class="col2">
        <form v-if="showLoginForm" @submit.prevent>
          <h1>Bem-vindo(a) de volta!</h1>
          <div>
            <label for="email1">Email</label>
            <input v-model.trim="loginForm.email" type="text" placeholder="you@email.com" id="email1" />
          </div>
          <div>
            <label for="password1">Senha</label>
            <input v-model.trim="loginForm.password" type="password" placeholder="******" id="password1" />
          </div>
          <button @click="login()" class="button">Entrar</button>
          <div class="extras">
            <a>Esqueci minha senha</a>
            <a @click="toggleForm()">Criar conta</a>
          </div>
        </form>
        <form v-else @submit.prevent>
          <h1>Comece por aqui!</h1>
            <div>
              <label for="name">Nome</label>
              <input v-model.trim="signupForm.name" type="text" placeholder="Nome" id="name" />
            </div>
            <div>
              <label for="title">Escola</label>
              <input v-model.trim="signupForm.school" type="text" placeholder="Escola" id="school" />
            </div>
            <div>
              <label for="email2">Email</label>
              <input v-model.trim="signupForm.email" type="text" placeholder="voce@email.com" id="email2" />
            </div>
            <div>
              <label for="password2">Senha</label>
              <input v-model.trim="signupForm.password" type="password" placeholder="mínimo 6 caracteres" id="password2" />
            </div>
            <button @click="signup()" class="button">Criar Conta</button>
            <div class="extras">
              <a @click="toggleForm()">Voltar ao Login</a>
            </div>
        </form>
      </div>
    </section>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      signupForm: {
        name: '',
        school: '',
        email: '',
        password: ''
      },
      showLoginForm: true
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        email: this.loginForm.email,
        password: this.loginForm.password
      })
    },
    signup() {
      this.$store.dispatch('signup', {
        email: this.signupForm.email,
        password: this.signupForm.password,
        name: this.signupForm.name,
        school: this.signupForm.school
      })
    },
    toggleForm() {
      this.showLoginForm = !this.showLoginForm
    }
  }
}
</script>