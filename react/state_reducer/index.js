function useToggle(reducer, initialState = false) {
  const [state, dispatch] = React.useReducer(
    reducer || ((s) => !s),
    initialState
  );
  return [state, () => dispatch()];
}
