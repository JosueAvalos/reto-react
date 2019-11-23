import React, { Component } from 'react'

import Card from '../components/comons/Card'
import Button from '../components/comons/Button'
import PostForm from '../components/comons/PostForm'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      posts: []
      
    }
  }

  onAddPost (newPost) {
    const { posts } = this.state

    posts.push(newPost)

    this.setState({ posts: [...posts]})
  }

  render() {
    const containerClassNames = ['container']
    const growClassNames = ['spinner-grow', 'text-info', 'all-page']

    if (this.state.loading) containerClassNames.push('hidden')
    else growClassNames.push('hidden')


    return(
      <div className={containerClassNames.join(' ')}>

<PostForm onSubmitParent={this.onAddPost.bind(this)}/>

        {
          this.state.posts.map((post) => (
            <Card 
              img={post.image}
              key={post.title}
            >
              <h5 className="card-title">
                {post.title}
              </h5>

              <p className="card-text">
                {post.description}
              </p>

              <Button
                type="primary"
                text={`ir a ${post.title}`}
              />
            </Card>
            )
          )
        }
        
      </div>
    )
  }
}

export default Home