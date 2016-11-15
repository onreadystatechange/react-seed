import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

// 引入Antd组件
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current:document.cookie.split(";")[0].split("=")[1]
        }
    }    
    changeCookie = (v) => {
        document.cookie = "nowKey=" + v;
    }    
    handleClick = (e) => {
        this.setState({ current: e.key });
        this.changeCookie(e.key);
        if(e.key == "1"){
            browserHistory.push('/');
        }else if(e.key == '2'){
            browserHistory.push('chart');
        }
    }
    render() {
        return (
            <div id="leftMenu"> 
                <img src={require('../images/logo.png')} width="50" id="logo"/>                 
                <Menu 
                    onClick={this.handleClick}
                    theme="light"
                    mode="vertical"
                    selectedKeys={[this.state.current]}
                    style={{ width: 146 }}                    
                >
                    <Menu.Item key="1"><Icon type="home" />首页</Menu.Item> 
                    <SubMenu key="sub1" title={<span><Icon type="bar-chart" /><span>数据报告</span></span>}>
                        <Menu.Item key="2">广告报告</Menu.Item>
                    </SubMenu>                    
                </Menu>
                <div id="copyright">Copyright © 白延云</div>                    
            </div>                
        )
    }
}