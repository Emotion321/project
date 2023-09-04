import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";
export const Cat = () => {
    const { data: cstData } = useQuery(("cat"), async)
}