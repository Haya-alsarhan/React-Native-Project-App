import createReducer from '../helpers/createReducer';
import { NavigationActions }  from 'react-navigation';
import { AppNavigator } from '../../navigators/AppNavigator';


const firstAction = AppNavigator.router.getActionForPathAndParams('LoggedIn');
const initialNavState = AppNavigator.router.getStateForAction(firsttAction);


export const nav  = (state = initialNavState, action) => {

let nextState = AppNavigator.router.getStateForAction (action, state);

return nextState || state;
};
