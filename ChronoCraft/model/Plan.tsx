import Chrono from "./Chrono";

interface Plan {
    id: number;
    name: string;
    chronos: Chrono[];
    hasBreak: boolean;
    break: number
}

export default Plan;