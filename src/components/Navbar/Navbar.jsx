import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

export const Navbar=()=>{
    return (
        <div className='px-5 z-50 py-[.8em] bg-[#e91e63] lg:px-20 flex justify-between'>
                <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
                            <li className='logo font-semibold text-gray-300 text-2xl'>
                                Food Hub
                            </li>
                </div>
                <div className='flex items-center space-x-2 lg:space-x-10'>
                    <div className=''>
                            <IconButton>
                                <SearchIcon/>
                            </IconButton>
                    </div>
                </div>
        </div>
    );
}

