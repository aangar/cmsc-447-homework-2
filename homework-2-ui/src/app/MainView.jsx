'use client'
import {
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
} from "@mui/material" 
import EditIcon from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const NoUsersWarning = ({ error }) =>
  <Grid2 size={12}>
    <Alert severity='error'>
      <AlertTitle>You don&apos;t appear to have any users.</AlertTitle>
      { error ? <Typography>Error: {error}</Typography> : null }
    </Alert>
  </Grid2>

const SomethingWentWrong = ({ error }) =>
  <Grid2 size={12}>
    <Alert severity='error'>
      <AlertTitle>Something went wrong.</AlertTitle>
      <Typography>Error: {error}</Typography>
      <Typography>Please refresh and verify the user exists.</Typography>
    </Alert>
  </Grid2>

const CustomTableHeader = () =>
  <TableHead>
    <TableRow>
      <TableCell>Edit</TableCell>
      <TableCell>ID</TableCell>
      <TableCell>Name</TableCell>
      <TableCell>Points</TableCell>
      <TableCell align='right' >Delete</TableCell>
    </TableRow>
  </TableHead>

const CustomTableRow = ({ user, router, deleteOne }) =>
  <TableRow key={user?._id}>
    <TableCell>
      <IconButton
        onClick={() => router.push(`/manage?id=${user?._id}`)}
      >
        <EditIcon/>
      </IconButton>
    </TableCell>
    <TableCell>{user?._id}</TableCell>
    <TableCell>{user?.name}</TableCell>
    <TableCell>{user?.points}</TableCell>
    <TableCell align='right' >
      <IconButton onClick={() => { deleteOne(user._id) }} >
        <Delete/>
      </IconButton>
    </TableCell>
  </TableRow>

const UsersTable = ({
  users = [],
  router = null,
  showSuccess = false,
  deleteOne = () => {}
}) =>
  <>
    { showSuccess ?
      <Grid2 size={12}>
        <Alert>Your changes were saved successfully.</Alert>
      </Grid2>
      : null
    }
    <Grid2 size={12}>
      <Typography>All Users</Typography>
    </Grid2>
    <Grid2 size={12}>
      <TableContainer>
        <Table>
          <CustomTableHeader/>
          <TableBody>
            {users.map((user, idx) =>
              <CustomTableRow
                key={idx}
                user={user}
                router={router}
                deleteOne={deleteOne}
              />
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid2>
  </>

const MainView = ({ users, success, deleteOne }) => {
  const router = useRouter()
  const { data = [], error = null } = users
  if (error || data?.length === 0) {
    return <NoUsersWarning error={error} />
  }

  const ref = useRef(success === 'true')
  const [ud, setUD] = useState(users?.data ?? [])
  const [deleteError, setDeleteError] = useState(null)

  useEffect(() => {
    if (typeof window === 'undefined') { return }
    const search = window.location.search
    if (search?.includes("success")) {
      ref.current = true
      router.replace("/")
    }

    if (success === 'true') {
      ref.current = true
      router.replace("/")
    }
  }, [router, success])

  const handleDelete = async id => {
    const deleteResult = await deleteOne(id)
    if (!deleteResult?.success) {
      setDeleteError(`Failed to delete user with ID ${id}`)
      return
    }

    const filtered = ud.filter(x => x._id !== id)
    setUD(filtered)
    router.push("/?success=true")
  }

  return <>
  { deleteError ? <SomethingWentWrong error={deleteError} /> : null } 
  <UsersTable
    users={ud}
    router={router}
    showSuccess={ref.current}
    deleteOne={handleDelete}
  />
  </>
}

export default MainView
