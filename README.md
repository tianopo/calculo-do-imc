<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seu IMC</title>
    <link rel="stylesheet" href="reset.css">
    <link rel="stylesheet" href="imc.css">
</head>
<body>
    <h1 class="titulo">Calcule seu IMC</h1>
    <form class="container">
        <ul class="mensagensErro">

        </ul>
        <div>
            <label for="nome">Nome</label>
            <input type="text" name="nome" id="nome" class="input" placeholder="Seu Nome">
        </div>
        <div>
            <label for="peso">Peso</label>
            <input type="text" name="peso" id="peso" class="input" placeholder="Seu Peso">
        </div>
        <div>
            <label for="altura">Altura</label>
            <input type="text" name="altura" id="altura" class="input" placeholder="Sua Altura">
        </div>
        <div class="controle">
            <input type="submit" value="Calcular" id="botao">
        </div>
    </form>
    <section class="container">
        <label for="filtragem">Filtro</label>
        <input type="text" name="filtro" id="filtragem">
        <table id="tabela">
            <thead>
                <tr class="principal">
                    <th class='nome'>Nome</th>
                    <th class="peso">Peso</th>
                    <th class="altura">Altura</th>
                    <th class="imc">Imc</th> 
                </tr>
            </thead>
            <tbody>
                <tr class="pessoa">
                    <td class="info-nome">Karina</td>
                    <td class="info-peso">70</td>
                    <td class="info-altura">1.67</td>
                    <td class="info-imc">0</td>
                </tr>
                <tr class="pessoa">
                    <td class="info-nome">Téo</td>
                    <td class="info-peso">85</td>
                    <td class="info-altura">1.79</td>
                    <td class="info-imc">0</td>
                </tr>
            </tbody>
        </table>
    </section>
</body>
    <script src="imc.js"></script>
</body>
</html>
