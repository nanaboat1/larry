// data definition for an HEP 

import { Url } from "url";

// defines the data-model of an hep
export interface Hep {
    id : string; 
    name: string;
    description: string;
    image: Url; 
    video: Url;
    // 
    exercise_type: string; 
    category_type: string; 
    position_type: string; 
    
}