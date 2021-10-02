import { Grid, Button, RadioGroup, FormControlLabel, Radio } from "@material-ui/core"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { setUnit } from "../app/actions"

const Nav = ({reloadImages}) => {
    const dispatch = useDispatch()
    const [selectedUnit, setSelectedUnit] = useState("imperial")
    
    const handleChange = (e) => {
        dispatch(setUnit(e.target.value))
        setSelectedUnit(e.target.value)
    }

    return (
        <nav className="App-nav">
            <Grid container spacing={2}>
            <Grid item sm={6} md={10} lg={10} style={{textAlign:"left"}}>
                <Button variant="contained" color="primary" style={navStyles} onClick={()=>reloadImages()}>Reload List</Button>
                <Button variant="text" color="primary" style={{...navStyles, cursor: "pointer"}}>Top Dogs</Button>
            </Grid>
            <Grid item sm={6} md={2} lg={2} style={{textAlign:"right"}}>
                <RadioGroup row aria-label="gender" name="row-radio-buttons-group" value={selectedUnit} onChange={(e)=>handleChange(e)}>
                    <FormControlLabel value="imperial" control={<Radio />} label="Imperial" />
                    <FormControlLabel value="metric" control={<Radio />} label="Metric" />
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