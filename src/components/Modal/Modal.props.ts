export interface IModal {
    isVisible: boolean;
    setVisible: (isVisible: boolean) => void;  
    setCurrentId: (loading: string | null) => void;
}