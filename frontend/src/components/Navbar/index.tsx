import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { FaMagnifyingGlass, FaCartShopping } from "react-icons/fa6";

import logo from "../../assets/images/Streaming.png";

export default function NavScrollExample() {
	const [search, setSearch] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e: any) => {
		e.preventDefault();

		if (!search) return;

		navigate(`search-streaming?title=${search}`);
		setSearch("");
	};

	return (
		<Navbar expand="lg" bg="primary" variant="dark">
			<Container fluid>
				<Navbar.Brand href="/">
					<img style={{ maxWidth: "10rem" }} src={logo} alt="" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						<Nav.Link href="/user/register">Cadastra-se</Nav.Link>
					</Nav>

					<Form className="d-flex" onSubmit={handleSubmit}>
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: "100px" }}
							navbarScroll
						>
							<Nav.Link href="/">
								<FaCartShopping />
							</Nav.Link>
							<Nav.Link href="/login">Login</Nav.Link>
						</Nav>
						<Form.Control
							type="search"
							placeholder="Pesquisar"
							className="me-2"
							aria-label="Search"
							onChange={(e) => setSearch(e.target.value)}
							value={search}
						/>
						<Button variant="outline-light" type="submit">
							<FaMagnifyingGlass />
						</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}