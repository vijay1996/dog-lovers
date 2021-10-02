import { Grid, Typography } from "@material-ui/core"

const BiColumnGrid = ({row1, row2}) => {
    return (
        <Grid container spacing={1} style={{lineHeight: "80%"}}>
            <Grid item sm={4} style={{textAlign: "left", paddingLeft: "5%"}}><Typography variant="caption"><b>{row1}</b></Typography></Grid>
            <Grid item sm={8} style={{textAlign: "left"}}><Typography variant="caption">{row2}</Typography></Grid>
        </Grid>
    )
}

export default BiColumnGrid