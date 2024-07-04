import { useQuery } from '@tanstack/react-query';
import { Agent } from '@/types';
import axios from 'axios';



export const getAgents = async (): Promise<Agent[]> => {
    try {
        const response = await axios.get<{ data: Agent[] }>(
            "https://valorant-api.com/v1/agents?language=ja-JP&isPlayableCharacter=true"
        );
        return response.data.data;
    } catch (error) {
        console.error("Error fetching agents:", error);
        throw new Error("Failed to fetch agents data");
    }
};

export const useAgents = () => {
    const { data, isLoading, error, isError } = useQuery<Agent[]>({
        queryKey: ['agents'],
        queryFn: () => getAgents(),
    })
    return { data, isLoading, error, isError }
}
