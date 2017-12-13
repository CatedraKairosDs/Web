import React from 'react';

class Note extends React.Component {
    render() {
        return (
            <div className="note">
                <div className="note-text">
                    <strong>Experiencia: {this.props.experiencia}</strong>
                    <strong>Localizacion: {this.props.localizacion}</strong>
                    <p>{this.props.text}</p>
                </div>
                <div className="note-toolbar">
                    <a className="note-btn-delete" />
                </div>
            </div>
        );
    }

}

export default Note;