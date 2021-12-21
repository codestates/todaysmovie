import './ProfileBtn.css';
import { useNavigate } from "react-router-dom";


export default function ProfileBtn () {

  const navigate = useNavigate();

  function handleClicktoMyprofile () {
    navigate("myprofile");
  }

  return (
<button className="noselect" onClick={handleClicktoMyprofile}>MY PROFILE</button>
  )
}