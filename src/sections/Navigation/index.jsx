import React from "react";

import {
	Responsive,
	Menu,
	Visibility,
} from 'semantic-ui-react'

import { stack as BurgerMenu } from 'react-burger-menu'

// import {
// 	NavLink
// } from "react-router-dom";

import styled from "styled-components";

import {
	HeaderContainer
} from 'utils/Layout';

import {SECTIONS as menus} from 'resume';

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

const MobileNavigation =({isOpen, children})=> (
	<Responsive as={BurgerMenu}
			isOpen={isOpen}
			{...Responsive.onlyMobile}
			right>
  		{children}
	</Responsive>
)

export default class Navigation extends React.Component {
	state = {
		activeItem: menus[0],
		visible: false,
		open: false
	}

	hideFixedMenu = () => this.setState({
		visible: false
	})

	showFixedMenu = () => this.setState({
		visible: true
	})

	handleItemClick = (e, { name }) => this.setState({ open: false, activeItem: name })

	render() {
		const {
			activeItem,
			visible,
			open
		} = this.state

		const MenuItems = menus.map((item, i) => (
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
					<MobileNavigation isOpen={open}>{MenuItems}</MobileNavigation>
					<Hero />
				</Visibility>

			</StyledHeader>
		)
	}
}
