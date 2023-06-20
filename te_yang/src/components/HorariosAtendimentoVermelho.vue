<script>
import DiaComponentUtil from "@/components/utils/DiaComponentUtil.vue";
import NoiteComponentUtil from "@/components/utils/NoiteComponentUtil.vue";

export default {
  name: "HorarioAtendimentoVermelho",
  components: {
    NoiteComponentUtil,
    DiaComponentUtil,
  },
  props: {
    diaSemana: {
      type: String,
      required: true,
    },
    corFundo: {
      type: String,
      default: 'vermelho',
    },
    atendimentos: {
      type: Array,
      required: true,
    },
  },
  methods: {
    formatarHorario(horario) {

      console.log(parseInt(horario.split(':')[0]))

      const partes = horario.split(':');
      return `${partes[0]}:${partes[1]}`;
    }
  }
};
</script>

<template>
  <div class="card text-center">
    <h4>{{ diaSemana }}</h4>
    <ul>
      <li class="flex-column text-start" v-for="atendimento in atendimentos" :key="atendimento.nome">
        <div class="divider"></div>
        <h6>{{ atendimento.nome }}</h6>
        <ul>
          <li v-for="horario in atendimento.horarios" :key="horario">
              <span v-if="parseInt(horario.inicio.split(':')[0]) <= 17">
              <DiaComponentUtil></DiaComponentUtil>
              Início {{ formatarHorario(horario.inicio) }}h - Fim {{ formatarHorario(horario.fim) }}h
            </span>
            <span v-if="parseInt(horario.inicio.split(':')[0]) > 17">
              <NoiteComponentUtil></NoiteComponentUtil>
              Início {{ formatarHorario(horario.inicio) }}h - Fim {{ formatarHorario(horario.fim) }}h
            </span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.card {
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  margin-left: 16px;
  min-width: 240px;
  min-height: 369px;
  max-width: 240px;
  max-height: 369px;
  border: none;
  background-color: #FF0000;
  color: #FFFFFF;
}

.divider {
  width: 70%;
  margin: 16px auto;
  border: none;
  height: 1px;
  background-color: #FFFFFF;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  margin-bottom: 8px;
}

li div {
  margin-top: 4px;
}
</style>
