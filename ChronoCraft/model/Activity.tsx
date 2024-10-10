import Chrono from "./Chrono";

interface Activity {
    id: number;
    name: string;
    type: string;
    chronos: Chrono[];
}

export default Activity;