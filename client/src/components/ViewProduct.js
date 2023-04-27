import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import '../css/productView.css';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import SellerFilteredRate from "./SellerFilteredRate";

export default function ViewProduct() {

	const [product, setProduct] = useState([]);


	useEffect(() => {
		Axios.get('http://localhost:8060/product/products')
			.then((getPro) => {
				setProduct(getPro.data);
			})
	})

	const setID = (_id, productID, productName, quantity, type, color, size, productDescription) => {


		localStorage.setItem('productID', productID);
		localStorage.setItem('productName', productName);
		localStorage.setItem('quantity', quantity);
        localStorage.setItem('type', type);
        localStorage.setItem('color', color);
        localStorage.setItem('size', size);
        localStorage.setItem('productDescription', productDescription);
		localStorage.setItem('ID', _id);
	}

	const onDelete = (_id) => {
		Axios.delete("http://localhost:8060/product/deleteProduct/" + _id)
			.then(() => {
				alert("Product Deleted");
				window.location.reload();
			})
	}

	const submit = (_id) => {

		confirmAlert({
		  title: 'Confirm to Delete',
		  message: 'Are you sure to do this?',
		  buttons: [
			{
			  label: 'Yes',
			  onClick: () => onDelete(_id)
			},
			{
			  label: 'No',
			  //onClick: () => alert('Click No')
			}
		  ]
		});
	}

	const [search, setSearch] = useState("");
	console.log(search);
	return (

		<section className="ftco-section">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-6 text-center mb-5">
						<form className="d-flex"> 
							<input className="form-control me-2" type="search" placeholder="Search" onChange={(e)=>setSearch(e.target.value)} aria-label="Search"></input>
						
						</form>
						<h2 className="heading-section text-black">Products</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">

						<div className="table-wrap">
							<table className="table text-black">
								<thead className="thead-primary">
									<tr>

										<th>Product ID</th>
										<th>Product Name</th>
										<th>Quantity</th>
                                        <th>type</th>
                                        <th>color</th>
                                        <th>size</th>
                                        <th>product Description</th>
										<th>Update</th>
										<th>Delete</th>
									</tr>
								</thead>
								{product.filter((data)=>{
									return search.toLowerCase() === '' ? data:data.productName.toLowerCase().includes(search)
								}).map((data) => {
									return (
										<tbody>
											<tr key={data._id}>
												<td>{data.productID}</td>
												<td>{data.productName}</td>
												<td>{data.quantity}</td>
                                                <td>{data.type}</td>
                                                <td>{data.color}</td>
                                                <td>{data.size}</td>
                                                <td>{data.productDescription}</td>
												<td>
													<Link to='/updateP'>
														<button className="btn btn-dark" onClick={() => setID(data._id, data.productID, data.productName, data.quantity, data.type, data.color, data.size, data.productDescription)}>
															Update
														</button>
													</Link>
												</td>
												<td>

													<button className="btn btn-danger" onClick={() => submit(data._id)}>
														Delete
													</button>

												</td>
											</tr>

										</tbody>
									)
								}
								)}

							</table>

						</div>
					</div>
				</div>
				<SellerFilteredRate/>
			</div>
		</section>

	)

};
