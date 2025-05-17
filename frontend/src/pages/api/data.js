export default async function handler(req, res) {
    const BE = process.env.API_URL /* no NEXT_PUBLIC prefix here! */
              || 'http://backend:5000';
    const upstream = await fetch(`${BE}/data`);
    const data = await upstream.json();
    res.status(200).json(data);
  }