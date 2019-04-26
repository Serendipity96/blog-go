import React from 'react'
import './header.less'

class Header extends React.Component{
    render() {
        return (
            <div className='container'>
                <div className='logo'>logo图</div>
                <ul className='nav'>
                    <li><a href='./'>文章</a></li>
                    <li><a href='./'>说说</a></li>
                    <li><a href='./'>留言</a></li>
                    <li><a href='./'>相册</a></li>
                    <li><a href='./'>关于</a></li>
                </ul>
                <div className='me'>我</div>
            </div>
        );
    }
}

export default Header;