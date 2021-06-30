import React, {Component} from 'react';
import './Layout.css';
import Toolbar from '../components/Navigation/Toolbar';
import SideDrawer from '../components/Navigation/SideDrawer';

class Layout extends Component {
    state={
        showSideDrawer: true
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false})

    }
    drawerToggleClick = (prevState) =>{
        this.setState({showSideDrawer: !prevState.showSideDrawer})
    }
    render(){
    return(
        <>
        <Toolbar drawerToggleClick={this.drawerToggleClick} />
        <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer} />
        <main className="Content">
            {this.props.children}
        </main>
        </>
    )
    }

}

export default Layout;