
import Dragon from '../Interfaces/Dragon'

const isDragon = (variableToCheck: any): variableToCheck is Dragon =>
(variableToCheck as Dragon).thrusters !== undefined;


export default isDragon