//here you describe the funtions that will do the actions at the table of profiles
import * as types from './types';
import Api from '../lib/api'

export function addProfile(){
    return {
        type: types.ADD_PROFILE,
    }
}

export function fetchProfiles(...query){
    if(query[0]==='Label'|| query[0]==='Todos'){
        query[0]='';
    }
    if(query[1]==='Puesto'|| query[0]==='Todos'){
        query[1]='';
    }
    return(
        (dispatch, getState)=>{
            let params=[
                //definir aqui los parametros que iran a continuacion de la url para filtrar
                `label=${encodeURIComponent(query[0])}`,
                `puesto=${encodeURIComponent(query[1])}`,
                `page=${query[2]}`,
            ].join('&'); //los unimos con un &
            //llamamos al metodo get con la url completa con los parametros 

            return Api.get(`/api-linkedin/v1/profiles/?${params}`).then(resp =>{
               console.log(resp.data);
                //console.log(resp.meta.totalpages);
                dispatch(setSearchedProfiles({profiles: resp.data},{pages: resp.meta}));
            }).catch((ex)=>{
                console.log(ex);
            })
        });
}
export function setSearchedProfiles({profiles},{pages}){
    return{
        type: types.SET_SEARCHED_PROFILES,
        profiles,
        pages
    }
}

export function fetchDeleteProfile(query){
    return(
        (dispatch, getState)=>{
            let params=[
                `name=${query}`,
            ].join('&'); //los unimos con un &
            //llamamos al metodo get con la url completa con los parametros 

            return Api.delete(`/api-linkedin/v1/profiles/?${params}`).then(resp =>{
               console.log(resp.data);
                //console.log(resp.meta.totalpages);
                dispatch(setDeleteProfile({profile: query}));
            }).catch((ex)=>{
                console.log(ex);
            })
        });
}

export function setDeleteProfile({profile}){
    return{
        type: types.DELETE_PROFILE,
        profile
    }
}