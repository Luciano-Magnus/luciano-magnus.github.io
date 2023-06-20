<script>
  export default {
    name: 'ButtonSubmit',
    props: {
      text: {
        type: String,
        required: true,
      },
      color: {
        type: String,
        default: 'primary',
      },
    },
    methods: {
      handleClick() {
        // Função a ser executada ao clicar no botão
        // Você pode personalizar essa função conforme suas necessidades
        console.log('Botão clicado!');
      },
    },
  }
</script>

<template>
  <button :class="['rounded-button', color]" @click="handleClick">{{ text }}</button>
</template>

<style scoped>
.rounded-button {
  border-radius: 999px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  outline: none;
}

.primary {
  background-color: #FF0000;
  color: #ffffff;
}

.secondary {
  background-color: #6c757d;
  color: #ffffff;
}

.success {
  background-color: #28a745;
  color: #ffffff;
}

.warning {
  background-color: #ffc107;
  color: #000000;
}

.error {
  background-color: #dc3545;
  color: #ffffff;
}
</style>