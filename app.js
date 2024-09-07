function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");
  let resultados = "";
  for (let dado of dados) {
    resultados += `
<div class="item-resultado">
   <h2> 
   <a href="#" target="_blank">${dado.titulo}</a>
   </h2>
    <p> ${dado.descricao} </p>
    <a href=${dado.link}
       </div>
       `;
  }
  section.innerHTML = resultados;
}
