import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";


const AddContact = (props) => {
 
 
    const navigate =  useNavigate();
   
    const [state, setState] = useState({
      name: "",
      email: "",
    });
   
    const changeHandeler = (e) => {
      let newState = {...state};
      newState[e.target.name] = e.target.value;
      setState({...newState})
      console.log(state)
    }
   
    const add = (e) => {
      e.preventDefault();
      if (state.name === "" || state.email === "") {
        alert("fill all the fields");
        return;
      }
      props.addContactHandler(state);
      alert("success fully added")
      setState({ name: "", email: "" });

      // this.props.history.push("/");
    };
   
    return (
      <div className="ui main">
          <h2>Add Contact</h2>
   
          <form className="ui form" >
            <div className="field">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={state.name}
                onChange={changeHandeler}
              />
            </div>
            <div className="field">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={state.email}
                onChange={changeHandeler}
              />
            </div>
            <button onClick={(e) => {add(e); navigate("/")}} className="ui button blue" >Add</button>
          </form>
        </div>
    )
  }
   
  export default AddContact;