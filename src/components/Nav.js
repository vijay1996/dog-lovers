//Displays navigation items

import { Grid, Button, RadioGroup, FormControlLabel, Radio } from "@material-ui/core"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { setUnit } from "../app/actions"

const Nav = ({reloadImages, type, setType}) => {
    const dispatch = useDispatch()
    const [selectedUnit, setSelectedUnit] = useState("imperial")
    
    const handleChange = (e) => {

        //simple function that sets the preferences for the unit system to be used. This is then dispatched to 
        //the store. So, in the functions component, when dog card is built, appropriate property for unit system
        //can be selected.

        dispatch(setUnit(e.target.value))
        setSelectedUnit(e.target.value)
    }

    return (
        <nav className="App-nav" style={{textAlign: "center"}}>
            <Grid container spacing={5} style={{textAlign: "center"}}>
                <Grid item xs={12} sm={12} md={6} lg={6} style={{textAlign:"center"}}>
                    <Button variant={"contained"} id="list" title="reloadButton" color="primary" style={navStyles} onClick={()=>reloadImages()}>Reload list</Button>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                    <RadioGroup row aria-label="gender" name="row-radio-buttons-group" style={{display: "flex", justifyContent: "center", alignContent:"center"}} value={selectedUnit} onChange={(e)=>handleChange(e)}>
                        <FormControlLabel value="imperial" control={<Radio />} style={{textAlign: "center"}} label="Imperial" />
                        <FormControlLabel value="metric" control={<Radio />} style={{textAlign: "center"}} label="Metric" />
                    </RadioGroup>
                </Grid>
            </Grid>
         </nav>
    )
}

const navStyles = {
  margin: "1%", 
  marginTop: "0"
}

export default Nav