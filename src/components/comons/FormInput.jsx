import React, { Component } from 'react'

class FormInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  onChangeInput(event) {
    const { value } = event.target

    this.setState({ value })

    if (this.props.onChangeParent) this.props.onChangeParent(event)
  }
  render() {  
    return(
      <div class="form-group">
        <label for={ this.props.id}>
          {this.props.label}
        </label>
        <input 
          onChange={this.onChangeInput.bind(this)}
          id={this.props.id}
          name={this.props.name}
          type={this.props.type}
          class="form-control" 
          aria-describedby={this.props.description}
          placeholder={this.props.placeholder}
        />


        {
          this.props.help && (
            <small 
              id={`${this.props.id}-help`} 
              class="form-text text-muted"
            >
              {this.props.help}
            </small>
          )
        }
      </div>
    )
  }
}

export default FormInput