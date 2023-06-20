<script>
import ButtonSubmit from "@/components/utils/ButtonSubmit.vue";
import Check from "@/components/utils/CheckUtils.vue";

export default {
  name: 'PlanosCard',
  components: {
    Check,
    ButtonSubmit,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    valueSuffix: {
      type: String,
      default: '/Mês',
    },
    info: {
      type: String,
      required: true,
    },
    checks: {
      type: Array,
      default: () => [],
    },
    buttonText: {
      type: String,
      default: 'Escolher',
    },
  },
  methods: {
    handleButtonClick() {
      // Função a ser executada ao clicar no botão
      // Você pode personalizar essa função conforme suas necessidades
      console.log('Botão clicado!');
    }
  }
}
</script>

<template>
  <div class="card-group justify-content-center text-center">
    <div class="card shadow p-3 mb-5 bg-white rounded">
      <h6 class="card-title">
        {{ title }}
      </h6>
      <h6 class="valor">{{ value }}<span class="valor-span">{{ valueSuffix }}</span></h6>
      <p class="info">{{ info }}</p>
      <div v-for="(check, index) in checks" :key="index">
        <Check :text="check"></Check>
      </div>
      <ButtonSubmit :text="buttonText" @click="handleButtonClick"></ButtonSubmit>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: none;
  padding: 32px;
  text-align: left;
  margin-left: 16px;
}

.primary {
  background-color: #FF0000;
  color: #ffffff;
}

.secondary {
  background-color: #002374;
  color: #ffffff;
}

.valor {
  color: #FF0000;
}

.valor-span {
  color: black;
}

.info {
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  color: #7F7F7F;
}

h6 {
  font-family: 'Poppins', sans-serif;
}
</style>