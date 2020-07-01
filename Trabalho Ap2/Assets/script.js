var visibilidade_bhaskara 
var visibilidade_funcao_quadratica 
var visibilidade_area 
    
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

function porcentagem() {
    var valor = document.getElementById('valor').value
    var desconto = document.getElementById('desconto').value

    const res = "Porcentagem * (valor / 100)"+
            "<br>" + desconto +" * ("+valor+" / 100"+
            "<br>" + desconto + " * " + valor / 100 + 
            "<br>"+desconto * (valor / 100)+"%"
    document.getElementById("result_porcentagem").innerHTML = res
}

function cilindro() {
    var r = document.getElementById('raio').value
    var h = document.getElementById('altura').value
    var ab = 3.14 * (r*r)
    var al = 2 * 3.14 * r * h
    var at = 2 * ab + al
    const res = "Área da base = π * raio²"+
                "<br>AB = 3,14 * "+r+"²"+
                "<br>AB = 3,14 * "+r*r+
                "<br>AB = " + (ab).toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2})+
                "<br>Área lateral = 2π * r * h"+
                "<br>AL = 2 * 3,14 * "+r + " * "+h+
                "<br>AL = " + 2* 3.14 + " * " + r * h+
                "<br>AL = " + (al).toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2})+
                "<br>Área total = 2 * AB + AL"+
                "<br>AT = 2 * "+(ab).toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2})+" + "+(al).toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2})+
                "<br>AT = "+ 2*ab+" + "+ (al).toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2}) +
                "<br>AT = "+ (at).toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2})

    document.getElementById("result_cilindro").innerHTML = res
}


