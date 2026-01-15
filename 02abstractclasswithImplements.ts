interface Photo{
    cameraMode: string;
    filter: string;
}

class TakePhoto implements Photo{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}

const hc = new TakePhoto('normal', 'normal', 1);