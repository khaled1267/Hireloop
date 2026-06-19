import { recruiterrole } from '@/lib/core/session';
import React from 'react';

const Adminlayout = async({children}) => {
    await recruiterrole("admin")
    
    return children  
    
};

export default Adminlayout;