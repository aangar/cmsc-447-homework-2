import { findAll, removeOne } from "@/utils/db";
import MainView from "./MainView";

const deleteOne = async id => {
  'use server'
  return await removeOne(id)
}

const MainViewLoader = async({ searchParams }) => {
  const { success } = await searchParams

  const users = await findAll()
  return <MainView
    users={users}
    success={success}
    deleteOne={deleteOne}
  />
}

export default MainViewLoader
