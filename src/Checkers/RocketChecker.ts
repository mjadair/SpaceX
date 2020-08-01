import Rocket from '../Interfaces/Rocket'


const isRocket = (variableToCheck: any): variableToCheck is Rocket =>
(variableToCheck as Rocket).rocket_id !== undefined;



export default isRocket