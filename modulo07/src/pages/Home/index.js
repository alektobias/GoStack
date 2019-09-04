import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
	return (
		<ProductList>
			<li>
				<img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/26/D12-9119-026/D12-9119-026_zoom1.jpg" alt="Tênis" />
				<strong>Tênis top</strong>
				<span>R$129,90</span>

				<button type="button">
					<div>
						<MdAddShoppingCart size={16} color="#fff" /> 3
					</div>
					<span>Adicionar ao carrinho</span>
				</button>
			</li>
			<li>
				<img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/26/D12-9119-026/D12-9119-026_zoom1.jpg" alt="Tênis" />
				<strong>Tênis top</strong>
				<span>R$129,90</span>

				<button type="button">
					<div>
						<MdAddShoppingCart size={16} color="#fff" /> 3
					</div>
					<span>Adicionar ao carrinho</span>
				</button>
			</li>
			<li>
				<img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/26/D12-9119-026/D12-9119-026_zoom1.jpg" alt="Tênis" />
				<strong>Tênis top</strong>
				<span>R$129,90</span>

				<button type="button">
					<div>
						<MdAddShoppingCart size={16} color="#fff" /> 3
					</div>
					<span>Adicionar ao carrinho</span>
				</button>
			</li>
			<li>
				<img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/26/D12-9119-026/D12-9119-026_zoom1.jpg" alt="Tênis" />
				<strong>Tênis top</strong>
				<span>R$129,90</span>

				<button type="button">
					<div>
						<MdAddShoppingCart size={16} color="#fff" /> 3
					</div>
					<span>Adicionar ao carrinho</span>
				</button>
			</li>
			<li>
				<img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/26/D12-9119-026/D12-9119-026_zoom1.jpg" alt="Tênis" />
				<strong>Tênis top</strong>
				<span>R$129,90</span>

				<button type="button">
					<div>
						<MdAddShoppingCart size={16} color="#fff" /> 3
					</div>
					<span>Adicionar ao carrinho</span>
				</button>
			</li>
			<li>
				<img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/26/D12-9119-026/D12-9119-026_zoom1.jpg" alt="Tênis" />
				<strong>Tênis top</strong>
				<span>R$129,90</span>

				<button type="button">
					<div>
						<MdAddShoppingCart size={16} color="#fff" /> 3
					</div>
					<span>Adicionar ao carrinho</span>
				</button>
			</li>
			<li>
				<img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSohS2HCP5gL-WEnjb5QSns070IBNNOa4NUGymUT8p0qIFNGAYatY3Xh9QVYbPV7g&usqp=CAc" alt="Tênis" />
				<strong>Tênis top</strong>
				<span>R$129,90</span>

				<button type="button">
					<div>
						<MdAddShoppingCart size={16} color="#fff" /> 3
					</div>
					<span>Adicionar ao carrinho</span>
				</button>
			</li>
		</ProductList>
	);
}

