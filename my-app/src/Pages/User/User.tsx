import { useLocation, useNavigate } from "react-router-dom";

import Button from "components/Button/Button";
import { Title, UserPageWrapper } from "./styles";


function User() {
  const navigate = useNavigate();
  const locationInfo = useLocation();
console.log(locationInfo);


  const returnHome = () => {
    navigate('/')
  }
  return (<UserPageWrapper>
    <Title>User Page</Title>
    <Button name='Go to Home Page' onClick={returnHome}/>
  </UserPageWrapper>)
}

export default User;