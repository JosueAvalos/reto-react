import React, { Component } from 'react'

import FormInput from '../comons/FormInput'
import Button from '../comons/Button'

class PostForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title:'',
      description:'',
      image:'',
    }
  }


  onChangeParent(event) {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  onSubmit(event) {
    event.preventDefault()

    if (this.props.onSubmitParent) {
       this.props.onSubmitParent(this.state) 
      } 
    }

  render() {
    return(
      <form onSubmit={this.onSubmit.bind(this)}>
        <FormInput 
          id='title'
          name='title'
          label='Nombre'
          placeholder='Indica tu nombre nombre completo'
          onChangeParent={this.onChangeParent.bind(this)}
        />

        <FormInput 
          id='descripion'
          name='description'
          label='Describete'
          placeholder='Cuentame una historia tuya'
          type='text'
          onChangeParent={this.onChangeParent.bind(this)}
        />

        <FormInput 
          id='image'
          name='image'
          label='Foto personal'
          placeholder='https://mifotopersonal.com'
          onChangeParent={this.onChangeParent.bind(this)}
        />

        <Button
          type="primary"
          nativeType="submit"
          text="Crear tu historia"
        />

        {
          this.state.image && (
            <img 
              src={this.state.image}
              alt="image preview"
            />
          )
        }
      </form>
    )
  }
}

export default PostForm