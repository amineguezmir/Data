import React, { useState, useEffect } from "react";
import axios from "axios";
import "./test.css";

const Test3 = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOuvertOui, setFilterOuvertOui] = useState(false);
  const [filterType, setFilterType] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://parisdata.opendatasoft.com/api/explore/v2.1/catalog/datasets/fontaines-a-boire/records?limit=20"
        );
        setData(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleOuvertOuiChange = (e) => {
    setFilterOuvertOui(e.target.checked);
  };

  const handleTypeChange = (e) => {
    setFilterType(e.target.value);
  };

  const filteredData = data.filter(
    (item) =>
      (!filterOuvertOui || item.dispo === "OUI") &&
      (!filterType || item.modele.toLowerCase() === filterType.toLowerCase()) &&
      item.type_objet.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const types = [...new Set(data.map((item) => item.modele))];
  return (
    <div className="test-container">
      <h1 className="title">Fontaines à boire:</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
      />
      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={filterOuvertOui}
          onChange={handleOuvertOuiChange}
        />
        Dispo
      </label>
      <select
        value={filterType}
        onChange={handleTypeChange}
        className="dropdown"
        style={{
          fontFamily: "nexa, sans-serif",
          color: "#5f259f",
          border: "2px solid #5f259f",
          borderRadius: "5px",
          padding: "8px",
          backgroundColor: "#fff",
          outline: "none",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        <option value="">All Models</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <table className="data-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Modele</th>
            <th>Voie</th>
            <th>Commune</th>
            <th>dispo</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.identifiant}>
              <td>{item.type_objet}</td>
              <td>{item.modele}</td>
              <td>{item.voie}</td>
              <td>{item.commune}</td>
              <td>{item.dispo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Test3;
