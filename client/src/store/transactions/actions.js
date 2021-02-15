import {CHANGE_ACTIVE_LINK} from '../actionTypes';

export function changeActiveLink(id){
    return{
        type:CHANGE_ACTIVE_LINK,
        payload:id
    }
}