import axios from "axios";

const baseUrl = 'http://localhost:3001'

const getAll = () => {
	return axios
		.get(`${baseUrl}/contacts`)
		.then(response => response.data);
}

const create = (contact) => {
	return axios
		.post(
			`${baseUrl}/contacts`,
			contact
		)
		.then(response => response.data);
};

const remove = (id) => {
	return axios
		.delete(`${baseUrl}/contacts/${id}`)
		.then(response => response.data);
};

export default {
	getAll,
	create,
	remove
}