import { findAll } from "@/utils/db";
import MainView from "./MainView";

const MainViewLoader = async({ searchParams }) => {
  const { success } = await searchParams

  const users = await findAll()
  return <MainView users={users} success={success} />
}

export default MainViewLoader
