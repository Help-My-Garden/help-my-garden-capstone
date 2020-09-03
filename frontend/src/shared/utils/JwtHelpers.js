import React, {useState, useEffect} from "react";
import * as jwtDecode from "jwt-decode";


export const getToken = () => {
  const token = window.localStorage.getItem("authorization")
  return token ? jwtDecode(token) : null
}