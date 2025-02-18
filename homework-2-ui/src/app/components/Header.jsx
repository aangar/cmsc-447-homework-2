'use client'
const { Grid2, Button, Divider } = require("@mui/material");

const Header = () =>
    <Grid2 size={12} minHeight={50} >
        <Grid2 size={3}  >
            <Button fullWidth variant='contained' >Create New User</Button>
        </Grid2>
        <Divider sx={{ mt: 1 }} />
    </Grid2>

export default Header