import React, { Component } from "react";
import "../assets/dashboard.css";

import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Tooltip,
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Close";
import AppsIcon from "@material-ui/icons/Apps";
import GridOnIcon from "@material-ui/icons/GridOn";
import PersistentDrawerLeft from "../components/sideNavigationBar";
import SignOut from "../components/signout";
import RefreshIcon from "@material-ui/icons/Refresh";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import ViewAgendaOutlinedIcon from "@material-ui/icons/ViewAgendaOutlined";

class DashboardComponent extends Component {
  state = {
    open: false,
    searchNote: "",
    isGridView: true,
  };

  handleToggle = () => {
    // this.props.slideCards();
    this.setState((state) => ({ isGridView: !state.isGridView }));
  };
  handleAppbar = () => {
    this.props.notePropsToApp();
  };

  handleSearchBar = (evt) => {
    this.setState({ searchNote: evt.target.value });
    // this.props.getSearchedNotes(evt.target.value)
  };

  searchLabels(value) {
    this.props.searchLabels(value);
  }
  handleRefresh() {
    window.location.reload();
    // Reload cards
  }
  NavBar() {
    this.setState({ render: !this.state.render });
  }

  handleSignout = () => {};

  handleClearSearch = () => {
    this.setState({ searchNote: "" });
  };

  render() {
    const { searchNote, isGridView } = this.state;
    return (
      <AppBar position="fixed" className="appbar" color="inherit">
        <Toolbar className="toolbar">
          <div id="appBarMenuAndTitle1">
            <PersistentDrawerLeft />
            <div id="keepImage">
              <img src={require("../assets/images/keep.png")} alt="keep icon" />
            </div>
            <div className="title">
              <b>fundooNotes</b>
            </div>
            <div id="searchBar">
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                className="search-button"
              >
                <Tooltip title="Search">
                  <SearchIcon className="control-icon" />
                </Tooltip>
              </IconButton>
              <InputBase
                id="searchInputBase"
                placeholder="Search"
                value={searchNote}
                onChange={this.handleSearchBar}
              />
              <IconButton
                color="inherit"
                aria-label="clear search"
                onClick={this.handleClearSearch}
              >
                <Tooltip title="Clear">
                  <ClearIcon className="control-icon" />
                </Tooltip>
              </IconButton>
            </div>
            <div className="header-controls">
              <IconButton onClick={this.handleRefresh}>
                <Tooltip title="Refresh">
                  <RefreshIcon />
                </Tooltip>
              </IconButton>
              <div>
                {isGridView ? (
                  <IconButton onClick={this.handleToggle}>
                    <Tooltip title="Grid View">
                      <GridOnIcon />
                    </Tooltip>
                  </IconButton>
                ) : (
                  <IconButton onClick={this.handleToggle}>
                    <Tooltip title="List View">
                      <ViewAgendaOutlinedIcon />
                    </Tooltip>
                  </IconButton>
                )}
              </div>
              <IconButton>
                <Tooltip title="Settings">
                  <SettingsIcon />
                </Tooltip>
              </IconButton>
              <IconButton>
                <Tooltip title="Google apps">
                  <AppsIcon />
                </Tooltip>
              </IconButton>
              <IconButton>
                <Tooltip title="Notifications">
                  <NotificationsNoneOutlinedIcon />
                </Tooltip>
              </IconButton>
              <SignOut props1={this.props.props} />
            </div>
            {/* <CardsView appPropstoCardsView={this.handleAppbar} /> */}
          </div>
        </Toolbar>
        {/* <DrawerMenu
            appBarProps={this.state.open}
            handleNavigation={this.props.handleNavigation}
            searchLabels={(value) => this.searchLabels(value)}
            makeLabelFalse={this.props.makeLabelFalse} /> 
          */}
      </AppBar>
    );
  }
}
export default DashboardComponent;
