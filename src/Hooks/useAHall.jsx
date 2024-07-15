import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useAHall = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);

    const { isLoading, isError, data: loggedHall = {}, error, refetch } = useQuery({
        queryKey: ['Halls', user?.email],
        queryFn: async () => {
            if (!user?.email) return;
            const res = await axiosPublic.get(`/halls/profile/${user.email}`);
            return res.data;
        },
        enabled: !!user?.email, 
    });

    return { isLoading, isError, loggedHall, error, refetch };
};

export default useAHall;