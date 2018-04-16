import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import PropTypes from "prop-types"
import FlatButton from "material-ui/FlatButton"

const NavLeft = styled.nav`
  width: 85%;
  float: left;
  padding-left: 150px;
`

const Header = styled.header`
  background-image: url(/public/img/logo.svg);
  background-size: auto 70px;
  background-position: 100px 5px;
  background-repeat: no-repeat;
  width: 100%;
  background-color: white;
  border-bottom: 3px solid #dfdfdf;
  padding: 18px 100px;
  overflow: hidden;
  vertical-align: middle;
`

const NavRight = styled.nav`
  float: right;
  color: white;
  max-width: 15%;
  overflow: hidden;
`

// TODO: due to issue https://github.com/styled-components/styled-components/issues/439,
// bgcolor prop triggers react warning now, need to fix
const NavItem = styled(Link)`
  margin-right: 4px;
  span {
    padding-left: 4px !important;
  }
  height: 100%;
`

const NavIcon = styled.div`
  vertical-align: middle;
  padding-left: 4px;
`

/**
 * NavBar renders row of nav-items of form { name, icon, link }
 * @param {navaItems,user,onLogoutClick} params
 */
const navItems = [
  { icon: "home", link: "/", color: "#a2a2a2", name: "home" },
  { icon: "search", link: "/query", color: "#daa520", name: "query" },
  { icon: "class", link: "/DD", color: "#a2a2a2", name: "dictionary" },
  { icon: "face", link: "/identity", color: "#daa520", name: "profile" },
  { icon: "content_copy", link: "/files", color: "#a2a2a2", name: "data" }
]
const NavBar = () => (
  <Header>
    <NavLeft>
      {navItems.map(
        item =>
          item.link.startsWith("http") ? (
            <a key={item.link} href={item.link}>
              <FlatButton
                label={item.name}
                style={{ color: "inherit", verticalAlign: "middle" }}
              >
                <NavIcon className="material-icons">{item.icon}</NavIcon>
              </FlatButton>
            </a>
          ) : (
            <NavItem key={item.link} to={item.link}>
              <FlatButton
                label={item.name}
                style={{ color: "inherit", verticalAlign: "middle" }}
              >
                <NavIcon className="material-icons">{item.icon}</NavIcon>
              </FlatButton>
            </NavItem>
          )
      )}
    </NavLeft>
  </Header>
)

NavBar.propTypes = {}

export default NavBar
