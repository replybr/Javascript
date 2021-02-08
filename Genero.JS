function GeneroPorNome(nome) {

    //var nome = window.prompt("digite seu nome> ")
    var res = nome.substr(-1,1)
    var cadeia = "aAeEiI"
    var saudacao = cadeia.indexOf(res) == "-1" ? " Sr " : " Sra "
    
    //console.log( "Obrigado " + saudacao + nome + ", agradeçemos a visita!")
    //console.log( `Obrigado ${saudacao} ${nome}, agradeçemos a visita!`)
    return document.write( "Obrigado " + saudacao + nome + ", agradeçemos a visita!")

    }