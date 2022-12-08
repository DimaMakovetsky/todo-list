export interface Task{
    id: number;
    title:string;
    completed:boolean;
    description?:string;
    isUrgent:boolean;
    assignee:string;
}