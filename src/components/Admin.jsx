import Header from "./Header";
import VenueList from "./VenueList";
import VenueReducer from "../services/VenueReducer";
import React from "react";
import VenueDataService from "../services/VenueDataService";

const useCookies = (key, defaultValue) => {
  const [cookie, setCookie] = React.useState(
    localStorage.getItem(key) || defaultValue
  );
  React.useEffect(() => {
    localStorage.setItem(key, cookie);
  }, [cookie, key]);
  return [cookie, setCookie];
};

const Admin = () => {

  const [searchVenue, setSearchVenue] = useCookies("searchVenue", "");
  const [venues, dispatchVenues] = React.useReducer(VenueReducer, {
    data: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
  });

  console.log(venues.data)

  React.useEffect(() => {
    dispatchVenues({ type: "FETCH_INIT" });
    try {
      
      VenueDataService.listJsonVenues().then((result) => {
        dispatchVenues({
          type: "FETCH_SUCCESS",
          payload: result.data,
        });
      });
    } catch {
      dispatchVenues({ type: "FETCH_FAILURE" });
    }
  }, []);
  const filteredVenues = venues.data.filter(
    (venue) =>
      venue.name.toLowerCase().includes(searchVenue.toLowerCase()) ||
      venue.address.toLowerCase().includes(searchVenue.toLowerCase())
  );

  return (
    <>
      <Header
        headerText="Yönetici"
        motto="Mekanlarınızı Yönetin!"
      />
      {venues.isError ? (
        <p>
          <strong>Birşeyler ters gitti! ...</strong>
        </p>
      ) : venues.isLoading ? (
        <p>
          <strong>Mekanlar Yükleniyor ...</strong>
        </p>
      ) : (
        venues.isSuccess && (
          <div className="row">
            <VenueList venues={filteredVenues} admin={true} />
          </div>
        )
      )}

    </>
  );
}

export default Admin;
