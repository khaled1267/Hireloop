import { recruiterrole } from '@/lib/core/session';
import React from 'react';

const Recruiterlayout = async({children}) => {
    await recruiterrole("recruiter")
    return children 
    
};

export default Recruiterlayout;