export const validate = (data: string[], errorMessages: string[]) => {
    let newErrState = {}
    for (let i in data){
        const key = "error" + i;
        const newError = {[key]: errorMessages[i]};
        if (data[i] === "") newErrState = {...newErrState, ...newError};
    }
    return newErrState;
}