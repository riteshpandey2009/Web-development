function withAuth(Component) {
  return function (props) {
    console.log(props);
    let isLoggedIn = true;
    if (isLoggedIn) {
      return <Component {...props}/>;
    }

    return <p>Please Log in</p>;
  };
}

export default withAuth;
