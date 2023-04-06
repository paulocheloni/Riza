export type Video = {
    id: string;
    name: string;
    description?: string;
    url: string;
}

export type VideoProps = {
    video: Video;
    index: number; 
    setCurrentId: (id: string | null) => void;
    currentId: string | null;
    setVisible: (isVisible: boolean) => void;
}

