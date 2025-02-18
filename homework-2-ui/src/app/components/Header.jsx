'use client'
const { Grid2, Button, Divider } = require("@mui/material");
import { useRouter } from "next/navigation"

const Header = () => {
  const router = useRouter()
  return (
    <Grid2 size={12} minHeight={50} >
      <Grid2 container spacing={2}>
        <Grid2 size={3}  >
            <Button
              fullWidth
              variant='contained'
              onClick={() => router.push("/")}
            >
              All Users 
            </Button>
        </Grid2>
        <Grid2 size={3}>
            <Button
              fullWidth
              variant='contained'
              onClick={() => router.push("/manage")}
            >
              Create New User
            </Button>
        </Grid2>
      </Grid2>
      <Divider sx={{ mt: 1 }} />
    </Grid2>
  )
}

export default Header
