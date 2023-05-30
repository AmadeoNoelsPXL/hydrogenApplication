import {useLoaderData} from '@remix-run/react';
// import {QueryResultRow, sql} from '@vercel/postgres';
import {useEffect, useState} from 'react';

export default function Cart() {
  const data = useLoaderData();
  console.log({data});
  return <div>Hello World </div>;
}

export const loader = async () => {
  // ...Tu lógica para cargar datos aquí...
  const data = {key: 'value'}; // Este es el objeto que será accesible en useLoaderData() en el componente.
  console.log('hidden');
  const str = 'Hello, world!';
  // @ts-ignore
  const buffer = Buffer.from(str, 'utf8');
  const base64Str = buffer.toString('base64');
  //   const result = await sql`SELECT * FROM products`;

  //   if (result.rowCount === 0) {
  //     throw new Error('No data found');
  //   }

  //   // Assuming the column name is 'blob_column'
  //   const buffer: Buffer = result.rows[0].products;

  return {base64Str};
};
