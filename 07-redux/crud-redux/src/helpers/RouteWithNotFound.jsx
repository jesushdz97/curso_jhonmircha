import { PageNotFound } from "@/components"
import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"

const RouteWithNotFound = ({children}) => {
  return (
    <Routes> 
      {children}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}
export default RouteWithNotFound