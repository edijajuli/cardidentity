import React from "react";
import Card from "./Card";


function JendelaModal(props) {

    console.log(props.date)
    return (
        <div id="previewCard">
            {props.list.map(list => (
                <div className="card-data" >
                    <Card onClose={list.closeHandler} key={list.length} name={list.name} phone={list.phone} adress={list.adress} email={list.email} job={list.job} file={list.file} />
                </div>
            ))
            }
        </div>
    )
}

export default JendelaModal;

