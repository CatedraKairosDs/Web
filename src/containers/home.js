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
        this.pageNumberAdd=this.pageNumberAdd.bind(this);
        this.pageNumberSubstract=this.pageNumberSubstract.bind(this);
        this.pageNumber=this.pageNumber.bind(this);
        this.totalPages=this.totalPages.bind(this);
        this.state = {
            puesto: 'Puesto',
            label:'Label',
            pageNumber: 1,
            totalPages: 100000, //es muy alto para temas de paginacion, en cuanto se hace el fetch se pone a su valor real
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
      pageNumber(page){
        this.setState({
            pageNumber: page
          });
      }
      totalPages(page){
        this.setState({
            totalPages: page
          });
      }
      pageNumberAdd(page){
        if (page<this.state.totalPages){
            this.setState({
                pageNumber: page +1,
            });
        }else {
            this.pageNumber(page)
        }
      }
      pageNumberSubstract(page){
        if (page>1){
            this.setState({
                pageNumber: page -1,
            });
        }else {
            this.pageNumber(page)
        }
      }

    searchPressed(page,sub,add,initTotalpages) {
        let prox=page;
        if(sub===1){
            this.pageNumberSubstract(page)
            prox=prox-1;
        }
        else if(add===1){
            this.pageNumberAdd(page)
            prox=prox+1;
        } else{
            this.pageNumber(page)
        }
        this.renderList()
        this.props.fetchProfiles(this.state.label,this.state.puesto, prox).then( () =>{
            const searched = this.props.searchedProfiles
            const keys = Object.keys(searched);
            const profiles = keys.map(key => searched[key])
            const totalPages=profiles[0];
            this.totalPages(totalPages);
            console.log(this.state.totalPages)
        }

        );
        //se pone un timeout ya que tarda en hacer el fetch y obtener el numero de paginas totales q necesitamos
        // if(initTotalpages===1){
        //     setTimeout(() => {
        //             const searched = this.props.searchedProfiles
        //             const keys = Object.keys(searched);
        //             const profiles = keys.map(key => searched[key])
        //             const totalPages=profiles[0];
        //             this.totalPages(totalPages-5); // cuidao con esto lo esta tocando Roberto (por el -5)
        //             console.log(this.state.totalPages)
        //     }, 600);
        // }
        
    }
    deleteProfile(name) {
            this.props.fetchProfiles(name)
    }
    profiles() {
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
                    <td><Button  color="danger" onClick={() => {
                        if (window.confirm(`¿Seguro que quieres borrar el usuario: `+profile.name+`?`))
                        {this.deleteProfile(profile.name)};}}>Borrar</Button>
                    </td>
                </tr>
            )
            if(profiles[0]!=null){
                return (
                    <Table>
                        <thead>
                            <tr>
                                <th>Nº</th>
                                <th>Nombre</th>
                                <th>Puesto</th>
                                <th>Label</th>
                                <th>Acción</th>
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
            const listPages=[];
            let pagActual=this.state.pageNumber;
            let pagPrevia=pagActual;
            let pagPost=pagActual+1;

            for(var i =pagPrevia; i<pagPost;i++){
                if(i<=this.state.totalPages){
                listPages[i]=i
                }
            }
            const numeroPaginas= listPages.map((page)=>
                <PaginationItem key={page+2017}>
                    <PaginationLink onClick={() => this.searchPressed(this.state.pageNumber,0,0)}>{this.state.pageNumber} </PaginationLink>
                </PaginationItem>

            )
            return(
                <Pagination margin-left=""size="sm">
                    <PaginationItem>
                        <PaginationLink previous onClick={()=> this.searchPressed(this.state.pageNumber,1,0)} />
                    </PaginationItem>
                    {numeroPaginas}
                    <PaginationItem>
                        <PaginationLink next onClick={()=> this.searchPressed(this.state.pageNumber,0,1)} />
                    </PaginationItem>
                </Pagination>
            )
        }else{
            return(<div>{}</div>)
        }
    }
    
    dropdownPuesto(){
        const puestos=['Front-End','Back-End', 'UX Designer','Arquitecto de Software', 'Scrum Master']
        const listaPuestos=puestos.map((puesto)=>
        <div key={puesto}>
        <DropdownItem onClick={()=>this.setState({puesto: puesto})}>
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
        <div key={label}>
        <DropdownItem  onClick={()=>this.setState({label: label})}>
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
                <Button id="bt" color="primary" size="md" onClick={() => this.searchPressed(1,0,0,1)}>
                    Buscar
                </Button>
                <Button id="bt" color="danger" size="md" onClick={()=>this.setState({label: 'Label',puesto: 'Puesto', render: false, pageNumber: 1, totalPages: 100000, })}>
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
        searchedProfiles: state.searchedProfiles,
        deleteProfile: state.deleteProfile
    }
}
export default connect(mapStateToProps)(Home);