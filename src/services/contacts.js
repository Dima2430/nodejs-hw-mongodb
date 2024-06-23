import { Contacts } from '../db/contact.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';
import { SORT_ORDER } from '../constans/index.js';
export const getContacts = async ({
  page = 1,
  perPage = 10,
  sortBy = '_id',
  sortOrder = SORT_ORDER.ASC,
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;
  const contactsQuery = Contacts.find();
  const contactsCount = await Contacts.find()
    .merge(contactsQuery)
    .countDocuments();
  const contacts = await contactsQuery
    .skip(skip)
    .limit(limit)
    .sort({ [sortBy]: sortOrder })
    .exec();
  const paginationData = calculatePaginationData(contactsCount, perPage, page);

  return {
    data: contacts,
    ...paginationData,
  };
};

export const getContactById = async (contactId) => {
  const contact = await Contacts.findById(contactId);
  return contact;
};

export const createContact = async (payload) => {
  const contact = await Contacts.create(payload);
  return contact;
};
export const deleteContact = async (contactId) => {
  const contact = await Contacts.findOneAndDelete({
    _id: contactId,
  });

  return contact;
};

export const updateContact = async (contactId, payload, options = {}) => {
  const rawResult = await Contacts.findOneAndUpdate(
    { _id: contactId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );

  if (!rawResult || !rawResult.value) return null;

  return {
    contact: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};
