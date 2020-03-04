import React, {Component} from 'react';
import logo from './logo.png';
import './floating-label.css';

class HeaderForm extends React.Component {
  render() {
    return (
      <div className="text-center mb-5">
        <img  src= {logo} alt="logo" />
        <h3>Welcome to EduZone!</h3>
      </div>
    );
  }
}

class FormSign extends React.Component {
  
  render() {
    const list_names = ["username", "password"];
    const list_type = ["text", "password"];
    var form = [];
    for(var i = 0;i<list_names.length;i++)
    {
      form.push(<div className="form-label-group">
          <input type={list_type[i]} placeholder={list_names[i]} className="form-control" name={list_names[i]} id={list_names[i]} required autoFocus></input>
          <label htmlFor={list_names[i]}>{list_names[i]}</label>
        </div>);
    }
    return (
      form
    );
  }
}
class App extends React.Component {
  renderHeader() {
    return <HeaderForm />;
  }
  renderFornSign() {
    return <FormSign />;
  }
  render() {
    return (
      <form>
        {this.renderHeader()}
        {this.renderFornSign()}
        <a href="/" >Forgot Password ?</a>
        <input type="submit" className="btn btn-lg btn-success btn-block mt-2" value="Sign In" />
        
      </form>
    );
  }
}

export default App;
