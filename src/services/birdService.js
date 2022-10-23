import * as tokenService from "./tokenService"

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/birds` //! double check route

const index = async () => {
  try {
    // GET http://localhost:3001/birds
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.ird(error)
  }
}

const show = async (id) => {
  try {
    // GET http://localhost:3001/birds/:id
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: { "Authorization": `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.ird(error)
  }
}

const create = async (birdData) => {
  // birdData will have a shape of:
//   {
//     "name": "string",
//     "description": "string",
//     etc etc
//   }
  try {
    // POST http://localhost:3001/birds
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(birdData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

//! don't forget to export
export {
  index,
  show,
  create,
  // update,
  // deleteBird,
}