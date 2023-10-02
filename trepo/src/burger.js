import React, { useState } from 'react';
import styled from 'styled-components';
import hamburgermenu from './icons/hamburger-button.png';
import Sidebar from './sidebar';

const Hamburger = styled.img`
	height: 20px;
	width: 30px;
	cursor: pointer;
`;

function Burger() {
	const [open, setOpen] = useState(false)
	return(
		<React.Fragment>
			<Hamburger img src={hamburgermenu} 
				open = {open} onClick = {() => setOpen(!open)} />
			<Sidebar open={open} setOpen={setOpen}/>
		</React.Fragment> // 컴포넌트에서 여러 요소를 반환하거나, 부모 요소로 감싸지 않고 여러 요소를 렌더링해야 할 때 사용
	);
}
export default Burger;