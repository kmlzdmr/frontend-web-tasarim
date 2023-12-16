import AdminButton from "./AdminButton"
import { useLocation } from 'react-router-dom';


const LabelInput = ({ text, id , value }) => {
  return (
    <div className="form-group">
      <label className="col-sm-2 control-label">{text}:</label>
      <div style={{ marginBottom: 20 }} className="col-sm-10">
        <textarea
          className="review form-control"
          name={text}
          rows={1}
          id={id}
          defaultValue={value}
        />
      </div>
    </div>
  )
}

const LabelCheckInput = ({ text }) => {
  return (
    <div className="form-group">
      <label className="col-sm-2 control-label">{text}:</label>
      <div style={{ marginBottom: 20 }} className="col-sm-10">
        <input style={{ width: "20px", height: "20px" }} type={"checkbox"}>
        </input>
      </div>
    </div>


  )
}

const UpdateVenue = () => {

    const location = useLocation();
    const venue = location.state && location.state.data;
    console.log(venue)

  return (
    <div>

      <div className="page-header">
        <div className="row">
          <div className="col-lg-6">
            <h1 style={{ color: "black" }}>
              Mekanı Güncelle 
            </h1>
          </div>
        </div>
      </div>




      <div className="row">

        <LabelInput text={"Mekan Adı"} id={"mekanAd"} value={venue.name}/>
        <LabelInput text={"Mekan Adresi"} id={"mekanAdres"} value={venue.address}/>
        <LabelInput text={"İmkanlar"} id={"imkanlar"} value={venue.foodanddrink.join(" ")}/>
        <LabelInput text={"Enlem"} id={"enlem"} value={venue.coordinates[0]}/>
        <LabelInput text={"Boylam"} id={"boylam"} value={venue.coordinates[1]} />
        <LabelInput text={"Günler-1"} id={"gunler1"} value={venue.hours[0].days}/>
        <LabelInput text={"Açılış-1"} id={"acilis1"} value={venue.hours[0].open}/>
        <LabelInput text={"Kapanış-1"} id={"kapanis1"} value={venue.hours[0].close}/>
        <LabelCheckInput text={"Kapalı-1"} id={"checkkapali1"} />
        <LabelInput text={"Günler-2"} id={"gunler2"} value={venue.hours[1].days}/>
        <LabelInput text={"Açılış-2"} id={"acilis2"} value={venue.hours[1].open}/>
        <LabelInput text={"Kapanış-2"} id={"kapanis2"} value={venue.hours[1].close}/>
        <LabelCheckInput text={"Kapalı-2"} id={"checkkapali2"} />



        <div className="row">
          <div className="column pull-right">
            <AdminButton
              name="Mekan Güncelle"
              type="info"
            />
          </div>
        </div>
      </div>

    </div>

  );
}

export default UpdateVenue;
