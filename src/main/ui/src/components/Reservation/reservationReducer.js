export default function reducer (state, action){
  switch(action.type){
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}