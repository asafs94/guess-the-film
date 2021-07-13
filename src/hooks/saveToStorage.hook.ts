import { useEffect } from "react"
import storageUtil from "../utils/storage.util"



type Hook = (...payload: Parameters<typeof storageUtil["setItem"]>) => void;


const useSaveToStorage: Hook = (name, value) => {
  useEffect(() => {
    storageUtil.setItem(name, value);
  }, [value])
}


export default useSaveToStorage;