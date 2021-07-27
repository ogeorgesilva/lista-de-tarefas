import BotaoConclui from "./componentes/concluiTarefas.js"	
import BotaoDeleta from "./componentes/deletaTarefas.js"

	const criarTarefa = (evento) => {
	
	evento.preventDefault();

	const lista = document.querySelector("[data-list]");
	const input = document.querySelector("[data-form-input]");
	const valor = input.value;

	const tarefa = document.createElement("li");
	const conteudo = `<p class="content">${valor}</p>`;
	tarefa.classList.add("task");

	tarefa.innerHTML = conteudo;
	tarefa.appendChild(BotaoConclui());
	tarefa.appendChild(BotaoDeleta());
	lista.appendChild(tarefa);
	input.value = " ";
	
}

const novaTarefa = document.querySelector("[data-form-button]");

novaTarefa.addEventListener("click", criarTarefa);