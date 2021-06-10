export interface Widget {
    id: number;
    iconURL: string;
    tooltip: string;
    name: string;
    description: string;
    releaseDate: Date;
    whbp: boolean; // 'widget has been purchased'
}
