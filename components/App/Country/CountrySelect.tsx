import ReactFlagsSelect from "react-flags-select";
import React from 'react'

function CountrySelector({ selected, changeHandler }) {
  return <ReactFlagsSelect
    countries={["US",  "CN", "ES", "FR","ID","IT","JP","PT","SA","DE"]}
    customLabels={{ US: "English", CN: "Chinese",ES:"Spanish", FR: "French",ID:"Indonesian",IT:"Italian",JP:"Japanese",PT:"Portuguese",SA:"Arabic",DE:"German" }}
    className="menu-flags"
    selected={selected}
    onSelect={(code) => changeHandler(code)}
  />
}

export default CountrySelector