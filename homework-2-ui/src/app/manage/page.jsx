import { findAll, upsert } from "@/utils/db";
import { redirect, notFound } from "next/navigation"
import ManageView from "./manage-view"

const upsertUser = async(data) => {
  'use server'
  return await upsert(data)
}

const resolveUser = async (id) => {
  'use server'
  const allUsers = await findAll()
  if (allUsers?.errors || allUsers?.data?.length < 1) {
    return { users: allUsers?.data }
  }

  // welcome to params being a freakin string!
  const idAsNum = Number(id)
  if (isNaN(idAsNum)) {
    return { users: allUsers?.data } 
  }

  const resolvedUser = allUsers
    ?.data
    ?.find(x => x._id === idAsNum)
  
  if (!resolvedUser) {
    return { users: allUsers?.data }
  }

  return { user: resolvedUser, users: allUsers?.data } 
}

const ManageSeverView = async({ searchParams  }) => {
  const { id } = await searchParams
  const resolvedUser = await resolveUser(id)

  return <ManageView {...resolvedUser}  update={upsertUser} /> 
}


export default ManageSeverView
