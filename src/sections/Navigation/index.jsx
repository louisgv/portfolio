import React from "react";

import {
	Responsive,
	Menu,
	Visibility,
} from 'semantic-ui-react'

import { pushRotate as BurgerMenu } from 'react-burger-menu'

// import {
// 	NavLink
// } from "react-router-dom";

import styled from "styled-components";

import {
	HeaderContainer
} from 'utils/Layout';

import Hero from 'sections/Hero';

import './index.css';

const StyledHeader = styled(HeaderContainer)`
	top: 0;
	width: 100%;
	height: 100%;
`;

const FixedMenu = ({children}) => (
	<Responsive as={Menu}
				fixed='top'
				size='large'
				inverted pointing secondary
				widths={children.length}
				minWidth={Responsive.onlyTablet.minWidth}>
    	{children}
	</Responsive>
)

const CenteredMenu = styled(Menu)`
	display: flex;
	justify-content: center;
`

const DesktopNavigation = ({children}) => (
	<Responsive as={CenteredMenu}
				inverted pointing secondary
				size='massive'
				minWidth={Responsive.onlyTablet.minWidth}>

			{children}

	</Responsive>
)

const MobileNavigation =({children})=> (
	<Responsive as={BurgerMenu}
			{...Responsive.onlyMobile}
			pageWrapId={ "page-wrap" }
			outerContainerId={ "Home" } right>
  		{children}
	</Responsive>
)

const MENU = ['Home', 'About', 'Work', 'Education', 'Skills', 'Portfolio'];

export default class Navigation extends React.Component {
	state = {
		activeItem: MENU[0],
		visible: false
	}

	hideFixedMenu = () => this.setState({
		visible: false
	})

	showFixedMenu = () => this.setState({
		visible: true
	})

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	render() {
		const {
			activeItem,
			visible
		} = this.state

		const MenuItems = MENU.map((item, i) => (
			<Menu.Item as='a' href={`#${item}`} key={i} onClick={this.handleItemClick}
				active={activeItem === item} name={item}/>
		))

		return(
			<StyledHeader>
				{ visible ? <FixedMenu>{MenuItems}</FixedMenu> : null }
				 <Visibility
					 onBottomPassed={this.showFixedMenu}
					 onBottomVisible={this.hideFixedMenu}
					 once={false}
				 >
					<DesktopNavigation>{MenuItems}</DesktopNavigation>
					<MobileNavigation>{MenuItems}</MobileNavigation>
					<Hero />
				</Visibility>

			</StyledHeader>
		)
	}
}
