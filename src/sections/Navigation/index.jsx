import React from "react";

import {
	Responsive,
	Container,
	Menu,
	Segment,
	Visibility,
} from 'semantic-ui-react'

import { elastic as BurgerMenu } from 'react-burger-menu'

import {
	NavLink
} from "react-router-dom";

import styled from "styled-components";

import {
	HeaderContainer
} from 'utils/Layout';

import './index.css';

const StyledHeader = styled(HeaderContainer)`
	top: 0;
	width: 100vw;
`;

const FixedMenu = () => (
	<Menu fixed='top' size='large'>
    <Container>

      <Menu.Menu position='right'>
	      <Menu.Item as='a' active>Home</Menu.Item>
	      <Menu.Item as='a'>Work</Menu.Item>
	      <Menu.Item as='a'>Company</Menu.Item>
	      <Menu.Item as='a'>Careers</Menu.Item>

      </Menu.Menu>
    </Container>
  </Menu>
)

class DesktopNavigation extends React.Component {

	render() {
		return(
			<Responsive as={Segment} inverted
						textAlign='center'
						style={{ minHeight: '10vh', padding: '1em 0em' }}
						vertical
						minWidth={Responsive.onlyTablet.minWidth}>
				 <Container>
					 <Menu inverted pointing secondary size='large'>
						 <Menu.Item position='right'>
							 <Menu.Item as='a' active>Home</Menu.Item>
							 <Menu.Item as='a'>Work</Menu.Item>
							 <Menu.Item as='a'>Company</Menu.Item>
							 <Menu.Item as='a'>Careers</Menu.Item>
						 </Menu.Item>
					 </Menu>
				 </Container>
			</Responsive>
		);
	}
}

class MobileNavigation extends React.Component {
	render() {

		return(
			<Responsive as={BurgerMenu} {...Responsive.onlyMobile}
					pageWrapId={ "page-wrap" }
					outerContainerId={ "outer-container" } right >
					<Menu.Item as='a' active>Home</Menu.Item>
					<Menu.Item as='a'>Work</Menu.Item>
					<Menu.Item as='a'>Company</Menu.Item>
					<Menu.Item as='a'>Careers</Menu.Item>
			</Responsive>
		);
	}
}

export default class Navigation extends React.Component {
	state = {}

	hideFixedMenu = () => this.setState({
		visible: false
	})
	showFixedMenu = () => this.setState({
		visible: true
	})

	render() {
		const {
			visible
		} = this.state

		return(
			<StyledHeader>
				{ visible ? <FixedMenu /> : null }
			 <Visibility
				 onBottomPassed={this.showFixedMenu}
				 onBottomVisible={this.hideFixedMenu}
				 once={false}
			 >
				<DesktopNavigation />
				<MobileNavigation />
			</Visibility>

			</StyledHeader>
		)
	}
}
