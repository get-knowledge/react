/***
 *  There is two type export 
 *      1. Deafult export (multiple is not allowed)
 *      2. Name Export
 *          Ex.
 *              export const AnyName;
 *              export const AnyName;
 *              import {ComponentName} from path;
 * 
 * 
 * Local state variable very power full
 *  
 * when the state variable changes then rerneder the state variable
 * 
 * const [res,setRes] = useState([
 * {
 *  data :
 * }
 * ]) 
 * 
 * React Use the Reconciaitions Algorithm (also konow as React Fiber)
 * 
 * 
 * econciliation
        The algorithm React uses to diff one tree with another to determine which parts need to be changed.
        
        update
        A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.
 * 
 * 
 * ***/