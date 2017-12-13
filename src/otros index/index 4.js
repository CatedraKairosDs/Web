class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          exp: '',
          loc: ''
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      const name= event.target.name
      const value= event.target.value
      this.setState({
        [name]: value,
      })

    } 
  
    handleSubmit(event) {
      
      alert('Experiencia was submited: ' + this.state.exp + '\nLocalizacion was submited: ' + this.state.loc);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <ul>
            Experiencia:
            <input type="number" name="exp" onChange={this.handleChange} />
          </ul>
          <ul>
            Localizacion:
            <input type="number" name="loc" onChange={this.handleChange} />
          </ul>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }