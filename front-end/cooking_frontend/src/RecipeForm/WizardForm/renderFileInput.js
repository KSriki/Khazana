import React, {Component} from 'react'

export default class renderFileInput  extends Component{
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
debugger;
    const { input: { onChange } } = this.props
    onChange(e.target.files[0])
  }

  render(){

    const { input: {value: omitValue, ...inputProps }, meta: omitMeta, label, accept, ...props } = this.props  //whatever props you send to the component from redux-form Field
    return(
     <div><label>{label}</label>
     <div>
       <input
        type='file'
        {...inputProps} {...props}
        onChange={this.onChange}
       />
     </div>
     </div>
    )
}
}
