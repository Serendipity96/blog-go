import React from 'react'
import './article.less'
class Article extends React.Component{

    render() {
        return(
            <div className='content'>
                <div className='category'>
                    <ul>
                        <li><a href='./'>前端</a></li>
                        <li><a href='./'>Rust</a></li>
                        <li><a href='./'>算法</a></li>
                    </ul>
                </div>
                <ul className='article-list'>
                    <li className='article-item'>
                        <div>
                        <img src={require('../img/article-img.jpg')} alt='img'/>
                        </div>
                        <div className='word'>
                            <h2>空间立体效果图,完美呈现最终效果</h2>
                            <h5>设计文章</h5>
                            <p>室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境</p>
                            <a href='./'>阅读更多</a>
                        </div>
                    </li>
                    <li className='article-item'>
                        <div>
                            <img src={require('../img/article-img.jpg')} alt='img'/>
                        </div>
                        <div className='word'>
                            <h2>空间立体效果图,完美呈现最终效果</h2>
                            <h5>设计文章</h5>
                            <p>室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境</p>
                            <a href='./'>阅读更多</a>
                        </div>
                    </li>
                    <li className='article-item'>
                        <div>
                            <img src={require('../img/article-img.jpg')} alt='img'/>
                        </div>
                        <div className='word'>
                            <h2>空间立体效果图,完美呈现最终效果</h2>
                            <h5>设计文章</h5>
                            <p>室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境</p>
                            <a href='./'>阅读更多</a>
                        </div>
                    </li>
                </ul>
            </div>


        )
    }
}

export default Article;