import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllHalls = () => {
  
  const axiosPublic = useAxiosPublic();
  
  const { isLoading, isError, data: halls = [], error, refetch } = useQuery({
    queryKey: ['halls'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/halls`);
      return res?.data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  

  if (error) return 'An error has occurred: ' + error.message
 
  return { isLoading, isError, halls, error, refetch };
};

export default useAllHalls;
