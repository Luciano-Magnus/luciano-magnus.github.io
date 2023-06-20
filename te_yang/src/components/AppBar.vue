<script>
export default {
  name: 'AppBar'
}
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <p class="navbar-brand" id="logo">
      <img src="../assets/logo.png" alt="Logo" class="logo-img">
      Te Yang
    </p>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>


    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <button type="button" class="nav-link" href="#">Mestres e Professores</button>
        </li>
        <li class="nav-item">
          <button type="button" class="nav-link" href="#">Modalidades</button>
        </li>
        <li class="nav-item">
          <button type="button" class="nav-link" href="#">Planos</button>
        </li>
        <li class="nav-item">
          <button type="button" class="nav-link" href="#">Horários</button>
        </li>
        <li class="nav-item">
          <button type="button" class="nav-link custom-link rounded-pill">Aula experimental</button>
        </li>
      </ul>
    </div>

  </nav>
</template>

<style scoped>
#logo {
  margin: auto auto auto 0px;
}

.logo-img {
  height: 40px; /* Ajuste a altura desejada para o logo */
  margin-right: 10px; /* Adapte a margem à sua preferência */
}

.custom-link {
  outline: 2px solid #FF0000; /* Define a cor e espessura da borda */
  border-radius: 100px; /* Arredonda as bordas */
  padding: 10px 20px; /* Adicione o valor de padding desejado */
}

nav {
  padding-left: 32px;
  padding-right: 32px;
}
</style>
