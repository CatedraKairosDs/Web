import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
        this.open=this.open.bind(this);
    }
    open() {
        document.addEventListener('click', this.close);
        this.setState({
            open: true
        });
    }
    close()  {
        document.removeEventListener('click', this.close);
        this.setState({
            open: false
        });
    }
    save() {
        // Obtenemos los valores del formulario
        var note = {
            id: new Date().getTime(), // Generamos una id rápida
            text: ReactDOM.findDOMNode(this.refs.text).value,
            experiencia: ReactDOM.findDOMNode(this.refs.experiencia).value,
            localizacion: ReactDOM.findDOMNode(this.refs.localizacion).value
        };

        // Leemos la lista de notas guardadas o creamos una vacía
        var notes = window.localStorage.getItem('notes');

        if (notes === null) {
            notes = []; // Creamos una nueva lista vacía
        } else {
            notes = JSON.parse(notes); // Decodificamos la cadena
        }

        // Insertamos la nueva nota al principio de la lista
        notes.unshift(note);

        // Codificamos la lista como cadena de texto
        notes = JSON.stringify(notes);

        // Guardamos en localStorage
        window.localStorage.setItem('notes', notes);

        // Vaciamos el formulario
        ReactDOM.findDOMNode(this.refs.localizacion).value = '';
        ReactDOM.findDOMNode(this.refs.experiencia).value = '';
        ReactDOM.findDOMNode(this.refs.text).value = '';

        // Y finalmente lo cerramos
        this.close(); 
    }
    render() {
        return (
            <form className={"addnote" + (this.state.open ? ' open' : '')} onFocus={this.open} onSubmit={this.save}>
                <input className="addnote-title" type="text" placeholder="Experiencia" ref= "experiencia"/>
                <input className="addnote-title" type="text" placeholder="Localizacion" ref="localizacion"/>
                <textarea className="addnote-text" placeholder="Añadir nota" ref="text"/>
                <div className="addnote-toolbar">
                    <button id="boton">Calcular</button>
                    <a className="addnote-btn-list" />
                </div>
            </form>
        );
    }
    componentDidMount() {
        ReactDOM.findDOMNode(this).addEventListener('click', function(e){
            e.stopPropagation();
        });
    }
}

export default Form;