import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { StorageKey } from "../constants/storage.constants"
import actions from "../redux/actions"
import storageUtil from "../utils/storage.util"



const useFetchStatistics = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const statistics = storageUtil.getItem(StorageKey.Statistics);
    statistics && dispatch(actions.initiateStatistics(statistics));
  }, [])
}



export default useFetchStatistics;