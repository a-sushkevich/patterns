function withLogger(Component) {
  return function Wrapped(props) {
    console.log("Props:", props);
    return <Component {...props} />;
  };
}
