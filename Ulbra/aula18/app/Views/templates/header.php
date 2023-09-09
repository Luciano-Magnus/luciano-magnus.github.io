<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Prova</title>

    <link rel="stylesheet" href="./assets/css/style.css">

  <!-- Bootstrap -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
   <!-- /bootstrap-->


</head>

<body>


    <header>
        <div class="banner"></div>

    </header>
<nav class="navbar navbar-expand-sm bg-light">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="<?=base_url('home')?>">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="<?=base_url('products')?>">Produtos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="<?=base_url('register')?>">Cadastrar</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="<?=base_url('contacts')?>">Listar Clientes</a>
      </li>
    </ul>
  
  </nav>