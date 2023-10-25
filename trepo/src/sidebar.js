import styled from 'styled-components';
import React from 'react';
import xicon from './icons/x.png';


const Ul = styled.ul`
	display: flex;
	flex-flow: column nowrap;
	background-color: #D3D3D3;
	position: fixed;
	transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
	top: 0;
	right: 0;
	height: 100vh;
	width: 300px;
	padding-top: 1.5rem;
	transition: transform 0.3s ease-in-out;
	
	li {
		color: black;
		line-height: 3
	}
`;

const Xicon = styled.img`
	height: 20px;
	width: 20px;
	cursor: pointer;
	
`;


function Sidebar({open, setOpen}) {
	
	const close = () => {
		setOpen(!open)
	}
	
	return (
		<Ul open = {open}>
			<Xicon img src = {xicon} onClick={close}/>
			<li> Home</li>
			<li> Notice</li>
			<li> My Page</li>
			<li> Contact Us</li>
		</Ul>
	);
}
export default Sidebar;