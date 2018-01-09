import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import './home.css';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { Button, Pagination, PaginationItem, PaginationLink,ButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle} from 'reactstrap';

class Home extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.toggle2 = this.toggle2.bind(this);
        this.renderList=this.renderList.bind(this);
        this.state = {
            puesto: 'Puesto',
            label:'Label',
            dropdownOpen: false,
            dropdownOpen2: false,
            render: false
        };
      }
      renderList(){
        this.setState({
            render: true
          });
      }
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }
      toggle2() {
        this.setState({
          dropdownOpen2: !this.state.dropdownOpen2
        });
      }
    

    searchPressed(page) {
        this.renderList()
        this.props.fetchProfiles(this.state.label,this.state.puesto, page);
    }
    profiles() {
        //console.log(this.props.searchedProfiles)
        if(this.state.render===true){
            const searched = this.props.searchedProfiles
            const keys = Object.keys(searched);
            const profiles = keys.map(key => searched[key])
            profiles.shift();

            const listaProfiles = profiles.map((profile, i) =>
                <tr key={profile._id}>
                    <th scope="row">{i + 1}</th>
                    <td>{profile.name}</td>
                    <td>{profile.puesto}</td>
                    <td>{profile.label}</td>
                </tr>
            )
            if(profiles[0]!=null){
                return (
                    <Table>
                        <thead>
                            <tr>
                                <th>Nº</th>
                                <th>Name</th>
                                <th>Puesto</th>
                                <th>Label</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaProfiles}
                        </tbody>
                    </Table>
                )
            }else{
                
            }
        }else{
            return(<div>{}</div>)
        }
            
    }
    pages(){
        if(this.state.render===true){
            const searched = this.props.searchedProfiles
            const keys = Object.keys(searched);
            const profiles = keys.map(key => searched[key])

            const totalPages=profiles[0];
            const listPages=[];
            for(var i =0; i<totalPages;i++){
                listPages[i]=i
            }
            const numeroPaginas= listPages.map((page)=>
                <PaginationItem key={page+1}>
                    <PaginationLink onClick={() => this.searchPressed(page+1)}>{page+1} </PaginationLink>
                </PaginationItem>

            )
            return(
                <Pagination margin-left=""size="sm">
                    {numeroPaginas}
                </Pagination>
            )
        }else{
            return(<div>{}</div>)
        }
    }
    
    dropdownPuesto(){
        const puestos=['Front-End','Back-End', 'UX Designer','Arquitecto de Software']
        const listaPuestos=puestos.map((puesto)=>
        <div>
        <DropdownItem key={puesto} onClick={()=>this.setState({puesto: puesto})}>
            {puesto}
        </DropdownItem>
        <DropdownItem divider/>
        </div>
        )
        return(
            <DropdownMenu>
                {listaPuestos}
            </DropdownMenu>
        )
    }
    dropdownLabel(){
        const labels=['Accept','Maybe', 'Refuse']
        const listaLabels= labels.map((label)=>
        <div>
        <DropdownItem key={label} onClick={()=>this.setState({label: label})}>
            {label}
        </DropdownItem>
        <DropdownItem divider/>
        </div>
        )
        return(
            <DropdownMenu>
                {listaLabels}
            </DropdownMenu>
        )
    }
    render() {
        return (
            <div>
                <h1>Bienvenido al buscador de Perfiles</h1>
                <div>
                <ButtonDropdown id="bt" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <Button id="caret" color="success">{this.state.label}</Button>
                    <DropdownToggle caret color="success" />
                    {this.dropdownLabel()}
                </ButtonDropdown>
                <ButtonDropdown id="bt" isOpen={this.state.dropdownOpen2} toggle={this.toggle2}>
                    <Button id="caret" color="info">{this.state.puesto}</Button>
                    <DropdownToggle caret color="info" />
                    {this.dropdownPuesto()}
                </ButtonDropdown>
                <Button id="bt" color="primary" size="md" onClick={() => this.searchPressed(1)}>
                    Buscar
                </Button>
                <Button id="bt" color="danger" size="md" onClick={()=>this.setState({label: 'Label',puesto: 'Puesto', render: false })}>
                    Cancelar
                </Button>
                </div>
                <div>
                    {this.pages()}
                    {this.profiles()}
                </div>
                
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        searchedProfiles: state.searchedProfiles
    }
}
export default connect(mapStateToProps)(Home);