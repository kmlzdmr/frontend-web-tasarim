import AdminButton from "./AdminButton"

const LabelInput = ({ text, id }) => {
  return (
    <div className="form-group">
      <label className="col-sm-2 control-label">{text}:</label>
      <div style={{ marginBottom: 20 }} className="col-sm-10">
        <textarea
          className="review form-control"
          name={text}
          rows={1}
          id={id}
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

function AddUpdateVenue() {
  return (
    <div>

      <div className="page-header">
        <div className="row">
          <div className="col-lg-6">
            <h1 style={{ color: "black" }}>
              Yeni Mekan Ekle
            </h1>
          </div>
        </div>
      </div>




      <div className="row">

        <LabelInput text={"Mekan Adı"} id={"mekanAd"} />
        <LabelInput text={"Mekan Adresi"} id={"mekanAdres"} />
        <LabelInput text={"İmkanlar"} id={"imkanlar"} />
        <LabelInput text={"Enlem"} id={"enlem"} />
        <LabelInput text={"Boylam"} id={"boylam"} />
        <LabelInput text={"Günler-1"} id={"gunler1"} />
        <LabelInput text={"Açılış-1"} id={"acilis1"} />
        <LabelInput text={"Kapanış-1"} id={"kapanis1"} />
        <LabelCheckInput text={"Kapalı-1"} id={"checkkapali1"} />
        <LabelInput text={"Günler-2"} id={"gunler2"} />
        <LabelInput text={"Açılış-2"} id={"acilis2"} />
        <LabelInput text={"Kapanış-2"} id={"kapanis2"} />
        <LabelCheckInput text={"Kapalı-2"} id={"checkkapali2"} />



        <div className="row">
          <div className="column pull-right">
            <AdminButton
              name="Mekan Ekle"
              type="danger"
            />
          </div>
        </div>
      </div>

    </div>

  );
}

export default AddUpdateVenue;
