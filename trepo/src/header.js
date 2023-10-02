import styled from 'styled-components';
import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import Burger from './burger';


const Container = styled.div`
	height: 13%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #DC5555;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #dedede;
    z-index: 100;
`;

const LeftContainer = styled.div`
	margin-left: 100px;
	width:180px;
	display: flex;
	align-items:center;
`;


const RightContainer = styled.div`
	width: 250px;
	margin-right: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-shrink: 0;
`;

const Text = styled.div`
	color: #000;
	font-family: Inter;
	font-size: 50px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
`;

const SText = styled.button`
	${Text};
	font-size: 20px;
	position: relative;
	background: inherit ; 
	border:none; 
	box-shadow:none; 
	border-radius:0; 
	padding:0; 
	overflow:visible; 
	cursor:pointer
`;


function Header() {
	const navigate = useNavigate();
	
	function Navigate() {
		navigate('/emptyPage');
	}

	return (
		<Container>
			<LeftContainer>
				<Text>TREPO</Text>
			</LeftContainer>

			<RightContainer>
				<SText onClick={Navigate}>REGISTER</SText>
				<SText onClick={Navigate}>LOGIN</SText>
				<Burger />
			</RightContainer>
		</Container>
	);
		
}

export default Header;