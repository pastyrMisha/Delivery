import React from 'react';
import RestroServiceContext from '../resto-service-context';

const WithRestoService = () => (Wrapped) => {
    return (props) => {
        return (
            <RestroServiceContext.Consumer>
                 {
                     (RestroService) => {
                         return <Wrapped {...props} RestroService={RestroService}/>
                     }
                 }
            </RestroServiceContext.Consumer>
        )
    }
};

export default WithRestoService;

// HOC - ф-ия, которая возвращает ф-ию, которая возвращает ф-ию, которая, как аргумент может принимать какой-то компонент


// function WithRestroService(Wrapped) {
//     return function (props) {
//         return (
//             <RestroServiceContext.Consumer>

//             </RestroServiceContext.Consumer>
//         )
//     }
// }