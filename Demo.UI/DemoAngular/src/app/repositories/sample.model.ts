
export interface Sample {
    id: number;
    name: string;
    datas: Datas[];
  }
  
  export interface Datas {
    samplingTime: Date;
    properties: Properties[];
  }
  
  export interface Properties {
    value: any;  
    label: string;
  }