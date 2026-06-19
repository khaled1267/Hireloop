import { recruiterrole } from '@/lib/core/session';
import React from 'react';

const Seekerlayout =async ({children}) => {
    await recruiterrole("seeker")
    return children
};

export default Seekerlayout;