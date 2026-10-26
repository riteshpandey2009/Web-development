function Navbar({user = {isLoggedIn : false , name :"anoymous"}}) {
    const { name , isLoggedIn } = user

  return (
    <ul>
      <li>Home</li>
      <li>Shop</li>
      <li>About us</li>
{/*conditional rendering */}
      {isLoggedIn ? <li style={ {backgroundColor:"green", color:"white"}}>{name}</li> : <li style={ {backgroundColor:"red", color:"white"}}>Please Login first</li>}
    </ul>
  );
}

export default Navbar;
