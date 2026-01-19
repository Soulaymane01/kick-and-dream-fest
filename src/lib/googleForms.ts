import type { Sticker, Ticket } from '../lib/types';

// Form URLs  https://docs.google.com/forms/d/e/1FAIpQLScFBm3Aju0q2N8b3ZfdrmOaz0coWuqnUk18lm9QlQRnM5P85Q/viewform?usp=publish-editor
const STICKERS_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSezJtP5Itt5_4yUKvq0Oj2k1H55uqexxhb6KiNVjU1xD_bkGw/formResponse';
const TICKETS_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScFBm3Aju0q2N8b3ZfdrmOaz0coWuqnUk18lm9QlQRnM5P85Q/formResponse';

// Entry IDs for Stickers Form
const STICKERS_ENTRIES = {
  name: 'entry.1385583813',
  phone: 'entry.466119123',
  sticker1: 'entry.1618636209',
  sticker2: 'entry.1422961937',
};

// Entry IDs for Tickets
//  Form
const TICKETS_ENTRIES = {
  name: 'entry.44906135',
  phone: 'entry.1726020393',
  tier: 'entry.1655628130',
  quantity: 'entry.1398962939',
};

export const redirectToStickersForm = (
  stickers: Sticker[],
  name?: string,
  phone?: string
) => {
  const url = new URL(STICKERS_FORM_URL);
  
  if (name) url.searchParams.append(STICKERS_ENTRIES.name, name);
  if (phone) url.searchParams.append(STICKERS_ENTRIES.phone, phone);
  
  if (stickers[0]) url.searchParams.append(STICKERS_ENTRIES.sticker1, stickers[0].name);
  if (stickers[1]) url.searchParams.append(STICKERS_ENTRIES.sticker2, stickers[1].name);

  window.location.href = url.toString();
};

export const redirectToTicketsForm = (
  ticket: Ticket,
  quantity: number,
  name?: string,
  phone?: string
) => {
  const url = new URL(TICKETS_FORM_URL);
  
  if (name) url.searchParams.append(TICKETS_ENTRIES.name, name);
  if (phone) url.searchParams.append(TICKETS_ENTRIES.phone, phone);
  
  url.searchParams.append(TICKETS_ENTRIES.tier, ticket.tier);
  url.searchParams.append(TICKETS_ENTRIES.quantity, quantity.toString());

  window.location.href = url.toString();
};