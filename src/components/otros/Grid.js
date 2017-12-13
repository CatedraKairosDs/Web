import React from 'react';
import Note from './Note'
// El nombre de los componentes debe comenzar con mayúscula!

class Grid extends React.Component {
    

    getInitialState() {
        var notes = window.localStorage.getItem('notes');

        if (notes === null) {
            notes = [];
        } else {
            notes = JSON.parse(notes);
        }

        // Recordemos que es necesario devolver un objeto plano,
        // por lo que asignamos nuestro array de notas como propiedad
        return {
            notes: notes
        };
    }
    render() {
        var notes = this.state.notes.map(function(note, idx){
            return (
                <Note id={note.id} experiencia={note.experiencia} localizacion={note.localizacion} text={note.text} key={idx} />
            );
        });

        return (
            <div className="grid">
                {notes}
            </div>
        );
    }

};

export default Grid;