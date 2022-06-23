import React from 'react'
import { useNavigate } from 'react-router-dom'


const Cliente = ({cliente, handleEliminar}) => {
    const navigate = useNavigate();
  const {nombre, empresa, email, telefono, notas, id} = cliente;
  return (
    <tr className='border-b hover:bg-gray-50'>
        <td className='p-3'>{nombre}</td>
        <td className='p-3'>
            <p><span class="text-gray-800 uppercase font-bold">Email: </span>{email}</p>
            <p><span class="text-gray-800 uppercase font-bold">Tel: </span>{telefono}</p>
        </td>
        <td className='p-3'>
            {empresa}
        </td>  
        <td>
            <button type='button' onClick={()=> navigate(`/clientes/${id}`)} className='mt-3 bg-yellow-500 hover:bg-yellow-600 block w-full text-white p-2 uppercase font-bold text-xs'>Ver</button>
            <button type='button' onClick={()=> navigate(`/clientes/editar/${id}`)} className='mt-3 bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs'>Editar</button>
            <button type='button' onClick={()=>handleEliminar(id)} className='bg-red-600 hover:bg-red-700 block w-full text-white p-2 mt-3 uppercase font-bold text-xs'>Eliminar</button>
        </td> 
    </tr>
  )
}

export default Cliente