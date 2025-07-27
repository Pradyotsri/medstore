package com.organica.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class CartDetalis {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int CartDetalisId;

	@ManyToOne
	private Product products;
	private int Quantity;
	private int Amount;

	@ManyToOne
	private Cart cart;

	public int getCartDetalisId() {
		return CartDetalisId;
	}

	public void setCartDetalisId(int cartDetalisId) {
		CartDetalisId = cartDetalisId;
	}

	public Product getProducts() {
		return products;
	}

	public void setProducts(Product products) {
		this.products = products;
	}

	public int getQuantity() {
		return Quantity;
	}

	public void setQuantity(int quantity) {
		Quantity = quantity;
	}

	public int getAmount() {
		return Amount;
	}

	public void setAmount(int amount) {
		Amount = amount;
	}

	public Cart getCart() {
		return cart;
	}

	public void setCart(Cart cart) {
		this.cart = cart;
	}

}
