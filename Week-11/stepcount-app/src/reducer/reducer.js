
const initState = {
    steps : 0,
}
export function stepReducer(state = initState, action){
    if(action.type === "ADD"){
        return {
            steps: ++state.steps,
        };
    }else if(action.type === "RESET"){
        return {
            steps : 0,
        };
    }
    return state;
};
