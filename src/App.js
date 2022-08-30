import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <table>
              <tr>
                  <td>
          <label>
              Contracts

          </label>
                  </td>
              </tr>

<tr>
    <td>
              <label>
                  Nom
                  <input type="text" name="name" />
              </label></td></tr>
              <tr><td>
              <label>
                  Adresse
                  <input type="text" name="name" />
              </label></td></tr>
             <tr><td> <label>
                  Ville :
                  <input type="text" name="name" />
              </label></td></tr>
             <tr><td> <label>
                  Pays:
                  <input type="text" name="name" />
              </label></td></tr>
              <tr><td> <label>
                  Téléphone :
                  <input type="text" name="name" />
              </label></td></tr>
            <tr><td> <label>
                  Début Contrat :
                  <input type="text" name="name" />
              </label></td></tr>
              <input type="reset" value="annuler" />    <input type="submit" value="confirmer" />

          </table>


      </header>
    </div>
  );
}

export default App;
