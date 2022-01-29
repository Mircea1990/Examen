import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import "./AddEdit.css";
import { toast } from "react-toastify";

const initialState = {
	name: "",
	email: "",
	contact: "",
};

const Sample = () => {
	const [state, setState] = useState(initialState);

	const { name, email, contact } = initialState;

	const history = useHistory();
	const addContact = async (data) => {
		const response = await axios.post("http://localhost:5000/user", data);
		if (response.status === 200) {
			toast.success(response.data);
		}
	};

	const handleInputChange = (e) => {
		console.log(e.target.name);
		let { name, value } = e.target;
		setState({ ...state, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name || !email || !contact) {
			toast.error("Please provide value into each input field");
		} else {
			addContact(state);
			history.push("/");
		}
	};

	return (
		<div style={{ marginTop: "100px" }}>
			<form
				style={{
					margin: "auto",
					padding: "15px",
					maxWidth: "400px",
					alignContent: "center",
				}}
				onSubmit={handleSubmit}
			>
				<label htmlFor="name">Name</label>
				<input type="text" id="name" name="name" placeholder="Crew Name ..." onChange={handleInputChange} value={name} />
				<label htmlFor="email">Crew Role</label>
				<input type="email" id="email" name="email" placeholder="Crew Role ..." onChange={handleInputChange} value={email} />
				<label htmlFor="contact">Contact</label>
				<input type="number" id="contact" name="contact" placeholder="Crew Contact No. ..." onChange={handleInputChange} value={contact} />
				<input type="submit" value="Add" />
			</form>
		</div>
	);
};

export default Sample;
