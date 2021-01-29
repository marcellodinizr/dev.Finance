const Modal = {
	open() {
		document.querySelector(".modal-overlay").classList.add("active");
	},
	close() {
		document.querySelector(".modal-overlay").classList.remove("active");
	},
};

const transactions = [
	{
		id: 1,
		description: "Luz",
		amount: -5000,
		date: "23/01/2021",
	},
	{
		id: 2,
		description: "Webite",
		amount: 5000,
		date: "23/01/2021",
	},
	{
		id: 3,
		description: "Internet",
		amount: -5000,
		date: "23/01/2021",
	},
];

const Transaction = {
	income() {
		// somar as entradas
	},
	expenses() {
		// somas as saidas
	},
	total() {
		// entradas - saidas
	},
};

// Substituir os dados do HTML com os dados do JS

const DOM = {
	innerHTMLTransaction() {
		const html = `
		<tr>
			<td class="description">Luz</td>
			<td class="expense">- R$ 500,00</td>
			<td class="date">23/01/2021</td>
			<td>
				<img src="./assets/minus.svg" alt="Remover transação" />
			</td>
		</tr>
		`;
	},
};
