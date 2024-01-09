import mongoose from 'mongoose';
import { CountryModel } from '@/lib/models';


export async function findCountries(body) {
  return await CountryModel.find(body).lean();
}


export async function findCountryById( userId) {
  return await CountryModel.findOne({isDeleted:false, _id: new mongoose.Types.ObjectId(userId) });
}

export async function findCountry( username) {
  return await CountryModel.findOne({ username });
}

export async function insertCountry(data) {
  const user = await CountryModel.create({ ...data });
  return user;
}

export async function aggregateCountries(body) {
  return await CountryModel.aggregate(body);
}

