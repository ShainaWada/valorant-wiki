import { useQuery } from '@tanstack/react-query';
import { Agent } from '@/types';
import axios from 'axios';

export const getAgent = async (id: string): Promise<Agent> => {
    try {
        const response = await axios.get<{ data: Agent }>(
            `https://valorant-api.com/v1/agents/${id}?isPlayableCharacter=true&language=ja-JP`,
        );
        return response.data.data;
    } catch (error) {
        console.error("Error fetching agents:", error);
        throw new Error("Failed to fetch agents data");
    }
};

export const useAgent = (id: string) => {
    const { data, isLoading, error, isError } = useQuery<Agent>({
        queryKey: ['agent', id],
        queryFn: () => getAgent(id),
        enabled: !!id,
    });
    return { data, isLoading, error, isError };
};
