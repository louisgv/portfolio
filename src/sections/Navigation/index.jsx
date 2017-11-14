import React from "react";

import {
	Responsive,
	Container,
	Menu,
	Segment,
	Visibility,
} from 'semantic-ui-react'

import { pushRotate as BurgerMenu } from 'react-burger-menu'

import {
	NavLink
} from "react-router-dom";

import styled from "styled-components";

import {
	HeaderContainer
} from 'utils/Layout';

import './index.css';

const {location} = window;

const StyledHeader = styled(HeaderContainer)`
	top: 0;
	width: 100vw;
`;

const FixedMenu = ({children}) => (
	<Menu fixed='top' size='large'>
    <Container>
      <Menu.Menu position='right'>
	    	{children}
      </Menu.Menu>
    </Container>
  </Menu>
)

const DesktopNavigation = ({children}) => (
	<Responsive as={Segment} inverted
				textAlign='center'
				style={{ minHeight: '10vh', padding: '1em 0em' }}
				vertical
				minWidth={Responsive.onlyTablet.minWidth}>
		 <Container>
			 <Menu inverted pointing secondary size='large'>
				 <Menu.Item position='right'>
  				{children}
				 </Menu.Item>
			 </Menu>
		 </Container>
	</Responsive>
)

const MobileNavigation =({children})=> (
	<Responsive as={BurgerMenu} {...Responsive.onlyMobile}
			pageWrapId={ "page-wrap" }
			outerContainerId={ "outer-container" } right>
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
			</Visibility>

			</StyledHeader>
		)
	}
}
