import { redirect } from "next/navigation";
import { gettokenSession } from "./session";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;



export const authHeater = async () => {
    const token = await gettokenSession();
    const headers = token ? {
        
            authorization: `Bearer ${token}`
        
    } : {};
    return headers ;

}

export const serverFetch = async (path) => {
    const res = await fetch(`${baseUrl}${path}`);
    // handle 401, 404, 403
    return res.json();
}

export const protectedFetch = async (path) => {
      const res = await fetch(`${baseUrl}${path}`, {
          headers: await authHeater()
          
      });

      
    // handle 401, 404, 403
    return handlestatus(res);
    
}

    


export const serverMutation = async (path, data,method='POST') => {
    const res = await fetch(`${baseUrl}${path}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            ...await authHeater()
        },
        body: JSON.stringify(data),
    });

    // handle 401, 404, 403

    return handlestatus();
}
const handlestatus = res => {
    if (res?.status === 401) {
        redirect('/signin');
    } else if (res?.status === 404) {
        redirect('/404');
    } else if (res?.status === 403) {
        redirect('/unauthorized');
    }
    return res?.json();
}