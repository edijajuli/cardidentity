import { useState } from "react";
import ReactModal from "react-modal";
import Modal from "./Modal";
import "./Card.css";



function InputForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [job, setJob] = useState("");
  const [list, setList] = useState([]);
  const [modalOpen, setModalOpen] = useState("");
  const [file, setState] = useState("");



  const onChange = e => setState(URL.createObjectURL(e.target.files[0]));

  const handlingSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, file);
    const date = { name, email, phone, adress, job };

    if (name && email && phone && adress && job) {
      setList((ls) => [...ls, date])
      setName("")
      setEmail("")
      setPhone("")
      setAdress("")
      setJob("")
      setState("")

    }
  }

  const HandleReset = e => {
    e.preventDefault();
    setList([])
  }

  return (
    <div className="form-group">
      <h1>Data Form</h1>
      <form onSubmit={handlingSubmit} className="form">
        <div className="formentered">
          <label>Name</label>
          <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="formentered">
          <label>Email</label>
          <input type="email" email="mail" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="formentered">
          <label>Phone Number</label>
          <input type="tel" phone="phone" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className="formentered">
          <label>Adress</label>
          <input type="text" domisili="adress" placeholder="Adress" value={adress} onChange={(e) => setAdress(e.target.value)} required />
        </div>
        <label>Job</label>
        <div class="col-75">
          <select id="job" name="job" onChange={(e) => setJob(e.target.value)} required>
            <option selected>Choose one</option>
            <option value="Striker" >Striker</option>
            <option value="Back">Full Back</option>
            <option value="Wanger">Game Maker</option>
          </select>
        </div>
        <div className="formatisi">
          <label>Foto</label>
          <input type="file" onChange={onChange} required></input>
          <img src={file} />

        </div>
        <button className="button">Add</button>
        <p></p>
        <button className="button" onClick={(e) => setModalOpen(e.target.value)} value="true" >Preview</button>
      </form>


      <ReactModal isOpen={modalOpen} className="modalPos" value="true">
        <div className="modal fade" id="previewCard" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <Modal list={list} name={name} phone={phone} email={email} adress={adress} job={job} file={file} />
          </div>
        </div>
        <button className="button" onClick={(e) => setModalOpen(false)} value="false" >Close</button>
        <button className="button" onClick={HandleReset}  >Reset</button>
      </ReactModal>
    </div>
  );
}

export default InputForm;