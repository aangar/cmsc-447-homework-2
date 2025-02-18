import { findAll } from "@/utils/db";
import MainView from "./MainView";

const MainViewLoader = async() => {
  const users = await findAll()
  return <MainView users={users} />
}

export default MainViewLoader