import React from 'react'
import { useParams } from "react-router-dom";


function Page() {

  let params = useParams();

  return (
    <h1 className="text-center text-6xl capitalize">{params.page}</h1>
  )
}

export default Page