
export interface IUseHomeScreenController {
    isVisible: boolean;
    setVisible: (isVisible: boolean) => void;  
    currentId: string | null;
    setCurrentId: (loading: string | null) => void;
}