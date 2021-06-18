import React from 'react'

const Tableau =()=>{


    return(
        <div className="container">
              <div className="row mt-3 mx-5">
                  <div className="col-md-6 ">
                    <h1>Techniciens</h1>
                  </div>
                  <div className="col-md-6 ">
                     <input type="text" className="form-control"  placeholder="rechercher"/>
                  </div>
              </div>

              <div className="row m-4">
                    <table id="table">
                        <tr>
                            <td className="firstcell p-3"> Id</td>
                            <td className="firstcell p-3"> Prénom</td>
                            <td className="firstcell p-3"> Adresse</td>
                            <td className="firstcell p-3"> Client</td>
                            <td className="firstcell p-3"> Etat</td>
                            
                        </tr>
                        <tr className="cells px-2">
                            <td  className="p-3"> Id</td>
                            <td  className="p-3"> Id</td>
                            <td  className="p-3"> Id</td>
                            <td  className="p-3"> Id</td>
                            <td  className="p-3"> Id</td>
                            
                        </tr>
                        <tr className="cells px-2">
                            <td className="p-3"> Id</td>
                            <td className="p-3"> Id</td>
                            <td className="p-3"> Id</td>
                            <td className="p-3"> Id</td>
                            <td className="p-3"> Id</td>
                            
                        </tr>
                        <tr className="cells px-2">
                            <td  className="p-3"> Id</td>
                            <td  className="p-3"> Id</td>
                            <td  className="p-3"> Id</td>
                            <td  className="p-3"> Id</td>
                            <td  className="p-3"> Id</td>
                            
                        </tr>
                    </table>
              </div>
              <div classname="row content-end">
                   <button className="btn btn-outline-success">Ajouter</button>
              </div>
        </div>
        );
}
export default Tableau;