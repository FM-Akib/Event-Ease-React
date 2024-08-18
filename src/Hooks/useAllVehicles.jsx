import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllVehicles = () => {
  
  const axiosPublic = useAxiosPublic();
  
  const { isLoading:vehiclesLoading, isError, data: vehicles = [], error, refetch } = useQuery({
    queryKey: ['halls'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/vehicles`);
      return res?.data;
    },
  });
  if (vehiclesLoading) return 'Loading...'
  if (error) return 'An error has occurred: ' + error.message
 
  return { vehiclesLoading, isError,vehicles, error, refetch };
};

export default useAllVehicles;
