<template>
  <Fab/>
  <AppBar/>
  <MestresProfessores/>
  <Modalidades/>
  <Planos></Planos>
  <Beneficios></Beneficios>
  <Horarios></Horarios>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
import MestresProfessores from "@/components/MestresProfessores.vue";
import Fab from "@/components/Fab.vue";
import Modalidades from "@/components/Modalidades.vue";
import Planos from "@/components/Planos.vue";
import Beneficios from "@/components/Beneficios.vue";
import Horarios from "@/components/Horarios.vue";

export default {
  name: 'App',
  components: {
    Horarios,
    Beneficios,
    Planos,
    Modalidades,
    Fab,
    MestresProfessores,
    AppBar
  }
}
</script>

<style>
</style>