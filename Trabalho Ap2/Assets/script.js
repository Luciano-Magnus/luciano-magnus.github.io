var visibilidade_bhaskara 
var visibilidade_funcao_quadratica 
var visibilidade_area 
function redireciona() {
    window.location.href = "http://www.devmedia.com.br"; 
}

    
function somar() {
    var a = document.getElementById('A').value
    var b = document.getElementById('B').value
    var c = document.getElementById('C').value
    var delta = ((parseInt(b) * parseInt(b)) + ((parseInt(4) * parseInt(a) * parseInt(c))*-1))

    res = "Δ= "+b+"² -4 * "+a+" * "+c+"<br>Δ= "+(parseInt(b)* parseInt(b)) + " + "+((parseInt(4) * parseInt(a) * parseInt(c))*-1)+
    "<br>Δ= "+ delta+
    "<br>X1=(-b+√Δ)/2.a"+"<br>X1= ("+b*-1+" + √"+delta+") / 2 * "+a+
    "<br>X1= "+b*-1+" + "+Math.sqrt(delta)+" / "+2*a+
    "<br>X1= "+(((b*-1)+Math.sqrt(delta))/(2*a))+
    "<br>X2=(-b-√Δ)/2.a"+"<br>X2= ("+b*-1+" - √"+delta+") / 2 * "+a+
    "<br>X2= "+b*-1+" - √"+Math.sqrt(delta)+" / "+2*a+
    "<br>X1= "+(((b*-1)-Math.sqrt(delta))/(2*a))






    console.log("soma = "+delta)

    //var soma = parseInt(n1) + parseInt(n2);
    //console.log("soma = "+soma)

    document.getElementById("result_bhaskara").innerHTML = res
}

function texto_bhaskara() {


        if (visibilidade_bhaskara) {//Se a variável visibilidade for igual a true, então...
                document.getElementById("dv_bhaskara").style.display = "none";//Ocultamos a div
                visibilidade_bhaskara = false;//alteramos o valor da variável para falso.
            } else {//ou se a variável estiver com o valor false..
                document.getElementById("dv_bhaskara").style.display = "block";//Exibimos a div..
        var res = "A fórmula de Bhaskara é um método resolutivo para equações do segundo grau"+
        " cujo nome homenageia o grande matemático indiano que a demonstrou. Essa fórmula nada"+
        " mais é do que um método para encontrar as raízes reais de uma equação do segundo grau"+ 
        " fazendo uso apenas de seus coeficientes. Vale lembrar que coeficiente é o número que"+ 
        " multiplica uma incógnita em uma equação."
    
        document.getElementById("texto_bhaskara").innerHTML =  res
    
                visibilidade_bhaskara = true;//Alteramos o valor da variável para true.
            }

}

function texto_funcao_quadratica() {

     if (visibilidade_funcao_quadratica) {//Se a variável visibilidade for igual a true, então...
                document.getElementById("dv_funcao_quadratica").style.display = "none";//Ocultamos a div
                visibilidade_funcao_quadratica = false;//alteramos o valor da variável para falso.
            } else {//ou se a variável estiver com o valor false..
                document.getElementById("dv_funcao_quadratica").style.display = "block";//Exibimos a div..
        var res = "A função quadrática, também chamada de função do segundo grau, é expressa como"+ 
        " f(x) = ax² + bx + c ou y = ax² + bx + c, sendo que os coeficientes 'a, b e c' números reais"+ 
        " e 'a' diferente de 0 (zero)."+
    
    
        "<br> <br>De modo geral, as funções possuem dois elementos básicos: 1) domínio, que corresponde ao"+
        " conjunto dos valores possíveis das abscissas (x) e 2) imagem, que é o conjunto de valores das"+
        " ordenas (y), estabelecida pela aplicação de f(x)."+ 
        
        "<br> <br>Já o grau da função é determinado de acordo com o maior expoente da variável x."+
        " No caso da função quadrática, dois é o mais expoente de x. Mas atenção! Se em uma função"+ 
        " não houver nenhum expoente na variável x significa que ela é do primeiro grau."+
    
        " <br><br><label for="+"valor1"+">Digite a quantidade de Kwh <strong>1</strong>:</label>"+
                        "<input type="+"text"+ "name="+"valor1" +"id="+"valor1" +"/>"+
             
                       " <br><label for="+"valor2"+">Digite o valor do Kwh/h <strong>2</strong>:</label>"+
                        "<input type="+"text"+ "name="+"valor2"+ "id="+"valor2"+ "/>"+
                  
                  
                        "<br><button type="+"button" +"class="+"btn btn-primary"+ "onclick="+"calcularKwh()"+">Calcular</button>"
             
                        
    
        document.getElementById("texto_funcao_quadratica").innerHTML =  res
                visibilidade_funcao_quadratica = true;//Alteramos o valor da variável para true.
            }




    

}

function texto_area() {
   // var id = getElementById("texto_area").value

    if (visibilidade_area) {//Se a variável visibilidade for igual a true, então...
        document.getElementById("dv_area").style.display = "none";//Ocultamos a div
        visibilidade_area = false;//alteramos o valor da variável para falso.
    } else {//ou se a variável estiver com o valor false..
        document.getElementById("dv_area").style.display = "block";//Exibimos a div..
        var res = "Área é a medida de uma superfície."+

        "<br> <br>A área do campo de futebol é a medida de sua superfície (gramado)."+
    
        "<br> <br>Se pegarmos outro campo de futebol e colocarmos em uma malha quadriculada,"+ 
        " a sua área será equivalente à quantidade de quadradinho. Se cada quadrado for uma unidade de área:"+
        "<img src="+"Assets/imagens/campoarea.jpg"+" alt="+"foto campo"+">"
        
        document.getElementById("texto_area").innerHTML =  res
        visibilidade_area = true;//Alteramos o valor da variável para true.
    }
   
       
}
