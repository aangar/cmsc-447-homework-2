'use client'
const {
  Grid2,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Alert,
  AlertTitle,
  TableBody
} = require("@mui/material");

const NoUsersWarning = ({ error }) =>
  <Grid2 size={12}>
    <Alert severity='error'>
      <AlertTitle>You don&apos;t appear to have any users.</AlertTitle>
      <Typography>Error: {error}</Typography>
    </Alert>
  </Grid2>

const CustomTableHeader = () =>
  <TableHead>
    <TableRow>
      <TableCell>ID</TableCell>
      <TableCell>Name</TableCell>
      <TableCell>Points</TableCell>
    </TableRow>
  </TableHead>

const CustomTableRow = ({ user }) =>
  <TableRow key={user?.id}>
    <TableCell>{user?.id}</TableCell>
    <TableCell>{user?.name}</TableCell>
    <TableCell>{user?.points}</TableCell>
  </TableRow>

const UsersTable = ({ users = [] }) =>
  <>
    <Grid2 size={12}>
    <Typography>All Users</Typography>
    </Grid2>
    <Grid2 size={12}>
      <TableContainer>
        <Table>
          <CustomTableHeader/>
          <TableBody>
            {users.map(user => <CustomTableRow user={user} />)}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid2>
  </>

const MainView = ({ users }) => {
  const { data = [], error = null } = users
  if (error || data?.length === 0) {
    return <NoUsersWarning error={error} />
  }

  return <UsersTable users={users} />
}

export default MainView