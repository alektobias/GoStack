import React from 'react';
import { MdDelete, MdRemoveCircleOutline as Less, MdAddCircleOutline as Plus } from 'react-icons/md'
import { Container, ProductTable, Total } from './styles';

export default function Cart() {
	return (
		<Container>
			<ProductTable>
				<thead>
					<tr>
						<th />
						<th>PRODUTO</th>
						<th>QTD</th>
						<th>SUBTOTAL</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/26/D12-9119-026/D12-9119-026_zoom1.jpg" alt="Tênis" />

						</td>
						<td>
							<strong>Tênis top</strong>
							<span>R$129,90</span>
						</td>
						<td>
							<div>
								<button type="button">
									<Less size="20" color="#7159c1" />
								</button>
								<input type="number" readOnly value={1} />
								<button type="button">
									<Plus size="20" color="#7159c1" />
								</button>
							</div>
						</td>
						<td>
							<strong>R$258,80</strong>
						</td>
						<td>
							<button type="button">
								<MdDelete size="20" color="#7159c1" />
							</button>
						</td>
					</tr>
				</tbody>
			</ProductTable>
			<footer>
				<button type="button">Finalizar pedido</button>
				<Total>
					<span>TOTAL</span>
					<strong>R$1920,50</strong>
				</Total>
			</footer>
		</Container>
	);
}

