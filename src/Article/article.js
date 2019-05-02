import React from 'react'
import './article.less'

const tagsUrl = 'http://localhost:8081/tags'
const articleUrl = 'http://localhost:8081/articleList'

class Article extends React.Component {

    state = {
        tagsList: [],
        currentIndex: 0,
        articleList: []
    }

    componentDidMount() {
        this.getTagsList()
        this.getArticleList(0)
    }


    getTagsList() {
        const _this = this
        fetch(tagsUrl, {
            method: 'GET'
        }).then((res) => res.json())
            .then((res) => {
                _this.setState({tagsList: res})
                console.log(res)
            })
    }

    changeTag(index) {
        this.setState({currentIndex: index})
        this.getArticleList(index)
    }

    getArticleList(index) {
        const _this = this
        fetch(articleUrl, {
            method: 'POST',
            body: index
        }).then((res) => res.json())
            .then(res => {
                _this.setState({articleList:res})
                console.log(res)
            })
    }

    render() {
        const {tagsList, currentIndex,articleList} = this.state
        console.log(articleList)
        return (
            <div className='content'>
                <div className='category'>
                    <ul>
                        {tagsList.map((item, index) => (
                            <li key={index} className={index === currentIndex ? 'tagItem_active' : ''}
                                onClick={this.changeTag.bind(this, index)}><span>{item.tag_name}</span></li>
                        ))}
                    </ul>
                </div>
                <ul className='article-list'>
                    {articleList.map((item)=>(
                        <li className='article-item' key={item.article_id}>
                            <div>
                                <img src={require('../img/article-img.jpg')} alt='img'/>
                            </div>
                            <div className='word'>
                                <h2>{item.article_title}</h2>
                                <h5>{item.article_time}</h5>
                                <p>{item.article_abstract}</p>
                                <a href='./'>阅读更多</a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>


        )
    }
}

export default Article;