
import { Request, Response } from 'express';
import { models } from '../db/db';

const { UserDoc, HospitalDoc } = models;

//get all user
export async function getAllUsers(request: Request, response: Response): Promise<Response> {

  try {
    const data = await UserDoc.find();
    const final = data.filter(p => p.role==="User")
    console.log(final)
    return response.status(200).send(final);
  } catch (error) {
    console.log(Error)
    return response.status(500).send({ message: "Technical Error" });
  }
}

//get all docs
export async function getAllDocs(request: Request, response: Response): Promise<Response> {

  try {
    const data = await UserDoc.find();
    const final = data.filter(p => p.role==="Doctor")
    console.log(final)
    return response.status(200).send(final);
  } catch (error) {
    console.log(Error)
    return response.status(500).send({ message: "Technical Error" });
  }
}

//get all hosps
export async function getAllHospitals(request: Request, response: Response): Promise<Response> {

  try {
    const data = await HospitalDoc.find();
    const final = data
    console.log(final)
    return response.status(200).send(final);
  } catch (error) {
    console.log(Error)
    return response.status(500).send({ message: "Technical Error" });
  }
}

//Save new user
export async function saveUserData(request: Request, response: Response): Promise<Response> {
  console.log(request.body)
  try {
    const data = new UserDoc(request.body);
    await data.save();
    return response.status(200).send({ data });
  } catch (error) {
    console.log(error)
    return response.status(500).send({ message: "Technical Error" });
  }
}

//Save new hospital
export async function saveHospitalData(request: Request, response: Response): Promise<Response> {
  console.log(request.body)
  try {
    const data = new HospitalDoc(request.body);
    console.log(data);
    await data.save();
    return response.status(200).send({ data });
  } catch (error) {
    console.log(error)
    return response.status(500).send({ message: "Technical Error" });
  }
}

//get user by id
export async function findById(request: Request, response: Response): Promise<Response> {

  try {
    const data = await UserDoc.findById(request.params.id);
    return response.status(200).send(data );
  } catch (error) {
    console.log(Error)
    return response.status(500).send({ message: "Technical Error" });
  }

}

//get hospital by id
export async function findHospitalById(request: Request, response: Response): Promise<Response> {

  try {
    const data = await HospitalDoc.findById(request.params.id);
    return response.status(200).send(data );
  } catch (error) {
    console.log(Error)
    return response.status(500).send({ message: "Technical Error" });
  }

}


//delete user
export async function deleteUserById(request: Request, response: Response): Promise<Response> {

  try {
    console.log(request.params.id)
    const data = await UserDoc.remove({ _id: request.params.id });
    console.log(data)
    return response.status(200).send({ data: "Deleted Successfully" });
  } catch (error) {
    console.log(Error)
    return response.status(500).send({ message: "Technical Error" });
  }
}

//delete hospital
export async function deleteHospitalById(request: Request, response: Response): Promise<Response> {

  try {
    console.log(request.params.id)
    const data = await HospitalDoc.remove({ _id: request.params.id });
    console.log(data)
    return response.status(200).send({ data: "Deleted Successfully" });
  } catch (error) {
    console.log(Error)
    return response.status(500).send({ message: "Technical Error" });
  }
}


export async function updateUser(request: Request, response: Response): Promise<Response> {

  try {
    console.log(request.body)
    const data = await UserDoc.findOneAndUpdate({ _id: request.params.id },
      request.body, { new: true });
    console.log(data)
    return response.status(200).send({ data: "Successfully Updated" });
  } catch (error) {
    console.log(Error)
    return response.status(500).send({ message: "Technical Error" });
  }
}

export async function updateHospital(request: Request, response: Response): Promise<Response> {

  try {
    console.log(request.body)
    const data = await HospitalDoc.findOneAndUpdate({ _id: request.params.id },
      request.body, { new: true });
    console.log(data)
    return response.status(200).send({ data: "Successfully Updated" });
  } catch (error) {
    console.log(Error)
    return response.status(500).send({ message: "Technical Error" });
  }
}

export async function auth(request: Request, response: Response): Promise<Response> {
    // console.log(request.params.emailId, request.params.password)
    try {
      const user = await UserDoc.findOne({ emailId: request.body.emailId, password: request.body.password });
      if (!user || typeof request.body.emailId === 'undefined') {
        response.status(401).json({
          // message: "Login not successful",
          error: "User not found",
        })
      } else {
        response.status(200).json({
          // message: "Login successful",
          user,
        })
      }
    } catch (error) {
      console.log(Error)
      return response.status(500).send({ message: "Technical Error" });
    }
  }

  //Save new user
  export async function reg(request: Request, response: Response): Promise<Response> {
    console.log(request.body)
    try {
      const data = new UserDoc(request.body);
      await data.save();
      return response.status(200).send({ data });
    } catch (error) {
      console.log(error)
      return response.status(500).send({ message: "Technical Error" });
    }
  }


