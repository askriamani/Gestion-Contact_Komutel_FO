import React from 'react';
import axios from 'axios';
import {Button, TextField} from "@mui/material";

class ContactAdd extends React.Component {
  state = {
    nom: ''
  }

  handleSubmit = event => {
    event.preventDefault();

    let contact = {
      nom: event.target[0].value,
      adresse: event.target[1].value,
      ville: event.target[2].value,
      pays : event.target[3].value,
      debutContrat :event.target[4].value,
      telephone :event.target[5].value
    };
    console.log(contact)
    axios.post(`http://localhost:8080/contact`,  contact )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <table>
         <tr>  <label>
              Contact
            </label></tr>
            <tr>Name:
           <td> <TextField  type="text" name="nom"/></td>
           </tr>
            <tr>Adresse:
              <td> <TextField  type="text" name="adresse"/></td>
            </tr>
            <tr>Ville:
              <td> <TextField  type="text" name="ville"/></td>
            </tr>
            <tr>Pays:
              <td> <TextField  type="text" name="pays"/></td>
            </tr>
            <tr>Téléphone:
              <td> <TextField  type="text" name="telephone"/></td>
            </tr>
            <tr>Début Contrat:
              <td> <TextField  type="text" name="debutContrat"/></td>
            </tr>


          {/*<button type="submit">Add</button>*/}
            <tr>   <Button variant="contained" color="primary" type={"submit"}>
            confirmer
         </Button>
        <td>    <Button variant="contained" color="primary" type={"submit"}>
            annuler
            </Button></td></tr>
          </table>
        </form>
      </div>
    )
  }
}
export default ContactAdd
