import { React, useState, useEffect } from "react";
import MapExport from "../components/Map/index";
import { Fade } from "react-reveal";
import CommunityRatings from "../components/CommunityRatings";
import { useHistory, useParams } from "react-router-dom";
import RateForm from "../components/RateForm/RateForm.js";
import LineGraph from "../components/LineGraph";
import InfoBox from "../components/InfoBox";
import { sortData, prettyPrintStat } from "../Utils/";
import numeral from "numeral";
import { Grid } from "@material-ui/core";
import "./details.css";
function Details() {
  let history = useHistory();
  let { id } = useParams();

  const redirect = () => {
    history.push("/ratepost");
  };

  const [countryInfo, setCountryInfo] = useState({});
  const [countries, setCountries] = useState([]);
  const [mapCountries, setMapCountries] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const [states, setStates] = useState([]);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries/usa")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries/")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          let sortedData = sortData(data);
          setMapCountries(data);
        });
    };

    const getStateData = async () => {
      fetch(
        "https://disease.sh/v3/covid-19/vaccine/coverage/states?fullData=true"
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const states = data.map((state) => ({
            name: state.state,
            value: state.timeline[0].total,
          }));
          // let sortedData = sortData(data);
          setStates(states);
          // setTableData(sortedData);
        });
    };

    getCountriesData();
    getStateData();
  }, []);

  console.log(casesType);

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : // : `https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1`;
          `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setInputCountry(countryCode);
        setCountryInfo(data);
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
      });
  };

  return (
    <div>
      <Fade left delay={900}>
        <br />
        <br />
        <br />
        <Grid container spacing={4}>
          <InfoBox
            onClick={(e) => setCasesType("cases")}
            title="Coronavirus Cases"
            isRed
            active={casesType === "cases"}
            cases={prettyPrintStat(countryInfo.todayCases)}
            total={numeral(countryInfo.cases).format("0.0a")}
          />
          <InfoBox
            onClick={(e) => setCasesType("recovered")}
            title="Recovered"
            active={casesType === "recovered"}
            cases={prettyPrintStat(countryInfo.todayRecovered)}
            total={numeral(countryInfo.recovered).format("0.0a")}
          />
        </Grid>
        <LineGraph />

        <MapExport id={id} />
      </Fade>
      <br />
      <Fade bottom delay={900}>
        {/* <button onClick={redirect} type="button" className="btn btn-dark">
          post rating?
        </button> */}
        <RateForm id={id} />
        <br />
        <CommunityRatings />
      </Fade>
    </div>
  );
}

export default Details;
